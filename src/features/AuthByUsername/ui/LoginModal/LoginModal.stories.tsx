import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal as LoginModalComponent } from './LoginModal';

const meta: Meta<typeof LoginModalComponent> = {
  title: 'features/AuthByUsername/LoginModal',
  component: LoginModalComponent,
};

export default meta;
type Story = StoryObj<typeof LoginModalComponent>;

export const LoginModal: Story = {
  args: {
    isOpen: true,
  },
};
