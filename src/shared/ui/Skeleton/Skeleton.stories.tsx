import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton as SkeletonComponent, SkeletonVariant } from './Skeleton';

const meta: Meta<typeof SkeletonComponent> = {
  title: 'shared/Skeleton',
  component: SkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof SkeletonComponent>;

export const Skeleton: Story = {
  args: {
    height: '100',
  },
};

export const SkeletonCircular: Story = {
  args: {
    width: '100',
    height: '100',
    variant: SkeletonVariant.CIRCULAR,
  },
};
