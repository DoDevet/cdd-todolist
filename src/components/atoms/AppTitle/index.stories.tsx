import type { Meta, StoryObj } from '@storybook/react';
import { AppTitle } from '.';

const meta: Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header Background Color',
      values: [{ name: 'Header Background Color', value: '#304ffe' }],
    },
  },
};

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {};
