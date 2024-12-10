import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../packages/components/src/theme';
import { GlobalStyles } from '../packages/components/src/GlobalStyles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;