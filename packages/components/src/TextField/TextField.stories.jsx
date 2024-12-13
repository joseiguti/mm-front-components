import React, { useState } from "react";
import TextField from "./TextField";

export default {
    title: "Components/TextField",
    component: TextField,
};

const Template = (args) => {
    const [value, setValue] = useState("");

    return (
      <TextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: "Default Label",
    placeholder: "Enter text",
};

export const WithError = Template.bind({});
WithError.args = {
    label: "Error Label",
    placeholder: "Enter text",
    isInvalid: true,
    errorMessage: "This field is required",
};
