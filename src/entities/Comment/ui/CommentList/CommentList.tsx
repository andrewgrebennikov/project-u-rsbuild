import { cx } from 'classix';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

import styles from './CommentList.module.scss';

interface ICommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: ICommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cx(className, styles.commentList)}>
        <p>Загрузка комментариев...</p>
      </div>
    );
  }

  return (
    <div className={cx(className, styles.commentList)}>
      {comments?.length ? (
        comments?.map((comment) => {
          const { id } = comment;

          return <CommentItem key={id} comment={comment} />;
        })
      ) : (
        <p>{t('Комментарии отсутствуют')}</p>
      )}
    </div>
  );
};
