import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariant } from '../Button/Button';

import { Dropdown as DropdownComponent } from './Dropdown';

const meta: Meta<typeof DropdownComponent> = {
  title: 'shared/Dropdown',
  component: DropdownComponent,
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

export const Dropdown: Story = {
  args: {
    buttonContent: <Button variant={ButtonVariant.CONTAINED}>Профиль</Button>,
    items: [
      { id: '1', label: 'Профиль' },
      { id: '2', label: 'Выйти' },
    ],
  },
};
