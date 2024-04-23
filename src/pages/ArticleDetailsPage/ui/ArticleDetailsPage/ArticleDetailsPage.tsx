import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page/Page';

import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendation } from '@/features/ArticlesRecomendation';

import { ArticleDetails } from '@/entities/Article';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { ArticleDetailsComments } from '../ArtilceDetailsComments/ArticleDetailsComments';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id: articleId } = useParams();
  const { t } = useTranslation('translation');

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(articleId));
    }
  }, [articleId, dispatch]);

  if (!articleId && __PROJECT__ !== 'storybook') {
    return <p>{t('Статья не найдена')}</p>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page>
        <ArticleDetailsHeader articleId={articleId} />
        <ArticleDetails articleId={articleId} />
        <ArticleRecommendation />
        <ArticleRating articleId={articleId} />
        <ArticleDetailsComments articleId={articleId} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
