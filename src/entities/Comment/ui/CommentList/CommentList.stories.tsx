import type { Meta, StoryObj } from '@storybook/react';

import { CommentList as CommentListComponent } from './CommentList';

const meta: Meta<typeof CommentListComponent> = {
  title: 'entities/Comment',
  component: CommentListComponent,
};

export default meta;
type Story = StoryObj<typeof CommentListComponent>;

export const CommentList: Story = {
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png', username: 'Admin' },
        text: 'Text',
      },
      {
        id: '2',
        user: {
          id: '2',
          avatar: 'https://voronpitomnik.ru/assets/images/5f381798-79bb-4639-bdea-eb27f5a846d7.JPG',
          username: 'User',
        },
        text: 'Text 2',
      },
    ],
  },
};
