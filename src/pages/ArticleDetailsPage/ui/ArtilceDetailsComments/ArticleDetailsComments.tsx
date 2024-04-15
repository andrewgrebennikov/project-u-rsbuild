import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AddCommentForm } from 'features/AddCommentForm';

import { CommentList } from 'entities/Comment';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

import styles from './ArticleDetailsComments.module.scss';

interface IArticleDetailsCommentsProps {
  className?: string;
  articleId: string | undefined;
}

export const ArticleDetailsComments = (props: IArticleDetailsCommentsProps) => {
  const { articleId } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation');
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(articleId));
    }
  }, [articleId, dispatch]);

  if (!articleId && __PROJECT__ !== 'storybook') {
    return <p>{t('Статья не найдена')}</p>;
  }

  return (
    <>
      <Suspense fallback={'Загрузка...'}>
        <AddCommentForm className={styles.form} />
      </Suspense>
      <div className={styles.comments}>
        <h2>{t('Комментарии')}</h2>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </>
  );
};
