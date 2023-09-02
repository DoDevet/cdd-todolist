import type { Meta, StoryObj } from '@storybook/react';
import { PageTitle } from '.';

export default { title: 'Atoms/PageTitle', component: PageTitle } as Meta<typeof PageTitle>;

type Stroy = StoryObj<typeof PageTitle>;

export const Default: Stroy = {
  args: {
    title: '할 일 목록',
  },
};
