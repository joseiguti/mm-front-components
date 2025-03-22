A highly customizable and collapsible side menu built with React and Styled Components.  
[Back to Table of Contents](#table-of-contents)

## Features

- **Collapsible Sidebar**: Expand or collapse the menu with a toggle button.
- **Nested Submenus**: Support for parent menu items with child items.
- **Theming**: Easily customizable through a JSON configuration and theming support.
- **Icons**: Supports React component-based icons for better performance.
- **JSON Configuration**: Fully customizable menu via a JSON file.

---

## Usage

Import the `Menu` component and use it in your project:

```javascript
import React from 'react';
import { Menu } from 'mm-front-components';
import { FaHome, FaCog } from 'react-icons/fa';
import Link from 'next/link';

const customConfig = {
  logo: 'https://example.com/my-logo.png',
  items: [
    {
      label: 'Home',
      icon: FaHome,
      link: '/',
      children: [
        { label: 'Sub Home 1', link: '/sub-home-1' },
        { label: 'Sub Home 2', link: '/sub-home-2' },
      ],
    },
    { label: 'Settings', icon: FaCog, link: '/settings' },
  ],
};

const CustomLink = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a>{children}</a>
  </Link>
);

const App = () => {
  return <Menu config={customConfig} LinkComponent={CustomLink} />;
};

export default App;
```

---

## Props

### `config`

- **Type**: `object`
- **Description**: The configuration object for the menu.
- **Default**: `{ items: [], logo: '' }`

### `theme`

- **Type**: `object`
- **Description**: Theming options to override default styles.
- **Default**: `{}`

### `isCollapsed`

- **Type**: `boolean`
- **Description**: Whether the menu is collapsed.
- **Default**: `false`

### `toggleMenu`

- **Type**: `function`
- **Description**: Function to toggle the menu state.
- **Default**: `undefined`

### `LinkComponent`

- **Type**: `React.ElementType`
- **Description**: Custom component for handling navigation links. Useful for integrating with client-side routing frameworks like Next.js.
- **Default**: `"a" (regular anchor tag)`

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
