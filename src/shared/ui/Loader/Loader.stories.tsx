import type { Meta, StoryObj } from '@storybook/react';

import { Loader as LoaderComponent } from './Loader';

const meta: Meta<typeof LoaderComponent> = {
  title: 'shared/Loader',
  component: LoaderComponent,
};

export default meta;
type Story = StoryObj<typeof LoaderComponent>;

export const Loader: Story = {
  args: {},
};
