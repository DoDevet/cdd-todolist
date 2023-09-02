import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { TodoContextProvider } from '../src/contexts/TodoContext';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <TodoContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </TodoContextProvider>
    ),
  ],
};

export default preview;
