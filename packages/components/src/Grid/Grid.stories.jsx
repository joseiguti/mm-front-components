import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
};

const headers = [
  { label: "Product", key: "name", textAlign: "start", width: 40 },
  { label: "Category", key: "category", textAlign: "start", width: 40 },
  {
    label: "Actions",
    key: "actions",
    textAlign: "center",
    width: 20,
    buttons: [
      {
        label: "Edit",
        iconName: "RiEditLine",
        onClick: (row) => alert(`Edit clicked for ${row.name}`),
      },
      {
        label: " ",
        iconName: "RiDeleteBinLine",
        theme: {
          colors: {
            buttonBg: "red.500", buttonText: "white"
          }
        },
        onClick: (row) => alert(`Delete clicked for ${row.name}`),
      },
    ],
  },
];

const data = [
  { id: 1, name: "Apple", category: "Fruit", actions: "Actions" },
  { id: 2, name: "Carrot", category: "Vegetable", actions: "Actions" },
  { id: 3, name: "Bread", category: "Grain", actions: "Actions" },
];

export const Default = () => <Grid headers={headers} data={data} />;
