import type { Meta, StoryObj } from '@storybook/react';

import { Rating as RatingComponent } from './Rating';

const meta: Meta<typeof RatingComponent> = {
  title: 'shared/Rating',
  component: RatingComponent,
};

export default meta;
type Story = StoryObj<typeof RatingComponent>;

export const Rating: Story = {
  args: {
    rating: 1,
  },
};

export const RatingDisabled: Story = {
  args: {
    rating: 1,
    disabled: true,
  },
};
