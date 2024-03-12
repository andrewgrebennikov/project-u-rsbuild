import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect as CountrySelectComponent } from './CountrySelect';

const meta: Meta<typeof CountrySelectComponent> = {
  title: 'entities/CountrySelect',
  component: CountrySelectComponent,
};

export default meta;
type Story = StoryObj<typeof CountrySelectComponent>;

export const CountrySelect: Story = {
  args: {},
};
