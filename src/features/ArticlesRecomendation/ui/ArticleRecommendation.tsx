import { cx } from 'classix';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticlesView } from 'features/ArticlesViewSelector';

import { ArticlesList } from 'entities/Article';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';

import { getArticleRecommendationError } from '../model/selectors/getArticleRecommendationError/getArticleRecommendationError';
import { getArticleRecommendationIsLoading } from '../model/selectors/getArticleRecommendationIsLoading/getArticleRecommendationIsLoading';
import { fetchArticleRecommendation } from '../model/services/fetchArticleRecommendation/fetchArticleRecommendation';
import { articleRecommendationReducer, getArticleRecommendation } from '../model/slice/articleRecommendationSlice';

import styles from './ArticleRecommendation.module.scss';

interface IArticlesRecommendationProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleRecommendation: articleRecommendationReducer,
};

export const ArticleRecommendation = (props: IArticlesRecommendationProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticleRecommendation.selectAll);
  const error = useSelector(getArticleRecommendationError);
  const isLoading = useSelector(getArticleRecommendationIsLoading);

  useEffect(() => {
    dispatch(fetchArticleRecommendation());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={cx(styles.recommendation, className)}>
        <h2 className={styles.title}>{t('Рекомендации')}</h2>
        <ArticlesList
          articles={articles}
          view={ArticlesView.GRID}
          error={error}
          isLoading={isLoading}
          target="_blank"
        />
      </div>
    </DynamicModuleLoader>
  );
};
