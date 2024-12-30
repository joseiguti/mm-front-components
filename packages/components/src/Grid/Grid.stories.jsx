import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
};

const buttons = [
  {
    label: "Edit",
    iconName: "RiEditLine",
    onClick: (row) => alert(`Edit clicked for ${row.name}`),
  },
  {
    iconName: "RiDeleteBinLine",
    theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
    onClick: (row) => alert(`Delete clicked for ${row.name}`),
  },
];

const actions = {
  label: "Actions",
  key: "actions",
  textAlign: "end",
  width: 40,
  buttons: buttons,
};

const headers = [
  {
    label: "Product",
    key: "name",
    textAlign: "start",
    width: 30,
    isSortable: true
  },
  {
    label: "Category",
    key: "category",
    textAlign: "start",
    width: 30,
    isSortable: true
  },
];

const data = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable"},
  { id: 3, name: "Bread", category: "Grain"},
  { id: 4, name: "Milk", category: "Dairy"},
  { id: 5, name: "Cheese", category: "Dairy"},
  { id: 6, name: "Tomato", category: "Vegetable"},
  { id: 7, name: "Banana", category: "Fruit"},
  { id: 8, name: "Chicken", category: "Meat"},
  { id: 9, name: "Beef", category: "Meat"},
  { id: 10, name: "Rice", category: "Grain"},
  { id: 11, name: "Potato", category: "Vegetable"},
  { id: 12, name: "Lettuce", category: "Vegetable"},
  { id: 13, name: "Orange", category: "Fruit"},
  { id: 14, name: "Fish", category: "Seafood"},
  { id: 15, name: "Eggs", category: "Dairy"},
  { id: 16, name: "Pasta", category: "Grain"},
  { id: 17, name: "Shrimp", category: "Seafood"},
  { id: 18, name: "Butter", category: "Dairy"},
  { id: 19, name: "Spinach", category: "Vegetable"},
  { id: 20, name: "Peach", category: "Fruit"},
];

export const Default = () => <Grid headers={headers} data={data} />;

export const Actions = () => <Grid headers={headers.concat(actions)} data={data} />;

export const WithPagination = () => (
  <Grid headers={headers.concat(actions)} data={data} pagination itemsPerPage={5} />
);
