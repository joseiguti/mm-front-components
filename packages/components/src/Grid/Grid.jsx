import React from "react";
import PropTypes from "prop-types";
import {
  Table, Flex
} from "@chakra-ui/react";
import Button from "../Button";
import defaultTheme from "./Grid.styles";

const Grid = ({ headers, data, theme }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

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
            >
              {header.label}
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>

      {/* Body */}
      <Table.Body>
        {data.map((row, rowIndex) => (
          <Table.Row key={row.id || rowIndex}>
            {headers.map((header, cellIndex) => (
              <Table.Cell
                key={cellIndex}
                textAlign={header.textAlign || "center"}
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
