/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
