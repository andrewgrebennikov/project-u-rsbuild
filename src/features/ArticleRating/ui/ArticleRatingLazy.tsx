import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { IArticleRatingProps } from '../ui/ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: IArticleRatingProps) => {
  const { t } = useTranslation('translation');

  return (
    <Suspense fallback={<p>{t('Загрузка оценки')}</p>}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
