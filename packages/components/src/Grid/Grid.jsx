import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Table, Box, HStack } from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../../../src/components/ui/pagination';
import Button from '../Button';
import defaultTheme from './Grid.styles';
import SelectField from '../SelectField';

export const Grid = ({
  headers,
  data,
  theme,
  pagination,
  itemsPerPage: initialItemsPerPage,
  enableSorting,
}) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const mergedTheme = { ...defaultTheme, ...theme };

  const itemPerPageOptions = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
  ];

  const visibleData = pagination
    ? data.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : data;

  const handleSort = (key) => {
    if (!enableSorting) return;
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortConfig({ key, direction: 'asc' });
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setPage(1);
  };

  const sortedData = enableSorting
    ? [...visibleData].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc'
            ? aValue - bValue
            : bValue - aValue;
        }

        return 0;
      })
    : visibleData;

  return (
    <Box>
      <Table.Root size={mergedTheme.size} colorScheme={mergedTheme.colorScheme}>
        <Table.Header>
          <Table.Row>
            {headers.map((header, index) => (
              <Table.ColumnHeader
                key={index}
                textAlign={header.textAlign || 'center'}
                color={mergedTheme.headerColor}
                style={{ width: header.width ? `${header.width}%` : 'auto' }}
                cursor={
                  header.isSortable && enableSorting ? 'pointer' : 'default'
                }
                onClick={
                  header.isSortable && enableSorting
                    ? () => handleSort(header.key)
                    : undefined
                }
              >
                {header.label}
                {header.isSortable &&
                  enableSorting &&
                  sortConfig.key === header.key &&
                  (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedData.map((row, rowIndex) => (
            <Table.Row
              key={row.id || rowIndex}
              _hover={{ bg: mergedTheme.rowHoverBg }}
            >
              {headers.map((header, cellIndex) => (
                <Table.Cell
                  key={cellIndex}
                  textAlign={header.textAlign || 'start'}
                  color={mergedTheme.cellColor}
                  style={{ width: header.width ? `${header.width}%` : 'auto' }}
                >
                  {header.buttons && Array.isArray(header.buttons) ? (
                    <Flex gap="2" justify={header.textAlign || 'center'}>
                      {header.buttons.map((buttonConfig, btnIndex) => (
                        <Button
                          key={btnIndex}
                          label={buttonConfig.label}
                          icon={buttonConfig.icon}
                          size="sm"
                          theme={buttonConfig.theme || mergedTheme.buttonTheme}
                          onClick={() => buttonConfig.onClick(row, header.key)}
                        />
                      ))}
                    </Flex>
                  ) : header.isLink ? (
                    <a
                      href={row[header.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

      {pagination && (
        <PaginationRoot
          count={data.length}
          pageSize={itemsPerPage}
          page={page}
          onPageChange={(e) => setPage(e.page)}
        >
          <HStack justify="center" mt={4} gap="1">
            <PaginationPrevTrigger />
            <Box pt={4} css={{ minWidth: '100px' }}>
              <SelectField
                options={itemPerPageOptions}
                defaultValue={itemsPerPage.toString()}
                onChange={handleItemsPerPageChange}
              />
            </Box>
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      )}
    </Box>
  );
};

Grid.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['start', 'center', 'end']),
      width: PropTypes.number,
      isSortable: PropTypes.bool,
      isLink: PropTypes.bool,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          icon: PropTypes.element,
          theme: PropTypes.object,
          onClick: PropTypes.func.isRequired,
        })
      ),
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object,
  pagination: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  enableSorting: PropTypes.bool,
};

Grid.defaultProps = {
  theme: {},
  pagination: false,
  itemsPerPage: 5,
  enableSorting: false,
};

export default Grid;
