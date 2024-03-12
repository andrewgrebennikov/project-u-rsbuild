import type { Meta, StoryObj } from '@storybook/react';

import { ProfilePageLazy } from './ProfilePageLazy';

const meta: Meta<typeof ProfilePageLazy> = {
  title: 'pages/ProfilePage',
  component: ProfilePageLazy,
};

export default meta;
type Story = StoryObj<typeof ProfilePageLazy>;

export const ProfilePage: Story = {
  args: {},
};
