import { cx } from 'classix';
import { useTranslation } from 'react-i18next';

import { ArticlesView } from 'features/ArticlesViewSelector';

import { ArticlesList } from 'entities/Article';

import { useArticleRecommendationList } from '../api/articleRecommendationApi';

import styles from './ArticleRecommendation.module.scss';

interface IArticlesRecommendationProps {
  className?: string;
}

export const ArticleRecommendation = (props: IArticlesRecommendationProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { data: articles, error, isLoading } = useArticleRecommendationList(5);

  return (
    <div className={cx(styles.recommendation, className)}>
      <h2 className={styles.title}>{t('Рекомендации')}</h2>
      <ArticlesList articles={articles} view={ArticlesView.GRID} isLoading={isLoading} error={error} target="_blank" />
    </div>
  );
};
