import type { Meta, StoryObj } from '@storybook/react';

import { AboutPageLazy } from './AboutPageLazy';

const meta: Meta<typeof AboutPageLazy> = {
  title: 'pages/AboutPage',
  component: AboutPageLazy,
};

export default meta;
type Story = StoryObj<typeof AboutPageLazy>;

export const AboutPage: Story = {
  args: {},
};
