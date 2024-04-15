import { StoryContext, StoryFn } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n/i18n';

export const TranslationDecorator = (Story: StoryFn, context: StoryContext) => {
  const locale = context?.globals?.locale;

  useEffect(() => {
    i18n.changeLanguage(locale).catch(() => console.log('Не удалось изменить язык'));
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  return (
    <Suspense fallback="Загрузка...">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
