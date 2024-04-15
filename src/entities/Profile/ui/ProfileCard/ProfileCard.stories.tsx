import type { Meta, StoryObj } from '@storybook/react';

import { country } from 'entities/Country';
import { currency } from 'entities/Currency';

import { ProfileCard as ProfileCardComponent } from './ProfileCard';

const meta: Meta<typeof ProfileCardComponent> = {
  title: 'entities/ProfileCard',
  component: ProfileCardComponent,
};

export default meta;
type Story = StoryObj<typeof ProfileCardComponent>;

export const ProfileCard: Story = {
  args: {
    data: {
      username: 'Andrey',
      age: 32,
      country: country.Russia,
      lastname: 'Grebennikov',
      firstname: 'Andrey',
      city: 'Ульяновск',
      currency: currency.RUB,
      avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
    },
  },
};

export const ProfileCardIsError: Story = {
  args: {
    error: 'Ошибка',
  },
};

export const ProfileCardIsLoading: Story = {
  args: {
    isLoading: true,
  },
};
