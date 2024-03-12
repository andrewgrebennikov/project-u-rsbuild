import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageLazy } from './ArticlesPageLazy';

const meta: Meta<typeof ArticlesPageLazy> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPageLazy,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageLazy>;

export const ArticlesPage: Story = {
  args: {},
};
