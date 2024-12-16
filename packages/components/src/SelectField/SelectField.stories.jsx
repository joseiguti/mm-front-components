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
  placeholder: "Choose a framework...",
  size: "lg",
  options: [
    { value: "1", label: "VueJs" },
    { value: "2", label: "ReactJs" },
    { value: "3", label: "NextJs" },
  ],
};

