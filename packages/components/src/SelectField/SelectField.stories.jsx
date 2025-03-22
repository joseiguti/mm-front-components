import React, { useState } from 'react';
import SelectField from './SelectField';

export default {
  title: 'Components/SelectField',
  component: SelectField,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

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
  label: 'Framework',
  placeholder: 'Choose a framework...',
  size: 'lg',
  options: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
  onChange: (value) => {
    console.log('Selected value from story:', value);
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Select with Error',
  placeholder: 'Choose an option...',
  value: '',
  isInvalid: true,
  isRequired: true,
  errorMessage: 'This field is required.',
  options: [
    { value: '1', label: 'VueJs' },
    { value: '2', label: 'ReactJs' },
    { value: '3', label: 'NextJs' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select Disabled',
  placeholder: 'Choose an option...',
  value: '',
  isDisabled: true,
  options: [
    { value: '1', label: 'VueJs' },
    { value: '2', label: 'ReactJs' },
    { value: '3', label: 'NextJs' },
  ],
};

export const PreselectedValue = Template.bind({});
PreselectedValue.args = {
  label: 'Preselected Value',
  placeholder: 'Choose an option...',
  value: ['11'],
  options: [
    { value: '9', label: 'VueJs' },
    { value: '8', label: 'ReactJs' },
    { value: '11', label: 'NextJs' },
  ],
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  label: 'Large Size Select',
  placeholder: 'Choose a framework...',
  options: [
    { value: '1', label: 'VueJs' },
    { value: '2', label: 'ReactJs' },
    { value: '3', label: 'NextJs' },
  ],
  theme: {
    size: 'lg',
    colors: {
      labelColor: 'teal.600',
      inputBorderColor: 'teal.300',
      inputFocusBorderColor: 'teal.500',
      errorBorderColor: 'red.600',
      errorTextColor: 'red.600',
    },
  },
};

import { Portal, Select, createListCollection } from "@chakra-ui/react";

export const BasedOnChakraDocs = {
  render() {
    const frameworks = createListCollection({

      items: [
        { value: "9", label: "VueJs" },
        { value: "8", label: "ReactJs" },
        { value: "11", label: "NextJs" },
      ],
    });

    return (
      <Select.Root collection={frameworks}
                   size="sm"
                   width="320px"
                   defaultValue={["11"]}
                   onValueChange={(value) => console.log(value)}
      >
        <Select.HiddenSelect />
        <Select.Label>Select framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Choose an option..." />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    );
  },
};
