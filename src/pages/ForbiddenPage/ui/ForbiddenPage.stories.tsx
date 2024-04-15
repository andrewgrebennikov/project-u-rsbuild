import { Meta, StoryObj } from '@storybook/react';

import { default as ForbiddenPageComponent } from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPageComponent> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPageComponent,
};

export default meta;
type Story = StoryObj<typeof ForbiddenPageComponent>;

export const ForbiddenPage: Story = {
  args: {},
};
