import type { Meta, StoryObj } from '@storybook/react';

import { NotificationsButton as NotificationsButtonComponent } from './NotificationsButton';

const meta: Meta<typeof NotificationsButtonComponent> = {
  title: 'features/NotificationsButton',
  component: NotificationsButtonComponent,
};

export default meta;
type Story = StoryObj<typeof NotificationsButtonComponent>;

export const NotificationsButton: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
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
    ],
  },
};
