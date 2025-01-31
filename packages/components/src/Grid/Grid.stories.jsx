import React from 'react';
import Grid from './Grid';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const customTheme = {
  size: 'md',
  colorScheme: 'purple',
  headerColor: 'purple.600',
  cellColor: 'gray.700',
  rowHoverBg: 'purple.50',
  buttonTheme: {
    colors: {
      buttonBg: 'purple.500',
      buttonText: 'white',
    },
  },
};

const buttons = [
  {
    label: 'Edit',
    icon: <RiEditLine />,
    onClick: (row) => alert(`Edit clicked for ${row.name}`),
  },
  {
    icon: <RiDeleteBinLine />,
    theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
    onClick: (row) => alert(`Delete clicked for ${row.name}`),
  },
];

const actions = {
  label: 'Actions',
  key: 'actions',
  textAlign: 'end',
  width: 40,
  buttons: buttons,
};

const headers = [
  {
    label: 'Product',
    key: 'name',
    textAlign: 'start',
    width: 30,
    isSortable: true,
  },
  {
    label: 'Category',
    key: 'category',
    textAlign: 'start',
    width: 30,
    isSortable: true,
  },
];

const data = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Bread', category: 'Grain' },
  { id: 4, name: 'Milk', category: 'Dairy' },
  { id: 5, name: 'Cheese', category: 'Dairy' },
  { id: 6, name: 'Tomato', category: 'Vegetable' },
  { id: 7, name: 'Banana', category: 'Fruit' },
  { id: 8, name: 'Chicken', category: 'Meat' },
  { id: 9, name: 'Beef', category: 'Meat' },
  { id: 10, name: 'Rice', category: 'Grain' },
  { id: 11, name: 'Potato', category: 'Vegetable' },
  { id: 12, name: 'Lettuce', category: 'Vegetable' },
  { id: 13, name: 'Orange', category: 'Fruit' },
  { id: 14, name: 'Fish', category: 'Seafood' },
  { id: 15, name: 'Eggs', category: 'Dairy' },
  { id: 16, name: 'Pasta', category: 'Grain' },
  { id: 17, name: 'Shrimp', category: 'Seafood' },
  { id: 18, name: 'Butter', category: 'Dairy' },
  { id: 19, name: 'Spinach', category: 'Vegetable' },
  { id: 20, name: 'Peach', category: 'Fruit' },
  { id: 21, name: 'Strawberry', category: 'Fruit' },
  { id: 22, name: 'Blueberry', category: 'Fruit' },
  { id: 23, name: 'Broccoli', category: 'Vegetable' },
  { id: 24, name: 'Cucumber', category: 'Vegetable' },
  { id: 25, name: 'Avocado', category: 'Fruit' },
  { id: 26, name: 'Lemon', category: 'Fruit' },
  { id: 27, name: 'Lime', category: 'Fruit' },
  { id: 28, name: 'Bell Pepper', category: 'Vegetable' },
  { id: 29, name: 'Mushroom', category: 'Vegetable' },
  { id: 30, name: 'Zucchini', category: 'Vegetable' },
  { id: 31, name: 'Cherries', category: 'Fruit' },
  { id: 32, name: 'Pineapple', category: 'Fruit' },
  { id: 33, name: 'Coconut', category: 'Fruit' },
  { id: 34, name: 'Turkey', category: 'Meat' },
  { id: 35, name: 'Pork', category: 'Meat' },
  { id: 36, name: 'Quinoa', category: 'Grain' },
  { id: 37, name: 'Oats', category: 'Grain' },
];

export const Default = () => <Grid headers={headers} data={data} />;

export const Sorting = () => (
  <Grid headers={headers} data={data} enableSorting={true} />
);

export const Actions = () => (
  <Grid headers={headers.concat(actions)} data={data} />
);

export const WithPagination = () => (
  <Grid
    headers={headers.concat(actions)}
    data={data}
    pagination
    itemsPerPage={5}
  />
);

export const CustomStyled = () => (
  <Grid
    headers={headers.concat(actions)}
    data={data}
    theme={customTheme}
    pagination
    itemsPerPage={5}
  />
);
