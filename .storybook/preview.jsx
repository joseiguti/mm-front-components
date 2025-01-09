import React from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import theme from '../packages/components/src/theme';
import { GlobalStyles } from '../packages/components/src/GlobalStyles';
import 'toastify-js/src/toastify.css';

const chakraCategories = [
  'Components/TextField',
  'Components/SelectField',
  'Components/Button',
  'Components/Form',
  'Components/Grid',
  'Components/Dialog',
  'Components/Notifications',
  'Components/FileUpload',
];

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
    (Story, context) => {
      if (chakraCategories.includes(context.kind)) {
        return (
          <ChakraProvider value={defaultSystem}>
            <Story />
          </ChakraProvider>
        );
      } else if (context.kind === 'Components/Menu') {
        return (
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
          </ThemeProvider>
        );
      }
    },
  ],
};

export default preview;
