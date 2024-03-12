import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesView } from '../../model/types/articles';

import { ArticlesViewSelector } from './ArticlesViewSelector';

const meta: Meta<typeof ArticlesViewSelector> = {
  component: ArticlesViewSelector,
  title: 'features/ArticlesViewSelector',
};

export default meta;
type Story = StoryObj<typeof ArticlesViewSelector>;

export const ActiveList: Story = {
  args: { view: ArticlesView.LIST },
};

export const ActiveGrid: Story = {
  args: { view: ArticlesView.GRID },
};
