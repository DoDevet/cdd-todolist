import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta = {
  title: 'Atoms/Label',
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {
  args: {
    label: '리액트 공부하기',
  },
};
