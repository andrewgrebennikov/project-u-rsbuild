import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageLazy } from './ArticleDetailsPageLazy';

const meta: Meta<typeof ArticleDetailsPageLazy> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPageLazy,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageLazy>;

export const ArticleDetailsPage: Story = {
  args: {},
};
