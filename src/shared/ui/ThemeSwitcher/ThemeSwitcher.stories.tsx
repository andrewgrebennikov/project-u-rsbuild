import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher as ThemeSwitcherComponent } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcherComponent> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcherComponent,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcherComponent>;

export const ThemeSwitcher: Story = {
  args: {},
};
