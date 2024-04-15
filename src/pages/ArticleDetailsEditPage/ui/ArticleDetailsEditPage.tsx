import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

const ArticleDetailsEditPage = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation');

  return <Page>{t(`Edit article by id: ${id}`)}</Page>;
};

export default ArticleDetailsEditPage;
