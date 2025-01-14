import React from 'react';
import Notifications from './Notifications';
import Button from '../Button';

export default {
  title: 'Components/Notifications',
  component: Notifications,
};

const showNotification = (message, type, duration, position, theme) => {
  const { notify } = Notifications({
    message,
    type,
    duration,
    position,
    theme,
  });

  notify();
};

export const DefaultStyles = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Button
      label="Warning Notification"
      onClick={() =>
        showNotification(
          'Warning: Check your input!',
          'warning',
          3000,
          'top-left'
        )
      }
    />
    <Button
      label="Info Notification"
      onClick={() =>
        showNotification(
          'Info: This is an informational message.',
          'info',
          3000,
          'top-right'
        )
      }
    />
    <Button
      label="Error Notification"
      onClick={() =>
        showNotification(
          'Error: Something went wrong!',
          'error',
          3000,
          'bottom-left'
        )
      }
    />
    <Button
      label="Success Notification"
      onClick={() =>
        showNotification(
          'Success: Operation completed successfully!',
          'success',
          3000,
          'bottom-right'
        )
      }
    />
  </div>
);

export const OverriddenStyles = () => (
  <Button
    label="Custom Styled Notification"
    onClick={() =>
      showNotification(
        'Custom Styled Notification!',
        'success',
        5000,
        'top-right',
        { background: 'purple', color: 'yellow' }
      )
    }
  />
);
