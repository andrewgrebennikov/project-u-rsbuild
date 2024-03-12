import type { Meta, StoryObj } from '@storybook/react';

import { Select as SelectComponent } from './Select';

const meta: Meta<typeof SelectComponent> = {
  title: 'shared/Select',
  component: SelectComponent,
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {
  args: {
    label: 'Выберите пункт',
    options: [
      {
        value: '1',
        name: '1',
      },
      {
        value: '2',
        name: '2',
      },
    ],
  },
};
