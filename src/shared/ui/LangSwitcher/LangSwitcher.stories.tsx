import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher as LangSwitcherComponent } from './LangSwitcher';

const meta: Meta<typeof LangSwitcherComponent> = {
  title: 'shared/LangSwitcher',
  component: LangSwitcherComponent,
};

export default meta;
type Story = StoryObj<typeof LangSwitcherComponent>;

export const LangSwitcher: Story = {
  args: {},
};
