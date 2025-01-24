
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
