import React, { useState } from 'react';
import { Menu } from './index';
import { Home, Settings, Mail } from '@mui/icons-material';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template = (args) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flexShrink: 0 }}>
        <Menu {...args} isCollapsed={isCollapsed} toggleMenu={toggleMenu} />
      </div>

      <div
        style={{
          flex: 1,
          padding: '20px',
          backgroundColor: '#ffffff',
          overflowY: 'auto',
          marginLeft: isCollapsed ? '60px' : '250px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <h1>Content example</h1>
        <p>
          This is the main content area. You can use this space to simulate the
          interaction of your menu with the rest of the application layout.
        </p>
      </div>
    </div>
  );
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    { label: 'Home', icon: <Home />, link: '/' },
    { label: 'Settings', icon: <Settings />, link: '/settings' },
    { label: 'Messages', icon: <Mail />, link: '/messages' },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: [
    { label: 'Home', icon: <Home />, link: '/' },
    { label: 'Settings', icon: <Settings />, link: '/settings' },
    { label: 'Messages', icon: <Mail />, link: '/messages' },
  ],
};
