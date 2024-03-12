import { Suspense, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

import { AddCommentFormLazy } from 'features/AddCommentForm';
import { ArticleRecommendation } from 'features/ArticlesRecomendation';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';

import { getArticleDetailsCommentsIsLoading } from '../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';
import { getIsEditArticleDetails } from '../model/selectors/getIsEditArticleDetails/getIsEditArticleDetails';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';

import styles from './ArticleDetailsPage.module.scss';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id: articleId } = useParams();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const isEdit = useSelector(getIsEditArticleDetails);

  const onSubmitCommentForm = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(articleId));
    }
  }, [articleId, dispatch]);

  if (!articleId) {
    return <p>{t('Статья не найдена')}</p>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={styles.article}>
        <header className={styles.header}>
          <AppLink to={RoutePath.articles()} variant={AppLinkVariant.OUTLINED}>
            {t('Назад')}
          </AppLink>
          {isEdit && (
            <AppLink to={RoutePath.article_edit(articleId)} variant={AppLinkVariant.OUTLINED}>
              {t('Редактировать')}
            </AppLink>
          )}
        </header>
        <ArticleDetails articleId={articleId} />
        <ArticleRecommendation />
        <Suspense fallback={'Загрузка...'}>
          <AddCommentFormLazy className={styles.form} onSubmitCommentForm={onSubmitCommentForm} />
        </Suspense>
        <div className={styles.comments}>
          <h2>{t('Комментарии')}</h2>
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
