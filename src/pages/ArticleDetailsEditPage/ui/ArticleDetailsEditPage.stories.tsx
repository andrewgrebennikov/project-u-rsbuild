import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsEditPageLazy } from './ArticleDetailsEditPageLazy';

const meta: Meta<typeof ArticleDetailsEditPageLazy> = {
  title: 'pages/ArticleDetailsEditPage',
  component: ArticleDetailsEditPageLazy,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsEditPageLazy>;

export const ArticleDetailsEditPage: Story = {
  args: {},
};
