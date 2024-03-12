import type { Meta, StoryObj } from '@storybook/react';

import { AddCommentFormLazy } from './AddCommentFormLazy';

const meta: Meta<typeof AddCommentFormLazy> = {
  title: 'features/AddCommentForm',
  component: AddCommentFormLazy,
};

export default meta;
type Story = StoryObj<typeof AddCommentFormLazy>;

export const AddCommentForm: Story = {
  args: {},
};
