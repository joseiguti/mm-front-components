# SelectField Component

A reusable and customizable select field component for your projects.

---

## Installation

Install the package via NPM:

```bash
npm install @mi-paquete/selectfield
```

---

## Usage

Import the `SelectField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import SelectField from '@mi-paquete/selectfield';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <SelectField
      label="Select your framework"
      placeholder="Choose one..."
      value={value}
      onChange={(selectedValue) => setValue(selectedValue)}
      options={[
        { value: '1', label: 'VueJs' },
        { value: '2', label: 'ReactJs' },
        { value: '3', label: 'NextJs' },
      ]}
      isInvalid={!value}
      errorMessage={!value ? 'This field is required.' : ''}
      size="lg"
    />
  );
};

export default App;
```

---

## Props

### `label`

- **Type**: `string`
- **Description**: The text label displayed above the select field.

### `value`

- **Type**: `string`
- **Description**: The current selected value of the select field.

### `onChange`

- **Type**: `function`
- **Description**: Callback function triggered when an option is selected. Receives the selected value as an argument.
- **Required**: `true`

### `placeholder`

- **Type**: `string`
- **Description**: Placeholder text displayed when no value is selected.

### `options`

- **Type**: `array`
- **Description**: An array of objects representing the available options. Each object should have `value` and `label` properties.
- **Required**: `true`

### `isInvalid`

- **Type**: `boolean`
- **Description**: Marks the field as invalid, triggering error styles and message.

### `errorMessage`

- **Type**: `string`
- **Description**: The error message displayed below the select field when `isInvalid` is `true`.

### `size`

- **Type**: `string`
- **Description**: Defines the size of the select field. Acceptable values are `"xs"`, `"sm"`, `"md"`, and `"lg"`. Defaults to `"md"`.

### `isMultiple`

- **Type**: `boolean`
- **Description**: Allows multiple selections if set to `true`. Defaults to `false`.

---

## Theming

The `SelectField` component supports customization through a theme, allowing you to define default styles and override them as needed.

### Default Theme

The `SelectField` uses these predefined styles by default:

```javascript
const defaultTheme = {
  colors: {
    labelColor: 'gray.600',
    inputBorderColor: 'gray.300',
    inputFocusBorderColor: 'blue.500',
    errorBorderColor: 'red.500',
    errorTextColor: 'red.700',
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
};
```

### Custom Theme

You can override the default styles by passing a custom theme object to the `SelectField` component. For example:

```javascript
const customTheme = {
  colors: {
    labelColor: 'black',
    inputBorderColor: 'teal.300',
    inputFocusBorderColor: 'teal.500',
    errorBorderColor: 'red.600',
    errorTextColor: 'red.600',
  },
  fonts: {
    body: 'Verdana, sans-serif',
    heading: 'Tahoma, sans-serif',
  },
};

const App = () => (
  <SelectField
    label="Custom Theme"
    placeholder="Select an option..."
    options={[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ]}
    theme={customTheme}
  />
);
```
