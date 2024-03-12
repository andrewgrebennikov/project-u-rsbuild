import { cx } from 'classix';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { Comment } from '../../model/types/comment';

import styles from './CommentItem.module.scss';

interface ICommentItemProps {
  className?: string;
  comment: Comment;
}

export const CommentItem = (props: ICommentItemProps) => {
  const { className, comment } = props;
  const { user, text } = comment;

  return (
    <div className={cx(className, styles.commentItem)}>
      <div className={styles.user}>
        {user.avatar ? (
          <AppLink className={styles.link} to={`${RoutePath.profile}${user.id}`}>
            <Avatar className={styles.avatar} src={user.avatar} alt={user.username} width={32} height={32} />
          </AppLink>
        ) : null}
        <span className={styles.username}>{user.username}</span>
      </div>
      <div className={styles.commentText}>
        <p>{text}</p>
      </div>
    </div>
  );
};
