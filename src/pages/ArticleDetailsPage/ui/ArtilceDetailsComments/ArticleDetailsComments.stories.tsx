import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticleDetailsComments as ArticleDetailsCommentsComponent } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsCommentsComponent> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsCommentsComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsCommentsComponent>;

export const ArticleDetailsComments: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: {
        isLoading: true,
      },
    }),
  ],
};
