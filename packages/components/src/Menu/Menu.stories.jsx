import React from "react";
import { Menu } from "./index";
import { Home, Settings, Mail } from "@mui/icons-material";

export default {
  title: "Components/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { label: "Home", icon: <Home />, link: "/" },
    { label: "Settings", icon: <Settings />, link: "/settings" },
    { label: "Messages", icon: <Mail />, link: "/messages" },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { label: "Home", icon: <Home />, link: "/" },
    { label: "Settings", icon: <Settings />, link: "/settings" },
    { label: "Messages", icon: <Mail />, link: "/messages" },
  ],
  isCollapsed: true,
};
