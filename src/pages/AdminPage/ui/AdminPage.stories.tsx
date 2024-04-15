import type { Meta, StoryObj } from '@storybook/react';

import { AdminPageLazy } from './AdminPageLazy';

const meta: Meta<typeof AdminPageLazy> = {
  title: 'pages/AdminPage',
  component: AdminPageLazy,
};

export default meta;
type Story = StoryObj<typeof AdminPageLazy>;

export const AdminPage: Story = {
  args: {},
};
