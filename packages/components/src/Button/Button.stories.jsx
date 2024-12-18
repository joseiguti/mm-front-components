import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => {
  const handleClick = () => {
  };
  return <Button {...args} onClick={args.onClick || handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Say Hello!',
  onClick: () => {
    alert('Greetings from the Onclick event');
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Save',
  iconName: "RiSave3Line"
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading Button',
  isLoading: true,
  loadingText: 'Saving...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Save',
  isDisabled: true,
  iconName: "RiSave3Line",
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
