import React from "react";
import PropTypes from "prop-types";
import {
  Table,
} from "@chakra-ui/react";
import Button from "../Button"; // Tu componente Button
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
              textAlign={header.textAlign || "start"}
              color={mergedTheme.headerColor}
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
                textAlign={header.textAlign || "start"}
                color={mergedTheme.cellColor}
              >
                {header.isButton ? (
                  <Button
                    label={header.buttonLabel || "Action"}
                    iconName={header.iconName} // Ícono para el botón
                    size="sm"
                    theme={header.buttonTheme || mergedTheme.buttonTheme}
                    onClick={() => header.onButtonClick(row, header.key)}
                  />
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
      label: PropTypes.string.isRequired, // Nombre de la columna
      key: PropTypes.string.isRequired,   // Clave para buscar en los datos
      textAlign: PropTypes.oneOf(["start", "center", "end"]), // Alineación
      isLink: PropTypes.bool,             // Si es un link
      isButton: PropTypes.bool,           // Si tiene un botón asociado
      buttonLabel: PropTypes.string,      // Texto del botón
      buttonTheme: PropTypes.object,      // Tema del botón
      onButtonClick: PropTypes.func,      // Función asociada al botón
      iconName: PropTypes.string,         // Nombre del ícono para el botón
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object,
};

Grid.defaultProps = {
  theme: {},
};

export default Grid;
