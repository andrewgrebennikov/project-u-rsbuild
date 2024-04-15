import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const CreateArticlePage = () => {
  const { t } = useTranslation('translation');

  return <Page>{t('Create new article')}</Page>;
};

export default CreateArticlePage;
