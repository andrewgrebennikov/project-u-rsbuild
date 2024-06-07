import { Skeleton, SkeletonVariant } from '@/shared/ui/Skeleton';

import styles from './ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonHeader}>
        <Skeleton className={styles.avatar} width="200" height="200" variant={SkeletonVariant.CIRCULAR} />
      </div>
      <Skeleton className={styles.title} height="24" />
      <Skeleton className={styles.subtitle} height="24" />
      <div className={styles.info}>
        <Skeleton className={styles.views} width="200" height="24" />
        <Skeleton className={styles.date} width="150" height="24" />
      </div>
      <Skeleton height="200" />
    </div>
  );
};
