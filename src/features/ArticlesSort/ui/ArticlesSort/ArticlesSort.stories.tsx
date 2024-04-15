import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesSort as ArticlesSortComponent } from './ArticlesSort';

const meta: Meta<typeof ArticlesSortComponent> = {
  component: ArticlesSortComponent,
  title: 'features/ArticlesSort',
};

export default meta;
type Story = StoryObj<typeof ArticlesSortComponent>;

export const ArticlesSort: Story = {
  args: {
    sort: 'createdAt',
    onSortChange: () => {},
  },
};
