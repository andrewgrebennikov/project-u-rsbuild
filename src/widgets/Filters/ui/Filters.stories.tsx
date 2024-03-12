import type { Meta, StoryObj } from '@storybook/react';

import { Filters as FiltersComponent } from './Filters';

const meta: Meta<typeof FiltersComponent> = {
  title: 'widget/Filters',
  component: FiltersComponent,
};

export default meta;
type Story = StoryObj<typeof FiltersComponent>;

export const Filters: Story = {
  args: {},
};
