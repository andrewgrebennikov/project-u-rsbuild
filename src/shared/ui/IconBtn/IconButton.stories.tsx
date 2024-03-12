import type { Meta, StoryObj } from '@storybook/react';

import IconArrowRight from '../../assets/icons/icon-arrow-right.svg';

import { IconButton as IconButtonComponent } from './IconButton';

const meta: Meta<typeof IconButtonComponent> = {
  title: 'shared/IconButton',
  component: IconButtonComponent,
};

export default meta;
type Story = StoryObj<typeof IconButtonComponent>;

export const IconButton: Story = {
  args: {
    children: <IconArrowRight width="30" height="30" className="icon" />,
  },
};
