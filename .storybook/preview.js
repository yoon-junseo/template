import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
