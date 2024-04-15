import type { Meta, StoryObj } from '@storybook/react';

import { Listbox as ListboxComponent } from './Listbox';

const meta: Meta<typeof ListboxComponent> = {
  title: 'shared/Listbox',
  component: ListboxComponent,
};

export default meta;
type Story = StoryObj<typeof ListboxComponent>;

export const Listbox: Story = {
  args: {
    value: '1',
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
