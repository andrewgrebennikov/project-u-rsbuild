import { cx } from 'classix';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

import styles from './CommentList.module.scss';

interface ICommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList = (props: ICommentListProps) => {
  const { className, comments, isLoading, error } = props;
  const { t } = useTranslation('translation');

  if (isLoading) {
    return (
      <div className={cx(className, styles.commentList)}>
        <p>Загрузка комментариев...</p>
      </div>
    );
  }

  if (error) {
    return <p className={styles.info}>{t('Произошла ошибка при загрузке комментариев')}</p>;
  }

  if (!comments.length) {
    return <p className={styles.info}>{t('Комментарии отсутствуют')}</p>;
  }

  return (
    <div className={cx(className, styles.commentList)}>
      {comments.map((comment) => {
        const { id } = comment;

        return <CommentItem key={id} comment={comment} />;
      })}
    </div>
  );
};
