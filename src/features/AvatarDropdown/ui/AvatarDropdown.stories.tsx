import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown as AvatarDropdownComponent } from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdownComponent> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdownComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdownComponent>;

export const AvatarDropdown: Story = {
  args: {
    authData: {
      id: '1',
      username: 'User',
      avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
    },
  },
};
