
A reusable and customizable drag-and-drop file input zone for your projects, ideal for user-friendly file uploads with additional functionality.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `FileDropZone` component and use it in your project:

```javascript
import React from 'react';
import FileDropZone from 'web-monorepo-ui-components';

const App = () => {
  const handleDrop = (files) => {
    console.log('Files dropped:', files);
  };

  return (
    <FileDropZone
      label="Drag your files here"
      onDrop={handleDrop}
      accept=".png,.jpg,.jpeg,.pdf"
    />
  );
};

export default App;
```

---

## Props

### `label`

- **Type**: `string`
- **Description**: The text label displayed inside the drop zone.

### `onDrop`

- **Type**: `function`
- **Description**: Callback function triggered when files are dropped into the zone.
- **Required**: `true`

### `accept`

- **Type**: `string`
- **Description**: Comma-separated string of file types that the drop zone accepts.
- **Default**: `"*"` (accepts all file types).

### `multiple`

- **Type**: `boolean`
- **Description**: Allows multiple file uploads if set to `true`.
- **Default**: `true`

### `isInvalid`

- **Type**: `boolean`
- **Description**: Marks the drop zone as invalid, triggering error styles.

### `errorMessage`

- **Type**: `string`
- **Description**: The error message displayed below the drop zone when `isInvalid` is `true`.

---

## Theming

The `FileDropZone` component supports customization through a theme.

### Default Theme

The `FileDropZone` uses these predefined styles by default:

```javascript
const defaultTheme = {
  colors: {
    borderColor: 'gray.300',
    borderHoverColor: 'blue.300',
    backgroundColor: 'gray.50',
    textColor: 'gray.600',
    errorBorderColor: 'red.500',
    errorTextColor: 'red.500',
  },
  borderRadius: '8px',
  spacing: '16px',
};
```

### Custom Theme

You can override these values by passing a custom theme object to the `FileDropZone` directly:

```javascript
const customTheme = {
  colors: {
    borderColor: 'teal.300',
    borderHoverColor: 'teal.500',
    backgroundColor: 'white',
    textColor: 'black',
    errorBorderColor: 'red.600',
    errorTextColor: 'red.600',
  },
  borderRadius: '12px',
  spacing: '20px',
};

const App = () => (
  <FileDropZone
    label="Upload your files"
    theme={customTheme}
    onDrop={(files) => console.log('Dropped files:', files)}
  />
);
```

---

## Advanced Example with Error Handling

Here is an advanced example demonstrating error handling with the `FileDropZone` component:

```javascript
import React, { useState } from 'react';
import FileDropZone from 'web-monorepo-ui-components';

const App = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDrop = (files) => {
    if (files.length > 3) {
      setIsInvalid(true);
      setErrorMessage('You can only upload up to 3 files.');
    } else {
      setIsInvalid(false);
      setErrorMessage('');
      console.log('Files dropped:', files);
    }
  };

  return (
    <FileDropZone
      label="Drag your files here"
      onDrop={handleDrop}
      accept=".png,.jpg,.jpeg,.pdf"
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    />
  );
};

export default App;
```
