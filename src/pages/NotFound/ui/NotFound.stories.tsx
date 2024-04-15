import { Meta, StoryObj } from '@storybook/react';

import { default as NotFoundComponent } from './NotFound';

const meta: Meta<typeof NotFoundComponent> = {
  title: 'pages/NotFound',
  component: NotFoundComponent,
};

export default meta;
type Story = StoryObj<typeof NotFoundComponent>;

export const NotFound: Story = {
  args: {},
};
