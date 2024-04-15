import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const AdminPage = () => {
  const { t } = useTranslation('translation');

  return <Page>{t('Админка')}</Page>;
};

export default AdminPage;
