# Web Monorepo UI Components

Welcome to **Web Monorepo UI Components**, a library of reusable components for React projects.

## Table of Contents

- [Introduction](#introduction)
- [Available Components](#available-components)
  - [`<Menu />`](#menu)
  - [`<TextField />`](#textfield)
  - [`<SelectField />`](#selectfield)
  - [`<FileField />`](#filefield)
  - [`<FileDropZone />`](#filedropzone)
  - [`<Button />`](#button)
  - [`<Notifications />`](#notifications)
  - [`<Dialog />`](#dialog)
  - [`<Form />`](#form)
  - [`<Grid />`](#grid)
- [Installation](#installation)
- [Example Project](#example-project)
- [Dependencies and Peer Dependencies](#dependencies-and-peer-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This library is designed to accelerate UI development by providing styled and configurable components. It is optimized for use with **Next.js** projects.

## Available Components

Below are the components available in this library:

<a id="menu"></a>
# `<Menu />`


A highly customizable and collapsible side menu built with React and Styled Components.
[Back to Table of Contents](#table-of-contents)

## Features

- **Collapsible Sidebar**: Expand or collapse the menu with a toggle button.
- **Nested Submenus**: Support for parent menu items with child items.
- **Theming**: Easily customizable through a JSON configuration and theming support.
- **Icons**: Leverages Material Design icons for visual representation.
- **JSON Configuration**: Fully customizable menu via a JSON file.

---

## Usage

Import the `Menu` component and use it in your project:

```javascript
import React from 'react';
import { Menu } from 'web-monorepo-ui-components';

const App = () => {
  const customConfig = {
    logo: 'https://example.com/my-logo.png',
    items: [
      {
        label: 'Home',
        icon: 'HomeIcon',
        link: '/',
        children: [
          { label: 'Sub Home 1', link: '/sub-home-1' },
          { label: 'Sub Home 2', link: '/sub-home-2' },
        ],
      },
      { label: 'Settings', icon: 'SettingsIcon', link: '/settings' },
    ],
  };

  return <Menu config={customConfig} />;
};

export default App;
```

---

## Configuration

The menu can be customized through a JSON object passed to the `config` prop. Below is an example of the configuration:

```json
{
  "logo": "https://via.placeholder.com/150",
  "items": [
    {
      "label": "Home",
      "icon": "HomeIcon",
      "link": "/",
      "children": [
        { "label": "Sub Home 1", "link": "/sub-home-1" },
        { "label": "Sub Home 2", "link": "/sub-home-2" }
      ]
    },
    {
      "label": "Settings",
      "icon": "SettingsIcon",
      "link": "/settings"
    },
    {
      "label": "Messages",
      "icon": "MailIcon",
      "link": "/messages"
    }
  ]
}
```

---

## Props

### `config`

- **Type**: `object`
- **Description**: The configuration object for the menu.
- **Default**: `{}`

---

## Theming

The component uses `styled-components` for styling, and the theme can be extended using the `ThemeProvider`. Below is an example of a theme:

```javascript
const theme = {
  colors: {
    primary: '#003366',
    secondary: '#FFFFFF',
    hover: '#F1F1F1',
    submenuBackground: '#0055A5',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    size: {
      small: '14px',
      medium: '16px',
    },
  },
  icons: {
    size: '20px',
  },
};
```

Wrap your app with the `ThemeProvider`:

```javascript
import { ThemeProvider } from 'styled-components';
import theme from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```
 

<!-- Placeholder for the Menu README.md -->

<a id="textfield"></a>
# `<TextField />`


A reusable and customizable text input field for your projects.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `TextField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import TextField from 'web-monorepo-ui-components';

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
import SelectField from 'web-monorepo-ui-components';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (value) => {
    setSelectedValue(value);
    setIsInvalid(!value); // Mark as invalid if no value is selected
  };

  return (
    <div>
      <SelectField
        label="Select an Option"
        placeholder="Choose a framework..."
        options={[
          { value: '1', label: 'React.js' },
          { value: '2', label: 'Vue.js' },
          { value: '3', label: 'Angular' },
        ]}
        value={selectedValue}
        onChange={handleChange}
        isInvalid={isInvalid}
        errorMessage={isInvalid ? 'Please select an option.' : ''}
      />
    </div>
  );
};

export default App;
```
 

<!-- Placeholder for the TextField README.md -->

<a id="selectfield"></a>
# `<SelectField />`


A reusable and customizable select field component for your projects.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `SelectField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import SelectField from 'web-monorepo-ui-components';

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


<!-- Placeholder for the SelectField README.md -->

<a id="filefield"></a>
# `<FileField />`


A reusable and customizable file input field for your projects, designed for easy file uploads with additional functionality.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `FileField` component and use it in your project:

```javascript
import React, { useState } from 'react';
import FileField from 'web-monorepo-ui-components';

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
import FileField from 'web-monorepo-ui-components';

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


<!-- Placeholder for the FileField README.md -->

<a id="filedropzone"></a>
# `<FileDropZone />`


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


<!-- Placeholder for the FileDropZone README.md -->

<a id="button"></a>
# `<Button />`


A reusable and customizable button component for your projects. It supports various states like loading, disabled, and can include icons.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `Button` component and use it in your project:

```javascript
import React from 'react';
import Button from 'web-monorepo-ui-components';

const App = () => {
  return (
    <>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Button
        label="Save"
        iconName="RiSave3Line"
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
const customTheme = {
  colors: {
    buttonBg: 'green.500',
    buttonText: 'white',
    buttonHover: 'green.600',
  },
};

<Button label="Custom Themed Button" theme={customTheme} />;
```


<!-- Placeholder for the Button README.md -->

<a id="notifications"></a>
# `<Notifications />`


The `Notifications` component is a reusable wrapper for creating customizable toast notifications using `Toastify`. It supports multiple notification types, durations, and positions, with the ability to customize styles through a centralized theme file. This component provides a simple and flexible way to add user notifications to your project.
[Back to Table of Contents](#table-of-contents)

### Installation

To use the `Notifications` component, ensure you have the `toastify-js` library installed. You can install it via NPM:

```bash
npm install toastify-js
```

Include the Toastify CSS in your project:

```javascript
import 'toastify-js/src/toastify.css';
```

## Usage

To use the `Notifications` component, import it and call the `notify` method to trigger a notification. Here's an example:

```javascript
import Notifications from './Notifications';

const App = () => {
  const handleNotification = () => {
    const { notify } = Notifications({
      message: 'This is a success notification!',
      type: 'success',
      duration: 5000,
      position: 'top-right',
    });

    notify();
  };

  return <button onClick={handleNotification}>Show Notification</button>;
};

export default App;
```

## Props

The `Notifications` component supports the following props:

### `message`

- **Type**: `string`
- **Required**: Yes
- **Description**: The content of the notification message.

### `type`

- **Type**: `string`
- **Required**: No
- **Default**: `"info"`
- **Options**: `"success"`, `"error"`, `"warning"`, `"info"`
- **Description**: Defines the type of notification. This affects the background and text colors.

### `duration`

- **Type**: `number`
- **Required**: No
- **Default**: `5000`
- **Description**: Duration in milliseconds for how long the notification is visible. Setting it to `0` makes the notification persistent until manually closed.

### `position`

- **Type**: `string`
- **Required**: No
- **Default**: `"top-right"`
- **Options**: `"top-right"`, `"top-left"`, `"bottom-right"`, `"bottom-left"`
- **Description**: Determines where the notification appears on the screen.

### `theme`

- **Type**: `object`
- **Required**: No
- **Description**: Allows customization of the notification styles. Overrides the default styles.

#### Example `theme` Object:

```javascript
const customTheme = {
  success: { background: 'darkgreen', color: 'white' },
  error: { background: 'darkred', color: 'white' },
  warning: { background: 'darkorange', color: 'white' },
  info: { background: 'darkblue', color: 'white' },
};
```

## Default Styles

The `Notifications` component includes default styles for different notification types. These styles can be overridden by providing a custom `theme` object.

### Default Styles

```javascript
const defaultStyles = {
  success: { background: 'green', color: 'white' },
  error: { background: 'red', color: 'white' },
  warning: { background: 'orange', color: 'white' },
  info: { background: 'blue', color: 'white' },
};
```

### Custom Styles

You can provide your own theme object to override the default styles. For example:

```javascript
const customTheme = {
  success: { background: 'limegreen', color: 'black' },
  error: { background: 'darkred', color: 'white' },
  warning: { background: 'goldenrod', color: 'black' },
  info: { background: 'royalblue', color: 'white' },
};
```

Pass the theme prop to the Notifications component when invoking it:

```javascript
<Notifications
  message="Custom styled notification!"
  type="success"
  duration={5000}
  position="bottom-left"
  theme={customTheme}
/>
```

## Positioning

The `Notifications` component allows you to display notifications in different positions on the screen. The `position` prop accepts the following values:

- `top-right` (default)
- `top-left`
- `bottom-right`
- `bottom-left`

### Example Usage

```javascript
<Notifications
  message="Notification at the top left"
  type="info"
  duration={5000}
  position="top-left"
/>
```

## Custom Positioning

To customize the placement further, you can use CSS styles and Toastify options. For example:

```javascript
Toastify({
  text: 'This notification appears in a custom position',
  style: {
    top: '50px',
    right: '20px',
  },
  gravity: 'top',
  position: 'right',
  duration: 5000,
}).showToast();
```


<!-- Placeholder for the Notifications README.md -->

<a id="dialog"></a>
# `<Dialog />`


A reusable and customizable dialog component designed for seamless integration into your projects. It supports dynamic content, flexible positioning, and customizable buttons using Chakra UI.
[Back to Table of Contents](#table-of-contents)

## Features

- **Dynamic Content**: Easily display custom titles, bodies, and actions.
- **Positioning**: Support for customizable placements (`top`, `center`, `bottom`).
- **Custom Buttons**: Use an array of buttons with individual actions and styles.
- **External Control**: Option to control the dialog’s visibility from external components.
- **Customizable Theme**: Override default styles with a custom theme object.

## Usage

Import the `Dialog` component and configure it with dynamic properties:

```javascript
import React, { useState } from 'react';
import Dialog from 'web-monorepo-ui-components';
import Button from 'web-monorepo-ui-components';

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
      label: 'Cancel',
      iconName: 'RiCloseLine',
      size: 'sm',
      theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
      onClick: handleCloseDialog,
    },
    {
      label: 'Save',
      iconName: 'RiSaveLine',
      size: 'sm',
      theme: { colors: { buttonBg: 'blue.500', buttonText: 'white' } },
      onClick: () => {
        console.log('Save button clicked');
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
  content: { border: '2px solid teal', borderRadius: '8px', padding: '16px' },
  title: { fontSize: '1.5rem', color: 'teal.600' },
  body: { color: 'gray.800', fontSize: '1rem' },
  buttonTheme: {
    colors: {
      buttonBg: 'teal.500',
      buttonText: 'white',
      buttonHover: 'teal.600',
    },
  },
};

<Dialog
  isOpen={true}
  onClose={() => console.log('Dialog closed')}
  title="Custom Themed Dialog"
  body={<p>Explore custom styles for the dialog.</p>}
  buttons={[
    {
      label: 'Close',
      iconName: 'RiCloseLine',
      onClick: () => console.log('Closed'),
    },
  ]}
  theme={customTheme}
/>;
```

## Example with Placement

The `Dialog` component supports the `placement` prop to position the dialog on the screen. Here's an example demonstrating different placements:

```javascript
import React from 'react';
import Dialog from '@mi-monorepo/dialog';

const PlacementExample = () => {
  return (
    <div>
      {['top', 'center', 'bottom'].map((placement) => (
        <Dialog
          key={placement}
          isOpen={true}
          onClose={() => console.log(`${placement} Dialog closed`)}
          title={`Dialog Placement: ${placement}`}
          body={
            <p>This dialog is placed at the {placement} of the viewport.</p>
          }
          buttons={[
            {
              label: 'Close',
              iconName: 'RiCloseLine',
              onClick: () => console.log('Closed'),
            },
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
    backgroundColor: 'gray.800',
    color: 'white',
    padding: '1rem',
    borderRadius: 'md',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'teal.300',
  },
  body: {
    fontSize: '1rem',
    color: 'gray.300',
  },
  buttonTheme: {
    colors: {
      buttonBg: 'blue.500',
      buttonText: 'white',
    },
  },
};

<Dialog
  isOpen={true}
  onClose={() => console.log('Dialog closed')}
  title="Custom Themed Dialog"
  body={<p>This is a custom themed dialog.</p>}
  buttons={[
    {
      label: 'Close',
      iconName: 'RiCloseLine',
      onClick: () => console.log('Close clicked'),
    },
    {
      label: 'Save',
      iconName: 'RiSaveLine',
      onClick: () => console.log('Save clicked'),
    },
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


<!-- Placeholder for the Dialog README.md -->

<a id="form"></a>
# `<Form />`


A reusable and customizable form component for your projects. It supports dynamic field configurations, validations, file uploads, and flexible layouts with Chakra UI.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `Form` component and configure it with dynamic fields:

```javascript
import React from 'react';
import Form from 'web-monorepo-ui-components';

const App = () => {
  return (
    <Form
      fields={[
        // First row: 2 fields
        [
          {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'Enter your first name',
            isRequired: true,
          },
          {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Enter your last name',
            isRequired: true,
          },
        ],
        // Second row: 3 fields
        [
          {
            name: 'email',
            label: 'Email Address',
            type: 'text',
            placeholder: 'Enter your email',
            isRequired: true,
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'text',
            placeholder: 'Enter your phone number',
            isRequired: true,
          },
          {
            name: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'Enter your city',
          },
        ],
        // Third row: Drop field
        {
          name: 'documents',
          label: 'Upload Documents',
          type: 'drop',
          description: '.png, .jpg, .pdf up to 10MB',
          accept: ['image/png', 'image/jpeg', 'application/pdf'],
        },
        // Fourth row: File field
        {
          name: 'profilePicture',
          label: 'Upload Profile Picture',
          type: 'file',
          accept: ['image/png', 'image/jpeg'],
        },
        // Submit button
        {
          type: 'button',
          label: 'Submit',
          isSubmit: true,
        },
      ]}
      onSubmit={(values) =>
        alert(`Form submitted with values: ${JSON.stringify(values)}`)
      }
    />
  );
};

export default App;
```

## Props

### `fields`

- **Type**: `Array`
- **Description**: Defines the fields of the form. Can include `text`, `select`, `button`, `file`, and `drop` types. Supports grouping fields in rows using nested arrays.

#### Field Object Properties:

- `name` (string): Unique identifier for the field.
- `label` (string): Label displayed above the field.
- `type` (string): Type of the field (`"text"`, `"select"`, `"button"`, `"file"`, `"drop"`).
- `placeholder` (string): Placeholder text for input fields.
- `options` (array): For `select` fields, an array of options `{ value, label }`.
- `isRequired` (boolean): If `true`, validates the field as required.
- `validate` (function): Custom validation function for the field value.
- `errorMessage` (string): Error message displayed for validation failures.
- `maxWidth` (string): Maximum width of the field.
- `accept` (array): For `file` or `drop` fields, an array of accepted MIME types.

### `onSubmit`

- **Type**: `function`
- **Description**: Callback function executed when the form is submitted.

### `theme`

- **Type**: `object`
- **Description**: Custom theme object to override the default styles.

### `buttonsPosition`

- **Type**: `string`
- **Description**: Alignment of the buttons in the form footer. Options: `"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`.
- **Default**: `"center"`

## Layout and Responsiveness

The `Form` component uses `Flex` and `Box` from Chakra UI for layout. Fields in the same array are rendered in a single row, with a maximum of 4 fields per row. The width of each field is dynamically calculated based on the number of fields in the row.

If a row has:

- 1 field: It will occupy 100% of the row.
- 2 fields: Each field will occupy 50% of the row.
- 3 fields: Each field will occupy 33.33% of the row.
- 4 fields: Each field will occupy 25% of the row.

### Special Case: `drop` Fields

Fields of type `drop` (e.g., `FileDropZone`) will automatically occupy 100% of the row, regardless of the number of other fields. This ensures an intuitive drag-and-drop experience without being constrained by other fields in the same row.

For rows with more than 4 fields, the additional fields will be wrapped to the next row.

## Example

A larger example with validations, file fields, drop zones, and theming:

```javascript
<Form
  fields={[
    // First row: Text fields
    [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'First name',
        isRequired: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last name',
        isRequired: true,
      },
    ],
    // Second row: Email and phone
    [
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your email',
        isRequired: true,
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        placeholder: 'Enter your phone number',
      },
    ],
    // Third row: File upload
    {
      name: 'profilePicture',
      label: 'Upload Profile Picture',
      type: 'file',
      accept: ['image/png', 'image/jpeg'],
    },
    // Fourth row: Drop zone
    {
      name: 'documents',
      label: 'Upload Documents',
      type: 'drop',
      description: 'Drag and drop documents here (PDF only)',
      accept: ['application/pdf'],
    },
    // Fifth row: Buttons
    { type: 'button', label: 'Submit', isSubmit: true },
    {
      type: 'button',
      label: 'Cancel',
      onClick: () => console.log('Form canceled'),
    },
  ]}
  onSubmit={(values) => console.log('Form submitted:', values)}
/>
```

## Theming

The `Form` component allows customization through a `theme` object to adjust the appearance of fields and buttons. You can override default styles to match your application's design.

### Example Theme

```javascript
const customTheme = {
  size: 'lg', // Adjust the size of the fields
  colors: {
    labelColor: 'purple.500', // Customize label text color
    inputBorderColor: 'blue.300', // Border color for input fields
    inputFocusBorderColor: 'blue.500', // Border color when focused
    errorBorderColor: 'red.600', // Border color for invalid fields
    errorTextColor: 'red.600', // Color of error messages
    buttonBg: 'green.500', // Background color for buttons
    buttonText: 'white', // Text color for buttons
    buttonHover: 'green.600', // Background color on hover
  },
};

<Form
  fields={[
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
    },
    { type: 'button', label: 'Submit', isSubmit: true },
  ]}
  theme={customTheme}
  onSubmit={(values) => console.log(values)}
/>;
```

### Applying Theme to Specific Fields

You can also apply custom themes to specific fields using the theme property within a field object:

```javascript
<Form
  fields={[
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
      theme: {
        size: 'md',
        colors: {
          labelColor: 'teal.500',
          inputBorderColor: 'teal.300',
          inputFocusBorderColor: 'teal.500',
        },
      },
    },
    { type: 'button', label: 'Submit', isSubmit: true },
  ]}
  onSubmit={(values) => console.log(values)}
/>
```


<!-- Placeholder for the Form README.md -->

<a id="grid"></a>
# `<Grid />`


A customizable and feature-rich data grid component for displaying tabular data with sorting, pagination, and custom actions. Built with Chakra UI.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `Grid` component and pass the necessary props:

```javascript
import React from 'react';
import Grid from 'web-monorepo-ui-components';

const App = () => {
  const headers = [
    { label: 'Product', key: 'name', isSortable: true, width: 30 },
    { label: 'Category', key: 'category', isSortable: true, width: 30 },
    {
      label: 'Actions',
      key: 'actions',
      buttons: [
        {
          label: 'Edit',
          iconName: 'RiEditLine',
          onClick: (row) => alert(`Edit clicked for ${row.name}`),
        },
        {
          iconName: 'RiDeleteBinLine',
          onClick: (row) => alert(`Delete clicked for ${row.name}`),
        },
      ],
      textAlign: 'end',
      width: 40,
    },
  ];

  const data = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Bread', category: 'Grain' },
  ];

  return <Grid headers={headers} data={data} pagination itemsPerPage={5} />;
};

export default App;
```

## Props

### `headers`

- **Type**: `Array`
- **Description**: Defines the columns of the grid. Each column object supports the following:

| Property     | Type      | Description                                   |
| ------------ | --------- | --------------------------------------------- |
| `label`      | `string`  | The header label of the column.               |
| `key`        | `string`  | The key for accessing data in the row object. |
| `isSortable` | `boolean` | Enables sorting for the column.               |
| `width`      | `number`  | Sets the width of the column as a percentage. |
| `buttons`    | `Array`   | Defines action buttons for the column.        |
| `textAlign`  | `string`  | Aligns text (`"start"`, `"center"`, `"end"`). |

### `data`

- **Type**: `Array`
- **Description**: The data to display in the grid. Each object represents a row.

### `pagination`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enables pagination for the grid.

### `itemsPerPage`

- **Type**: `number`
- **Default**: `10`
- **Description**: Sets the number of rows per page.

### `enableSorting`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enables column sorting functionality.

## Features

### Sorting
Enable sorting on specific columns by setting `isSortable: true` in the header configuration.

### Pagination
Activate pagination by passing the `pagination` prop and setting `itemsPerPage`.

### Custom Actions
Add action buttons to any column using the `buttons` property in the header configuration.

### Theming
Customize the grid using the `theme` prop to override default styles.

```javascript
const customTheme = {
  headerColor: "purple.600",
  cellColor: "gray.700",
  rowHoverBg: "purple.50",
};

<Grid headers={headers} data={data} theme={customTheme} />;
````

## Example

A full example with sorting, pagination, and custom theming:

```javascript
<Grid
  headers={[
    { label: 'Name', key: 'name', isSortable: true, width: 30 },
    { label: 'Category', key: 'category', isSortable: true, width: 30 },
    {
      label: 'Actions',
      key: 'actions',
      buttons: [
        {
          label: 'View',
          iconName: 'RiEyeLine',
          onClick: (row) => alert(`Viewing ${row.name}`),
        },
      ],
      width: 40,
      textAlign: 'end',
    },
  ]}
  data={[
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
  ]}
  pagination
  itemsPerPage={5}
  enableSorting
  theme={{
    headerColor: 'blue.600',
    rowHoverBg: 'blue.50',
  }}
/>
```


<!-- Placeholder for the Grid README.md -->

## Installation

To install the library:

```bash
npm install web-monorepo-ui-components
```

Make sure your project is configured to use React 19 and includes all the necessary peer dependencies (see [Dependencies and Peer Dependencies](#dependencies-and-peer-dependencies)).

## Example Project

Below is an example of a **Next.js** project configured to use this library. Ensure your `package.json` includes the following:

```json
{
  "name": "next-styled-boilerplate",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@chakra-ui/icons": "^2.2.4",
    "@chakra-ui/react": "^3.4.0",
    "@chakra-ui/theme": "^3.4.6",
    "@chakra-ui/theme-tools": "^2.2.6",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "babel-plugin-styled-components": "^2.1.4",
    "next": "^15.1.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.53.2",
    "react-icons": "^5.4.0",
    "styled-components": "^6.1.14",
    "web-monorepo-ui-components": "1.0.17"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^9.15.0",
    "eslint-config-next": "15.0.3",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "prettier": "^3.4.1",
    "typescript": "^5"
  }
}
```

## Dependencies and Peer Dependencies

### Dependencies

The following dependencies will be installed automatically when you add the library to your project:

```json
{
  "@chakra-ui/icons": "^2.2.4",
  "@chakra-ui/react": "^3.2.3",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "styled-components": "^6.1.14"
}
```

### Peer Dependencies

Ensure the following peer dependencies are installed in your project:

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## Contributing

If you want to contribute to the library, follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Make your changes.
4. Submit a pull request.

## License

This library is distributed under the MIT license. See the `LICENSE` file in the root of the repository for more details.

