import type { Meta, StoryObj } from '@storybook/react';

import { RatingBlock as RatingBlockComponent } from './RatingBlock';

const meta: Meta<typeof RatingBlockComponent> = {
  title: 'entities/RatingBlock',
  component: RatingBlockComponent,
};

export default meta;
type Story = StoryObj<typeof RatingBlockComponent>;

export const RatingBlock: Story = {
  args: {
    title: 'Заголовок',
    feedbackTitle: 'Заголовок формы',
  },
};

export const RatingBlockVoted: Story = {
  args: {
    title: 'Заголовок',
    rating: 1,
  },
};

export const RatingBlockVotedWithoutFeedback: Story = {
  args: {
    title: 'Заголовок',
    hasFeedback: false,
  },
};
