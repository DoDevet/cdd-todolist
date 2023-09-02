import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from '.';

export default { title: 'Organisms/Todoitem', component: TodoItem } as Meta<typeof TodoItem>;

export const Default: StoryObj<typeof TodoItem> = {
  args: {
    label: '리액트 공부',
  },
};
