import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { Sidebar as SidebarComponent } from './Sidebar';

const meta: Meta<typeof SidebarComponent> = {
  title: 'widget/Sidebar',
  component: SidebarComponent,
};

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
  args: {},
};

export const SidebarIsAuth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
