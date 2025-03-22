A reusable and customizable file input field for your projects, designed for easy file uploads with additional functionality.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `FileField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import FileField from 'mm-front-components';

const App = () => {
  const [file, setFile] = useState(null);

  return (
    <FileField
      label="Upload your file"
      onChange={(e) => setFile(e.target.files[0])}
      placeholder="Choose a file..."
      isInvalid={!file}
      errorMessage={!file ? 'File is required' : ''}
    />
  );
};

export default App;
```

---

## Props

### `label`

- **Type**: `string`
- **Description**: The text label displayed above the file input field.

### `onChange`

- **Type**: `function`
- **Description**: Callback function triggered on file input change.
- **Required**: `true`

### `placeholder`

- **Type**: `string`
- **Description**: Placeholder text for the file input field.

### `isInvalid`

- **Type**: `boolean`
- **Description**: Marks the field as invalid, triggering error styles and message.

### `errorMessage`

- **Type**: `string`
- **Description**: The error message displayed below the input when `isInvalid` is `true`.

---

## Theming

The `FileField` component supports customization through a theme.

### Default Theme

The `FileField` uses these predefined styles by default:

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

You can override these values by passing a custom theme object to the `FileField` directly:

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
  <FileField
    label="Custom Theme"
    placeholder="Choose a file..."
    theme={customTheme}
  />
);
```

---

## Advanced Example with Validation

Here is an advanced example demonstrating validation with the `FileField` component:

```javascript
import React, { useState } from 'react';
import FileField from 'mm-front-components';

const App = () => {
  const [file, setFile] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setIsInvalid(!selectedFile); // Mark as invalid if no file is selected
  };

  return (
    <div>
      <FileField
        label="Upload your file"
        placeholder="Choose a file..."
        onChange={handleChange}
        isInvalid={isInvalid}
        errorMessage={isInvalid ? 'File is required.' : ''}
      />
    </div>
  );
};

export default App;
```
