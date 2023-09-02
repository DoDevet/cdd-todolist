import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from '.';

export default {
  title: 'templates/TodoList',
  component: TodoList,
} as Meta<typeof TodoList>;

export const Default: StoryObj<typeof TodoList> = {
  args: {
    todoList: [],
  },
};

export const WithTodoList: StoryObj<typeof TodoList> = {
  args: {
    todoList: ['React 공부하기', 'CDD 경험하기'],
  },
};
