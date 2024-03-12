import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesCategoriesField } from '../model/types/category';

import { ArticlesCategory as ArticlesCategoryComponent } from './ArticlesCategory';

const meta: Meta<typeof ArticlesCategoryComponent> = {
  title: 'features/ArticlesCategory',
  component: ArticlesCategoryComponent,
};

export default meta;
type Story = StoryObj<typeof ArticlesCategoryComponent>;

export const ArticlesCategory: Story = {
  args: {
    category: ArticlesCategoriesField.ALL,
  },
};
