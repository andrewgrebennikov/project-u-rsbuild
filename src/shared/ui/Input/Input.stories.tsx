import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: InputComponent,
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  args: {
    label: 'Введите имя',
    type: 'text',
  },
};
