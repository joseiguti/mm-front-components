# Grid Component

A customizable and feature-rich data grid component for displaying tabular data with sorting, pagination, and custom actions. Built with Chakra UI.

## Installation

Install the package via NPM:

```bash
npm install @mi-monorepo/grid
```

## Usage

Import the `Grid` component and pass the necessary props:

```javascript
import React from 'react';
import Grid from '@mi-monorepo/grid';

const App = () => {
  const headers = [
    { label: 'Product', key: 'name', isSortable: true, width: 30 },
    { label: 'Category', key: 'category', isSortable: true, width: 30 },
    {
      label: 'Actions',
      key: 'actions',
      buttons: [
        {
          label: 'Edit',
          iconName: 'RiEditLine',
          onClick: (row) => alert(`Edit clicked for ${row.name}`),
        },
        {
          iconName: 'RiDeleteBinLine',
          onClick: (row) => alert(`Delete clicked for ${row.name}`),
        },
      ],
      textAlign: 'end',
      width: 40,
    },
  ];

  const data = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Bread', category: 'Grain' },
  ];

  return <Grid headers={headers} data={data} pagination itemsPerPage={5} />;
};

export default App;
```

## Props

### `headers`

- **Type**: `Array`
- **Description**: Defines the columns of the grid. Each column object supports the following:

| Property     | Type      | Description                                   |
| ------------ | --------- | --------------------------------------------- |
| `label`      | `string`  | The header label of the column.               |
| `key`        | `string`  | The key for accessing data in the row object. |
| `isSortable` | `boolean` | Enables sorting for the column.               |
| `width`      | `number`  | Sets the width of the column as a percentage. |
| `buttons`    | `Array`   | Defines action buttons for the column.        |
| `textAlign`  | `string`  | Aligns text (`"start"`, `"center"`, `"end"`). |

### `data`

- **Type**: `Array`
- **Description**: The data to display in the grid. Each object represents a row.

### `pagination`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enables pagination for the grid.

### `itemsPerPage`

- **Type**: `number`
- **Default**: `10`
- **Description**: Sets the number of rows per page.

### `enableSorting`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enables column sorting functionality.

````

## Features

### Sorting
Enable sorting on specific columns by setting `isSortable: true` in the header configuration.

### Pagination
Activate pagination by passing the `pagination` prop and setting `itemsPerPage`.

### Custom Actions
Add action buttons to any column using the `buttons` property in the header configuration.

### Theming
Customize the grid using the `theme` prop to override default styles.

```javascript
const customTheme = {
  headerColor: "purple.600",
  cellColor: "gray.700",
  rowHoverBg: "purple.50",
};

<Grid headers={headers} data={data} theme={customTheme} />;
````

## Example

A full example with sorting, pagination, and custom theming:

```javascript
<Grid
  headers={[
    { label: 'Name', key: 'name', isSortable: true, width: 30 },
    { label: 'Category', key: 'category', isSortable: true, width: 30 },
    {
      label: 'Actions',
      key: 'actions',
      buttons: [
        {
          label: 'View',
          iconName: 'RiEyeLine',
          onClick: (row) => alert(`Viewing ${row.name}`),
        },
      ],
      width: 40,
      textAlign: 'end',
    },
  ]}
  data={[
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
  ]}
  pagination
  itemsPerPage={5}
  enableSorting
  theme={{
    headerColor: 'blue.600',
    rowHoverBg: 'blue.50',
  }}
/>
```
