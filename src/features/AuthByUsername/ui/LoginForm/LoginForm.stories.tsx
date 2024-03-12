import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { LoginFormLazy } from './LoginFormLazy';

const meta: Meta<typeof LoginFormLazy> = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginFormLazy,
};

export default meta;
type Story = StoryObj<typeof LoginFormLazy>;

export const LoginForm: Story = {
  args: {},
  decorators: [StoreDecorator({ login: { username: '123', password: '123' } })],
};

export const LoginFormWithError: Story = {
  args: {},
  decorators: [StoreDecorator({ login: { username: '123', password: '123', error: 'Ошибка' } })],
};

export const LoginFormWithLoading: Story = {
  args: {},
  decorators: [StoreDecorator({ login: { username: '123', password: '123', isLoading: true } })],
};
