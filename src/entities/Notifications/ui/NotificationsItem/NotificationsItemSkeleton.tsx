import { cx } from 'classix';

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import styles from './NotificationsItem.module.scss';

interface INotificationsItemSkeletonProps {
  className?: string;
}

export const NotificationsItemSkeleton = (props: INotificationsItemSkeletonProps) => {
  const { className } = props;

  return Array.from(Array(2).keys()).map((_, index) => {
    return (
      <li key={index} className={cx(styles.notification, className)}>
        <Skeleton height="16" />
        <Skeleton height="32" />
      </li>
    );
  });
};
