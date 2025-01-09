# Dialog Component

A reusable and customizable dialog component designed for seamless integration into your projects. It supports dynamic content, flexible positioning, and customizable buttons using Chakra UI.

## Features

- **Dynamic Content**: Easily display custom titles, bodies, and actions.
- **Positioning**: Support for customizable placements (`top`, `center`, `bottom`).
- **Custom Buttons**: Use an array of buttons with individual actions and styles.
- **External Control**: Option to control the dialog’s visibility from external components.
- **Customizable Theme**: Override default styles with a custom theme object.

## Installation

Install the package via NPM:

```bash
npm install @mi-monorepo/dialog
```
## Usage

Import the `Dialog` component and configure it with dynamic properties:

```javascript
import React, { useState } from "react";
import Dialog from "@mi-monorepo/dialog";
import Button from "@mi-monorepo/button";

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const buttons = [
    {
      label: "Cancel",
      iconName: "RiCloseLine",
      size: "sm",
      theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
      onClick: handleCloseDialog,
    },
    {
      label: "Save",
      iconName: "RiSaveLine",
      size: "sm",
      theme: { colors: { buttonBg: "blue.500", buttonText: "white" } },
      onClick: () => {
        console.log("Save button clicked");
        handleCloseDialog();
      },
    },
  ];

  return (
    <div>
      <Button label="Open Dialog" onClick={handleOpenDialog} />
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title="Example Dialog"
        body={<p>This is a dialog example with dynamic content.</p>}
        buttons={buttons}
      />
    </div>
  );
};

export default App;
```

## Props

### `isOpen`
- **Type**: `boolean`
- **Required**: `true`
- **Description**: Determines if the dialog is open.

### `onClose`
- **Type**: `function`
- **Required**: `true`
- **Description**: Callback function invoked when the dialog is closed.

### `title`
- **Type**: `string`
- **Required**: `false`
- **Description**: The title of the dialog.

### `body`
- **Type**: `node`
- **Required**: `true`
- **Description**: The content or body of the dialog. Can include JSX elements.

### `buttons`
- **Type**: `array`
- **Required**: `false`
- **Description**: Array of button configurations to display in the dialog footer.

#### Button Object Properties:
- `label` (string): The text displayed on the button.
- `iconName` (string): Name of the icon to display on the button.
- `size` (string): Size of the button (`"sm"`, `"md"`, `"lg"`).
- `theme` (object): Custom theme for the button's appearance.
- `onClick` (function): Function invoked when the button is clicked.

### `theme`
- **Type**: `object`
- **Required**: `false`
- **Description**: Custom styles for dialog components. Overrides the default theme.

### `placement`
- **Type**: `string`
- **Required**: `false`
- **Default**: `"center"`
- **Description**: Determines the position of the dialog. Possible values: `"top"`, `"center"`, `"bottom"`.

## Layout and Responsiveness

The `Dialog` component adapts its layout based on its content and placement. It supports responsive design and ensures proper alignment with Chakra UI utilities.

### Placement
The `placement` prop allows you to control where the dialog appears on the screen:
- **`top`**: Aligns the dialog at the top of the viewport.
- **`center`**: Centers the dialog in the viewport (default).
- **`bottom`**: Aligns the dialog at the bottom of the viewport.

### Theming
The `Dialog` component is fully customizable. Use the `theme` prop to apply styles to the dialog's parts:
- **Content**: Customize padding, borders, and background.
- **Title**: Style the dialog's title (e.g., font size, color, weight).
- **Body**: Adjust the dialog's body content styles.
- **Footer Buttons**: Customize button appearance, size, and hover effects.

Example of a custom theme:
```javascript
const customTheme = {
  content: { border: "2px solid teal", borderRadius: "8px", padding: "16px" },
  title: { fontSize: "1.5rem", color: "teal.600" },
  body: { color: "gray.800", fontSize: "1rem" },
  buttonTheme: {
    colors: { buttonBg: "teal.500", buttonText: "white", buttonHover: "teal.600" },
  },
};

<Dialog
  isOpen={true}
  onClose={() => console.log("Dialog closed")}
  title="Custom Themed Dialog"
  body={<p>Explore custom styles for the dialog.</p>}
  buttons={[
    { label: "Close", iconName: "RiCloseLine", onClick: () => console.log("Closed") },
  ]}
  theme={customTheme}
/>
```

## Example with Placement

The `Dialog` component supports the `placement` prop to position the dialog on the screen. Here's an example demonstrating different placements:

```javascript
import React from "react";
import Dialog from "@mi-monorepo/dialog";

const PlacementExample = () => {
  return (
    <div>
      {["top", "center", "bottom"].map((placement) => (
        <Dialog
          key={placement}
          isOpen={true}
          onClose={() => console.log(`${placement} Dialog closed`)}
          title={`Dialog Placement: ${placement}`}
          body={<p>This dialog is placed at the {placement} of the viewport.</p>}
          buttons={[
            { label: "Close", iconName: "RiCloseLine", onClick: () => console.log("Closed") },
          ]}
          placement={placement}
        />
      ))}
    </div>
  );
};

export default PlacementExample;
```

## Theming

The `Dialog` component allows you to customize its appearance using the `theme` prop. You can override the default styles to match your application's design requirements.

### Example Theme

```javascript
const customTheme = {
  content: {
    backgroundColor: "gray.800",
    color: "white",
    padding: "1rem",
    borderRadius: "md",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "teal.300",
  },
  body: {
    fontSize: "1rem",
    color: "gray.300",
  },
  buttonTheme: {
    colors: {
      buttonBg: "blue.500",
      buttonText: "white",
    },
  },
};

<Dialog
  isOpen={true}
  onClose={() => console.log("Dialog closed")}
  title="Custom Themed Dialog"
  body={<p>This is a custom themed dialog.</p>}
  buttons={[
    { label: "Close", iconName: "RiCloseLine", onClick: () => console.log("Close clicked") },
    { label: "Save", iconName: "RiSaveLine", onClick: () => console.log("Save clicked") },
  ]}
  theme={customTheme}
/>;
```

### Theme Object Structure

- **`content`**: Styles for the dialog container.
- **`title`**: Styles for the dialog title.
- **`body`**: Styles for the dialog body content.
- **`buttonTheme`**: Styles for the action buttons within the dialog.

You can combine these styles to create visually cohesive dialogs tailored to your design specifications.
