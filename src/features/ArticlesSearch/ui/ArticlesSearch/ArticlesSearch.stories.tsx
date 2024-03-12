import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesSearch as ArticlesSearchComponent } from './ArticlesSearch';

const meta: Meta<typeof ArticlesSearchComponent> = {
  title: 'features/ArticlesSearch',
  component: ArticlesSearchComponent,
};

export default meta;
type Story = StoryObj<typeof ArticlesSearchComponent>;

export const ArticlesSearch: Story = {
  args: {},
};
