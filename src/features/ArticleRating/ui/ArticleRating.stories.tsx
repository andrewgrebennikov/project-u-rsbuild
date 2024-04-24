import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { default as ArticleRatingComponent } from './ArticleRating';

const meta: Meta<typeof ArticleRatingComponent> = {
  title: 'features/ArticleRating',
  component: ArticleRatingComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleRatingComponent>;

export const ArticleRating: Story = {
  args: {
    articleId: '1',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
};
