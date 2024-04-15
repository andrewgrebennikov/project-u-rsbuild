import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticlesInfiniteList as ArticlesInfiniteListComponent } from './ArticlesInfiniteList';

const meta: Meta<typeof ArticlesInfiniteListComponent> = {
  title: 'pages/ArticlesPage/ArticlesInfiniteList',
  component: ArticlesInfiniteListComponent,
};

export default meta;
type Story = StoryObj<typeof ArticlesInfiniteListComponent>;

export const ArticlesInfiniteList: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articles: {
        ids: [],
        entities: {},
        isLoading: true,
        view: 'GRID',
        page: 1,
        limit: 8,
        order: 'asc',
        sort: 'createdAt',
        search: '',
        hasMore: true,
        type: 'All',
        _inited: true,
      },
    }),
  ],
};
