import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('translation');

  useEffect(() => {
    document.title = t('Доступ запрещён');
  }, [t]);

  return (
    <Page>
      <h1>{t('Доступ запрещён')}</h1>
    </Page>
  );
};

export default ForbiddenPage;
