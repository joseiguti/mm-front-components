import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Table } from '@chakra-ui/react';
import Button from "../Button";
import defaultTheme from "./Grid.styles";

const Grid = ({ headers, data, theme }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const mergedTheme = { ...defaultTheme, ...theme };

  const handleSort = (key) => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return (
    <Table.Root size={mergedTheme.size} colorScheme={mergedTheme.colorScheme}>
      {/* Header */}
      <Table.Header>
        <Table.Row>
          {headers.map((header, index) => (
            <Table.ColumnHeader
              key={index}
              textAlign={header.textAlign || "center"}
              color={mergedTheme.headerColor}
              style={{ width: header.width ? `${header.width}%` : "auto" }}
              cursor={header.isSortable ? "pointer" : "default"}
              onClick={
                header.isSortable ? () => handleSort(header.key) : undefined
              }
            >
              {header.label}
              {header.isSortable &&
                sortConfig.key === header.key &&
                (sortConfig.direction === "asc" ? " ↑" : " ↓")}
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>

      {/* Body */}
      <Table.Body>
        {sortedData.map((row, rowIndex) => (
          <Table.Row
            key={row.id || rowIndex}
            _hover={{ bg: mergedTheme.rowHoverBg }}
          >
            {headers.map((header, cellIndex) => (
              <Table.Cell
                key={cellIndex}
                textAlign={header.textAlign || "start"}
                color={mergedTheme.cellColor}
                style={{ width: header.width ? `${header.width}%` : "auto" }}
              >
                {header.buttons && Array.isArray(header.buttons) ? (
                  <Flex gap="2" justify={header.textAlign || "center"}>
                    {header.buttons.map((buttonConfig, btnIndex) => (
                      <Button
                        key={btnIndex}
                        label={buttonConfig.label}
                        iconName={buttonConfig.iconName}
                        size="sm"
                        theme={buttonConfig.theme || mergedTheme.buttonTheme}
                        onClick={() => buttonConfig.onClick(row, header.key)}
                      />
                    ))}
                  </Flex>
                ) : header.isLink ? (
                  <a href={row[header.key]} target="_blank" rel="noopener noreferrer">
                    {row[header.key]}
                  </a>
                ) : (
                  row[header.key]
                )}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

Grid.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(["start", "center", "end"]),
      width: PropTypes.number,
      isSortable: PropTypes.bool,
      isLink: PropTypes.bool,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          iconName: PropTypes.string,
          theme: PropTypes.object,
          onClick: PropTypes.func.isRequired,
        })
      ),
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object,
};

Grid.defaultProps = {
  theme: {},
};

export default Grid;
