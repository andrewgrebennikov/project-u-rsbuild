import { cx } from 'classix';
import { Link } from 'react-router-dom';

import { Notifications } from '../../model/types/notifications';

import styles from './NotificationsItem.module.scss';

interface INotificationsItemProps {
  className?: string;
  notification: Notifications;
}

export const NotificationsItem = (props: INotificationsItemProps) => {
  const { className, notification } = props;
  const { title, description, href } = notification;

  return (
    <li className={cx(styles.notification, className)}>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
      {href && (
        <Link className={cx('visually-hidden', styles.link)} to={href}>
          {href}
        </Link>
      )}
    </li>
  );
};
