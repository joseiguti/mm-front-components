import React, { useState } from 'react';
import { Menu } from './index';
import { FaSave } from 'react-icons/fa';
import theme from '../theme';

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
  config: {
    logo: "https://via.placeholder.com/150",
    items: [
      {
        label: 'Home',
        icon: FaSave,
        link: '/',
        children: [
          { label: 'Ayuda', link: '/help' },
          { label: 'Información', link: '/info' }
        ]
      },
      {
        label: 'Settings',
        icon: FaSave,
        link: '/settings'
      },
      {
        label: 'Messages',
        icon: FaSave,
        link: '/messages'
      }
    ],
  },
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  config: {
    logo: "https://via.placeholder.com/150",
    items: [
      { label: 'Home', icon: FaSave, link: '/' },
      { label: 'Settings', icon: FaSave, link: '/settings' },
      { label: 'Messages', icon: FaSave, link: '/messages' },
    ],
  },
  theme: theme,
  isCollapsed: false,
};
