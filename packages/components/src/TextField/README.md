A reusable and customizable text input field for your projects.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `TextField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import TextField from 'mm-front-components';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Enter your name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type here..."
      isInvalid={!value}
      errorMessage={!value ? 'This field is required' : ''}
    />
  );
};

export default App;
```

---

## Props

### `label`

- **Type**: `string`
- **Description**: The text label displayed above the input field.

### `value`

- **Type**: `string`
- **Description**: The current value of the input field.

### `onChange`

- **Type**: `function`
- **Description**: Callback function triggered on input change.
- **Required**: `true`

### `placeholder`

- **Type**: `string`
- **Description**: Placeholder text for the input field.

### `isInvalid`

- **Type**: `boolean`
- **Description**: Marks the field as invalid, triggering error styles and message.

### `errorMessage`

- **Type**: `string`
- **Description**: The error message displayed below the input when `isInvalid` is `true`.

---

## Theming

The `TextField` component supports customization through a theme.

### Default Theme

The `TextField` uses these predefined styles by default:

```javascript
const defaultTheme = {
  colors: {
    labelColor: 'gray.600',
    inputBorderColor: 'gray.300',
    inputFocusBorderColor: 'blue.500',
    errorBorderColor: 'red.500',
    errorTextColor: 'red.500',
  },
};
```

### Custom Theme

You can override these values by passing a custom theme object to the `TextField` directly:

```javascript
const customTheme = {
  colors: {
    labelColor: 'black',
    inputBorderColor: 'teal.300',
    inputFocusBorderColor: 'teal.500',
    errorBorderColor: 'red.600',
    errorTextColor: 'red.600',
  },
};

const App = () => (
  <TextField
    label="Custom Theme"
    placeholder="Type something..."
    theme={customTheme}
  />
);
```

### Advanced Example with Error Handling

Here is an advanced example demonstrating error handling with the `SelectField` component:

```javascript
import React, { useState } from 'react';
import { TextField } from 'mm-front-components';

const App = () => {
  const [name, setName] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsInvalid(!value); // Marca como inválido si está vacío
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        placeholder="Type your name..."
        onChange={handleChange}
        isInvalid={isInvalid}
        errorMessage={isInvalid ? 'Please complete this field' : ''}
      />
    </div>
  );
};

export default App;
```
