import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'ru-RU',
  fallbackLng: 'en-US',
  debug: false,
  resources: {
    'ru-RU': {
      translations: {},
    },
    'en-US': {
      translations: {},
    },
  },
});

export default i18n;
