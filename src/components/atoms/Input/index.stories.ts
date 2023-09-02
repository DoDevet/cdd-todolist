import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Atoms/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {
  args: {
    value: '할 일 목록',
  },
};
