import { Preview } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { TranslationDecorator } from '@/shared/config/storybook/TranslationDecorator';

const preview: Preview = {
  globalTypes: {
    colorScheme: {
      description: 'Global theme for components',
      defaultValue: Theme.SYSTEM,
      toolbar: {
        icon: 'paintbrush',
        items: [
          { title: 'Light', value: 'light', icon: 'circlehollow' },
          { title: 'Dark', value: 'dark', icon: 'circle' },
          { title: 'System', value: 'system', icon: 'mirror' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'ru-RU',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { title: 'Russian', value: 'ru-RU', right: '🇷🇺' },
          { title: 'English', value: 'en-US', right: '🇺🇸' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator, TranslationDecorator, RouterDecorator, StoreDecorator({})],
};

export default preview;
