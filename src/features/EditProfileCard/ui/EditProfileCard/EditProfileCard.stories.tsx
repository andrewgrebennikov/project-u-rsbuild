import type { Meta, StoryObj } from '@storybook/react';

import { country } from 'entities/Country';
import { currency } from 'entities/Currency';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { EditProfileCard as EditProfileCardComponent } from './EditProfileCard';

const meta: Meta<typeof EditProfileCardComponent> = {
  title: 'features/EditProfileCard',
  component: EditProfileCardComponent,
};

export default meta;
type Story = StoryObj<typeof EditProfileCardComponent>;

export const EditProfileCard: Story = {
  args: {
    profileId: '1',
  },
  decorators: [
    StoreDecorator({
      profile: {
        profileData: {
          username: 'Andrey',
          age: 32,
          country: country.Russia,
          lastname: 'Grebennikov',
          firstname: 'Andrey',
          city: 'Ульяновск',
          currency: currency.RUB,
          avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
        },
        formData: {
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
    }),
  ],
};
