import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsItem as NotificationsItemComponent } from './NotificationsItem';

const meta: Meta<typeof NotificationsItemComponent> = {
  title: 'entities/NotificationsItem',
  component: NotificationsItemComponent,
};

export default meta;
type Story = StoryObj<typeof NotificationsItemComponent>;

export const NotificationsItem: Story = {
  args: {
    notification: {
      id: '1',
      title: 'Уведомление 1',
      description: 'Произошло какое-то событие',
      userId: '1',
      href: 'http://localhost:3000/admin',
    },
  },
};
