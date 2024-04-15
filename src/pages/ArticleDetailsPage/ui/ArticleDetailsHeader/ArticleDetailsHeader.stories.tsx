import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticleDetailsHeader as ArticleDetailsHeaderComponent } from './ArticleDetailsHeader';

const meta: Meta<typeof ArticleDetailsHeaderComponent> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsHeader',
  component: ArticleDetailsHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsHeaderComponent>;

export const ArticleDetailsHeader: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
      article: {
        articleData: {
          userId: '1',
        },
      },
    }),
  ],
};
