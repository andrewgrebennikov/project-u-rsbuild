import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { cx } from 'classix';
import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesView } from '@/features/ArticlesViewSelector';

import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';

import styles from './ArticlesList.module.scss';

interface IArticlesListProps {
  className?: string;
  articles?: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
  error?: SerializedError | FetchBaseQueryError | undefined | string;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticlesView) => {
  return Array.from(Array(5).keys()).map((_, index) => {
    return <ArticlesListItemSkeleton key={index} view={view} />;
  });
};

export const ArticlesList = (props: IArticlesListProps) => {
  const { articles, view = ArticlesView.LIST, className, isLoading, error, target } = props;
  const { t } = useTranslation('translation');

  if (error) {
    return (
      <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
        <p>{t('Произошла ошибка при загрузке статей')}</p>
      </div>
    );
  }

  if (!isLoading && !articles?.length) {
    return <p>{t('Статьи отсутствуют')}</p>;
  }

  return (
    <div className={cx(styles.listing, className, view === ArticlesView.GRID && styles.listingGrid)}>
      {articles?.map((article) => {
        return <ArticlesListItem key={article.id} article={article} view={view} target={target} />;
      })}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
