import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('translation');

  useEffect(() => {
    document.title = t('Главная страница');
  }, [t]);

  return (
    <Page>
      <h1>{t('Главная страница')}</h1>
      <p>{t('Описание главной страницы')}</p>
    </Page>
  );
};

export default MainPage;
