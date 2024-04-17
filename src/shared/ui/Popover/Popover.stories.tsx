import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariant } from '../Button/Button';

import { Popover as PopoverComponent } from './Popover';

const meta: Meta<typeof PopoverComponent> = {
  title: 'shared/Popover',
  component: PopoverComponent,
};

export default meta;
type Story = StoryObj<typeof PopoverComponent>;

export const Popover: Story = {
  args: {
    buttonContent: <Button variant={ButtonVariant.CONTAINED}>Кнопка</Button>,
    children: 'Абсолютно любой контент',
  },
};
