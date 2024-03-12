import type { Meta, StoryObj } from '@storybook/react';

import { MainPageLazy } from './MainPageLazy';

const meta: Meta<typeof MainPageLazy> = {
  title: 'pages/MainPage',
  component: MainPageLazy,
};

export default meta;
type Story = StoryObj<typeof MainPageLazy>;

export const MainPage: Story = {
  args: {},
};
