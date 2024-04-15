import type { Meta, StoryObj } from '@storybook/react';

import { SearchField as SearchFieldComponent } from './SearchField';

const meta: Meta<typeof SearchFieldComponent> = {
  title: 'shared/SearchField',
  component: SearchFieldComponent,
};

export default meta;
type Story = StoryObj<typeof SearchFieldComponent>;

export const SearchField: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Поиск',
  },
};
