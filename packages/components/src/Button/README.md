A reusable and customizable button component for your projects. It supports various states like loading, disabled, and can include icons.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `Button` component and use it in your project:

```javascript
import React from 'react';
import { Button } from 'mm-front-components';
import { FaSave } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Button
        label="Save"
        icon={<FaSave />}
        onClick={() => alert('Save button clicked!')}
      />
      <Button label="Loading Button" isLoading={true} loadingText="Saving..." />
      <Button label="Disabled Button" isDisabled={true} />
    </>
  );
};

export default App;
```

---

## Props

### `label`

- **Type**: `string`
- **Description**: The text displayed on the button.

### `isLoading`

- **Type**: `boolean`
- **Description**: If `true`, the button displays a loading spinner and optionally a `loadingText`.

### `loadingText`

- **Type**: `string`
- **Description**: Text displayed while the button is in the loading state. Used when `isLoading` is `true`.

### `isDisabled`

- **Type**: `boolean`
- **Description**: If `true`, the button is disabled and cannot be interacted with.

### `icon`

- **Type**: `React.Element`
- **Description**: A React component representing the icon to display within the button. This replaces the previous `iconName` prop, allowing the user to pass any valid React icon component.

### `onClick`

- **Type**: `function`
- **Description**: Function called when the button is clicked.

### `size`

- **Type**: `string` (`"xs"`, `"sm"`, `"md"`, `"lg"`)
- **Description**: The size of the button.

### `theme`

- **Type**: `object`
- **Description**: Custom theme object to override the default styles. See "Theming" section for more details.

---

## Theming

The `Button` component supports theming to allow customization of its appearance. The default theme is defined in `themeForm.js`.

### Default Theme

The component uses these predefined styles by default:

```javascript
const themeForm = {
  colors: {
    buttonBg: 'blue.500',
    buttonText: 'white',
    buttonHover: 'blue.600',
    buttonDisabled: 'gray.300',
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
  size: 'md',
};

export default themeForm;
```

### Custom Theming

You can customize the `Button` component by passing a `theme` prop with your desired styles. This allows you to override the default styles provided in the `themeForm.js`.

#### Example:

```javascript
import { FaCheck } from 'react-icons/fa';

const customTheme = {
  colors: {
    buttonBg: 'green.500',
    buttonText: 'white',
    buttonHover: 'green.600',
  },
};

<Button label="Custom Themed Button" icon={<FaCheck />} theme={customTheme} />;
```
