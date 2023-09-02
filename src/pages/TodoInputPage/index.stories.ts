import type { Meta, StoryObj } from '@storybook/react';
import { TodoInput } from 'components/templates/TodoInput';

export default {
  title: 'pages/TodoInputPage',
  component: TodoInput,
} as Meta<typeof TodoInput>;

export const Defalt: StoryObj<typeof TodoInput> = {};
