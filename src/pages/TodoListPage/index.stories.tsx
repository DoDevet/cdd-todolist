import type { Meta, StoryObj } from '@storybook/react';

import { TodoListPage } from '.';
export default {
  title: 'pages/TodoListPage',
  component: TodoListPage,
} as Meta<typeof TodoListPage>;

export const Default: StoryObj<typeof TodoListPage> = {};
