import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [t]);

  return (
    <Page>
      <h1>{t('Страница О нас')}</h1>
    </Page>
  );
};

export default AboutPage;
