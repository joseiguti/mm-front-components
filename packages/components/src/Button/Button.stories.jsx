import React from 'react';
import Button from './Button';
import { FaSave } from 'react-icons/fa';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => {
  const handleClick = () => {
    alert('Default OnClick event');
  };
  const handleSubmit = () => {
    alert('Default OnSubmit event');
  };
  return (
    <Button
      {...args}
      onClick={args.onClick || handleClick}
      onSubmit={args.onSubmit || handleSubmit}
    />
  );
};

export const aButton = Template.bind({});
aButton.args = {
  label: 'Say Hello!',
  onClick: () => {
    alert('Greetings from the Onclick event');
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Save',
  icon: <FaSave />,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading Button',
  isLoading: true,
  loadingText: 'Saving...',
  isSubmit: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Save',
  isDisabled: true,
  icon: <FaSave />,
  onClick: () => {
    alert('Greetings from the Onclick event');
  },
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  label: 'Green and big button',
  size: 'lg',
  theme: {
    colors: {
      buttonBg: 'green.500',
      buttonText: 'white',
    },
  },
};

export const aSubmit = Template.bind({});
aSubmit.args = {
  label: 'Submit',
  isSubmit: true,
  onSubmit: () => {
    alert('Greetings from the OnSubmit event');
  },
};
