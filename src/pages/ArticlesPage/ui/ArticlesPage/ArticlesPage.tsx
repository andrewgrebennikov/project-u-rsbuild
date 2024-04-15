import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Filters } from 'widgets/Filters/intex';
import { Page } from 'widgets/Page/Page';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';

import { getArticlesIsLoading } from '../../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { fetchArticlesMore } from '../../model/services/fetchArticlesMore/fetchArticlesMore';
import { initArticles } from '../../model/services/initArticles/initArticles';
import { articlesReducer } from '../../model/slice/articlesSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';

import styles from './ArticlesPage.module.scss';

const initialReducers: ReducersList = { articles: articlesReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesIsLoading);
  const [searchParams] = useSearchParams();

  const onLoadMore = useCallback(() => {
    if (!isLoading && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesMore());
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticles(searchParams));
    }
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadMore}>
        <Filters className={styles.filters} />
        <ArticlesInfiniteList isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
