import React, { useState } from 'react';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const Template = (args) => {
  const [value, setValue] = useState('');

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
  label: 'Default Label',
  placeholder: 'Enter text',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required filed',
  isRequired: true,
  placeholder: 'Enter text',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error Label',
  placeholder: 'Enter text',
  isRequired: true,
  isInvalid: true,
  errorMessage: 'This field is required',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Field',
  placeholder: 'Enter text',
  isDisabled: true,
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  label: 'Custom Themed Label',
  placeholder: 'Type something...',
  isInvalid: false,
  theme: {
    size: "lg",
    colors: {
      labelColor: 'green',
      inputBorderColor: 'teal.300',
      inputFocusBorderColor: 'teal.500',
      errorBorderColor: 'red.600',
      errorTextColor: 'red.600',
    },
  },
};
