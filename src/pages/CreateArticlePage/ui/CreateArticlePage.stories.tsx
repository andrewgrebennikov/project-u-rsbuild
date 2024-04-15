import { Meta, StoryObj } from '@storybook/react';

import { CreateArticlePageLazy } from './CreateArticlePageLazy';

const meta: Meta<typeof CreateArticlePageLazy> = {
  title: 'pages/CreateArticlePage',
  component: CreateArticlePageLazy,
};

export default meta;
type Story = StoryObj<typeof CreateArticlePageLazy>;

export const CreateArticlePage: Story = {
  args: {},
};
