import React, { useState } from "react";
import SelectField from "./SelectField";

export default {
  title: "Components/SelectField",
  component: SelectField,
};

const Template = (args) => {

  const [value, setValue] = useState(args.value || "");

  return (
    <SelectField
      {...args}
      value={value}
      onChange={(selectedValue) => {
        setValue(selectedValue);
        if (args.onChange) {
          args.onChange(selectedValue);
        }
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Framework",
  placeholder: "Choose a framework...",
  size: "lg",
  options: [
    { value: "1", label: "VueJs" },
    { value: "2", label: "ReactJs" },
    { value: "3", label: "NextJs" },
  ],
  onChange: (value) => {
    console.log("Selected value from story:", value);
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Select with Error",
  placeholder: "Choose an option...",
  value: "",
  isInvalid: true,
  errorMessage: "This field is required.",
  options: [
    { value: "1", label: "VueJs" },
    { value: "2", label: "ReactJs" },
    { value: "3", label: "NextJs" },
  ],
};

export const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  label: "Preselected Value",
  placeholder: "Choose an option...",
  defaultValue: "2",
  options: [
    { value: "1", label: "VueJs" },
    { value: "2", label: "ReactJs" },
    { value: "3", label: "NextJs" },
  ],
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: "Large Size Select",
  placeholder: "Choose a framework...",
  options: [
    { value: "1", label: "VueJs" },
    { value: "2", label: "ReactJs" },
    { value: "3", label: "NextJs" },
  ],
  theme: {
    size: "lg",
    colors: {
      labelColor: 'teal.600',
      inputBorderColor: 'teal.300',
      inputFocusBorderColor: 'teal.500',
      errorBorderColor: 'red.600',
      errorTextColor: 'red.600',
    },
  },
};

export const ManyOptions = Template.bind({});
ManyOptions.args = {
  label: "Many Options Select",
  placeholder: "Scroll to see more...",
  isMultiple: true,
  options: Array.from({ length: 20 }, (_, i) => ({
    value: `${i + 1}`,
    label: `Option ${i + 1}`,
  })),
};
