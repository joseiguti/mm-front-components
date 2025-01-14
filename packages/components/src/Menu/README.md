# Menu Component

A highly customizable and collapsible side menu built with React and Styled Components.

## Features

- **Collapsible Sidebar**: Expand or collapse the menu with a toggle button.
- **Nested Submenus**: Support for parent menu items with child items.
- **Theming**: Easily customizable through a JSON configuration and theming support.
- **Icons**: Leverages Material Design icons for visual representation.
- **JSON Configuration**: Fully customizable menu via a JSON file.

---

## Installation

Install the package via NPM:

```bash
npm install @mi-paquete/menu
```

---

## Usage

Import the `Menu` component and use it in your project:

```javascript
import React from 'react';
import { Menu } from '@mi-paquete/menu';

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

## Development

### Install dependencies:

```bash
npm install
```

### Run Storybook:

```bash
npm run storybook
```

### Lint the code:

```bash
npm run lint
```

### Build the package:

```bash
npm run build
```

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

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
