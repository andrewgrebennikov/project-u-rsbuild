import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesOrder as ArticlesOrderComponent } from './ArticlesOrder';

const meta: Meta<typeof ArticlesOrderComponent> = {
  title: 'features/ArticlesOrder',
  component: ArticlesOrderComponent,
};

export default meta;
type Story = StoryObj<typeof ArticlesOrderComponent>;

export const ArticlesOrder: Story = {
  args: {
    order: 'asc',
    onOrderChange: () => {},
  },
};
