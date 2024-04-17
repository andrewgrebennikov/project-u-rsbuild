import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { cx } from 'classix';

import { Notifications } from '../../model/types/notifications';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import { NotificationsItemSkeleton } from '../NotificationsItem/NotificationsItemSkeleton';

import styles from './NotificationsList.module.scss';

interface INotificationsListProps {
  className?: string;
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
  notifications: Notifications[] | undefined;
}

export const NotificationsList = (props: INotificationsListProps) => {
  const { className, error, isLoading, notifications } = props;

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <ul className={cx(styles.list, className)}>
        <NotificationsItemSkeleton />
      </ul>
    );
  }

  return (
    <ul className={cx(styles.list, className)}>
      {notifications?.map((notification) => {
        return <NotificationsItem key={notification.id} notification={notification} />;
      })}
    </ul>
  );
};
