import React, { useState } from "react";
import SelectField from "./SelectField";

export default {
  title: "Components/SelectField",
  component: SelectField,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  return (
    <SelectField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Default Select",
  placeholder: "Choose an option",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};
/*
export const WithError = Template.bind({});
WithError.args = {
  label: "Select with Error",
  placeholder: "Choose an option",
  isInvalid: true,
  errorMessage: "You must select an option",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Select",
  placeholder: "This field is disabled",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  isDisabled: true,
};


 */
