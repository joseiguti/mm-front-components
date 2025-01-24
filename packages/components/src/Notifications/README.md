
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
