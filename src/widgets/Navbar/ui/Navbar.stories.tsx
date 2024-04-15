import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { Navbar as NavbarComponent } from './Navbar';

const meta: Meta<typeof NavbarComponent> = {
  title: 'widget/Navbar',
  component: NavbarComponent,
};

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const Navbar: Story = {
  args: {},
};

export const NavbarIsAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png' } } }),
  ],
};
