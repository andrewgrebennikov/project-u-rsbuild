import type { Meta, StoryObj } from '@storybook/react';

import IconArrowRight from '../../assets/icons/icon-arrow-right.svg';

import { Button, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
  },
};

export const Contained: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.CONTAINED,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.OUTLINED,
  },
};

export const StartIcon: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    startIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    endIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    disabled: true,
  },
};
