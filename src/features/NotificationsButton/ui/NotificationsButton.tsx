import { cx } from 'classix';

import { NotificationsList, useNotifications } from '@/entities/Notifications';

import IconBell from '@/shared/assets/icons/icon-bell.svg';
import { Popover } from '@/shared/ui/Popover/Popover';

import styles from './NotificationsButton.module.scss';

interface INotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = (props: INotificationsButtonProps) => {
  const { className } = props;
  const {
    data: notifications,
    isLoading,
    error,
  } = useNotifications(null, {
    pollingInterval: 5000,
  });

  return (
    <Popover
      buttonClassName={styles.button}
      panelClassName={styles.panel}
      className={cx(styles.popover, className)}
      buttonContent={<IconBell className="icon" width="30" height="30" />}
    >
      <NotificationsList notifications={notifications} isLoading={isLoading} error={error} />
    </Popover>
  );
};
