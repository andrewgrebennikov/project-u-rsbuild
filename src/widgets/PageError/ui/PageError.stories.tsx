import type { Meta, StoryObj } from '@storybook/react';

import { PageError as PageErrorComponent } from './PageError';

const meta: Meta<typeof PageErrorComponent> = {
  title: 'widget/PageError',
  component: PageErrorComponent,
};

export default meta;
type Story = StoryObj<typeof PageErrorComponent>;

export const PageError: Story = {
  args: {},
};
