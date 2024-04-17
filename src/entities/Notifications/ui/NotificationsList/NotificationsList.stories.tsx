import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsList as NotificationsListComponent } from './NotificationsList';

const meta: Meta<typeof NotificationsListComponent> = {
  title: 'entities/NotificationsList',
  component: NotificationsListComponent,
};

export default meta;
type Story = StoryObj<typeof NotificationsListComponent>;

export const NotificationsList: Story = {
  args: {
    notifications: [
      {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
        userId: '1',
      },
      {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        userId: '1',
        href: 'http://localhost:3000/admin',
      },
      {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло какое-то событие',
        userId: '1',
        href: 'http://localhost:3000/admin',
      },
      {
        id: '4',
        title: 'Уведомление 4',
        description: 'Произошло какое-то событие',
        userId: '1',
      },
      {
        id: '5',
        title: 'Уведомление 5',
        description: 'Произошло какое-то событие',
        userId: '2',
      },
    ],
  },
};

export const NotificationsListLoading: Story = {
  args: {
    isLoading: true,
  },
};
