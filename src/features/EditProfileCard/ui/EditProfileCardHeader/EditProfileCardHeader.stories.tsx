import type { Meta, StoryObj } from '@storybook/react';

import { EditProfileCardHeader as EditProfileCardHeaderComponent } from './EditProfileCardHeader';

const meta: Meta<typeof EditProfileCardHeaderComponent> = {
  title: 'features/EditProfileCard',
  component: EditProfileCardHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof EditProfileCardHeaderComponent>;

export const EditProfileCardHeader: Story = {
  args: {
    readOnly: false,
  },
};
