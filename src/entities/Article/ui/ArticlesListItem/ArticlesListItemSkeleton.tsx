import { cx } from 'classix';

import { ArticlesView } from '@/features/ArticlesViewSelector';

import { Skeleton, SkeletonVariant } from '@/shared/ui/Skeleton';

import styles from './ArticlesListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticlesView;
}

export const ArticlesListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticlesView.GRID) {
    return (
      <article className={cx(styles.articleCard, className, view === ArticlesView.GRID && styles.articleCardGrid)}>
        <Skeleton height="200" className={styles.link} />
        <div className={styles.info}>
          <Skeleton width="80" height="20" />
          <Skeleton width="80" height="20" />
        </div>
        <Skeleton className={styles.title} width="100" height="20" />
      </article>
    );
  }

  return (
    <article className={cx(styles.articleCard, className)}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Skeleton width="32" height="32" variant={SkeletonVariant.CIRCULAR} />
          <Skeleton width="36" height="24" />
        </div>
        <Skeleton width="90" height="24" />
      </div>
      <Skeleton className={styles.title} height="29" />
      <Skeleton className={styles.types} width="100" height="17" />
      <Skeleton className={styles.link} height="200" />
      <div className={styles.footer}>
        <Skeleton width="145" height="30" />
        <Skeleton width="70" height="24" />
      </div>
    </article>
  );
};
