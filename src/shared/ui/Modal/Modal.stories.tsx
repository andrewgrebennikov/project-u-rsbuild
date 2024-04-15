import type { Meta, StoryObj } from '@storybook/react';

import { Modal as ModalComponent } from './Modal';

const meta: Meta<typeof ModalComponent> = {
  title: 'shared/Modal',
  component: ModalComponent,
};

export default meta;
type Story = StoryObj<typeof ModalComponent>;

export const Modal: Story = {
  args: {
    children: 'Модальное окно',
    isOpen: true,
    onClose: () => {},
  },
};
