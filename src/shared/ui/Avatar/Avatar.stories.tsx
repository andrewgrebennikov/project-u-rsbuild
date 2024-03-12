import type { Meta, StoryObj } from '@storybook/react';

import { Avatar as AvatarComponent } from './Avatar';

const meta: Meta<typeof AvatarComponent> = {
  title: 'shared/Avatar',
  component: AvatarComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarComponent>;

export const Avatar: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
  },
};
