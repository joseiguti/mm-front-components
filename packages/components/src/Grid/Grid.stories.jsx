import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
};

const headers = [
  { label: "Product", key: "name", textAlign: "start" },
  { label: "Category", key: "category", textAlign: "start" },
  {
    label: "Action",
    key: "action",
    textAlign: "center",
    isButton: true,
    buttonLabel: "Details",
    iconName: "BsFillInfoCircleFill", // Ícono para el botón
    onButtonClick: (row, key) => alert(`Clicked on ${key} of ${row.name}`),
  },
];

const data = [
  { id: 1, name: "Apple", category: "Fruit", action: "Details" },
  { id: 2, name: "Carrot", category: "Vegetable", action: "Details" },
  { id: 3, name: "Bread", category: "Grain", action: "Details" },
];

export const Default = () => <Grid headers={headers} data={data} />;
