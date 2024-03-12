import { cx } from 'classix';
import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesView } from 'features/ArticlesViewSelector';

import { Article } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';

import styles from './ArticlesList.module.scss';

interface IArticlesListProps {
  className?: string;
  articles: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
  error?: string;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticlesView) => {
  return Array.from(Array(4).keys()).map((_, index) => {
    return <ArticleListItemSkeleton key={index} view={view} />;
  });
};

export const ArticlesList = (props: IArticlesListProps) => {
  const { articles, view = ArticlesView.LIST, className, isLoading, error, target } = props;
  const { t } = useTranslation('error');

  if (error) {
    return (
      <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
        <p>{t('Произошла ошибка')}</p>
      </div>
    );
  }

  if (!isLoading && !articles.length) {
    return <p>{t('Статьи отсутствуют')}</p>;
  }

  return (
    <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
      {articles.length > 0 &&
        articles.map((article) => {
          return <ArticlesListItem key={article.id} article={article} view={view} target={target} />;
        })}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
