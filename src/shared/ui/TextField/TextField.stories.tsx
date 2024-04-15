import type { Meta, StoryObj } from '@storybook/react';

import { TextField as TextFieldComponent } from './TextField';

const meta: Meta<typeof TextFieldComponent> = {
  title: 'shared/TextField',
  component: TextFieldComponent,
};

export default meta;
type Story = StoryObj<typeof TextFieldComponent>;

export const TextField: Story = {
  args: {
    label: 'Введите имя',
    type: 'text',
    placeholder: 'Имя',
  },
};
