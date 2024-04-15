import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect as CurrencySelectComponent } from './CurrencySelect';

const meta: Meta<typeof CurrencySelectComponent> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelectComponent,
};

export default meta;
type Story = StoryObj<typeof CurrencySelectComponent>;

export const CurrencySelect: Story = {
  args: {
    value: 'RUB',
  },
};
