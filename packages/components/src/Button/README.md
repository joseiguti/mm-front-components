# Button Component

A reusable and customizable button component for your projects. It supports various states like loading, disabled, and can include icons.

---

## Installation

Install the package via NPM:

```bash
npm install @mi-paquete/button
```

---

## Usage

Import the `Button` component and use it in your project:

```javascript
import React from "react";
import Button from "@mi-paquete/button";

const App = () => {
  return (
    <>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      <Button
        label="Save"
        iconName="RiSave3Line"
        onClick={() => alert("Save button clicked!")}
      />
      <Button
        label="Loading Button"
        isLoading={true}
        loadingText="Saving..."
      />
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

### `iconName`
- **Type**: `string`
- **Description**: The name of the icon to display within the button. The component utilizes icons from the **react-icons/ri** library. If the specified icon is not found, it defaults to the fallback icon `RiErrorWarningLine`.
- **Reference**: [Browse available icons](https://react-icons.github.io/react-icons/icons/ri/)

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
    buttonBg: "blue.500",
    buttonText: "white",
    buttonHover: "blue.600",
    buttonDisabled: "gray.300",
    labelColor: "gray.600",
    inputBorderColor: "gray.300",
    inputFocusBorderColor: "blue.500",
    errorBorderColor: "red.500",
    errorTextColor: "red.700",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
  size: "md",
};

export default themeForm;
```

### Custom Theming

You can customize the `Button` component by passing a `theme` prop with your desired styles. This allows you to override the default styles provided in the `themeForm.js`.

#### Example:

```javascript
const customTheme = {
  colors: {
    buttonBg: "green.500",
    buttonText: "white",
    buttonHover: "green.600",
  },
};

<Button
  label="Custom Themed Button"
  theme={customTheme}
/>;
```
