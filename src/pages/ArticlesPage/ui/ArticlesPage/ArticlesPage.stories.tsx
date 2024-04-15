import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticlesPageLazy } from './ArticlesPageLazy';

const meta: Meta<typeof ArticlesPageLazy> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPageLazy,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageLazy>;

export const ArticlesPage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articles: {
        ids: ['1'],
        entities: {
          1: {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'http://localhost:3000/images/js.png',
            views: 10,
            createdAt: '01.02.2022',
            userId: '1',
            type: ['IT'],
          },
        },
        isLoading: false,
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
