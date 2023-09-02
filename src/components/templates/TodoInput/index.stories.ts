import { Meta, StoryObj } from '@storybook/react';
import { TodoInput } from '.';

export default {
  title: 'templates/TodoInput',
  component: TodoInput,
} as Meta<typeof TodoInput>;

export const Default: StoryObj<typeof TodoInput> = {};
