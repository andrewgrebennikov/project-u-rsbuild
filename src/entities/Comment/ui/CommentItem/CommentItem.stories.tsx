import type { Meta, StoryObj } from '@storybook/react';

import { CommentItem as CommentItemComponent } from './CommentItem';

const meta: Meta<typeof CommentItemComponent> = {
  title: 'entities/Comment',
  component: CommentItemComponent,
};

export default meta;
type Story = StoryObj<typeof CommentItemComponent>;

export const CommentItem: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Какой-то текст',
      user: { id: '1', avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png', username: 'User' },
    },
  },
};
