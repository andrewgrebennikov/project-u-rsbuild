import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getArticlesError } from '../../selectors/getArticlesError/getArticlesError';
import { getArticlesHasMore } from '../../selectors/getArticlesHasMore/getArticlesHasMore';
import { getArticlesIsLoading } from '../../selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';

export const fetchArticlesMore = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/fetchArticlesMore',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesHasMore(getState());
    const page = getArticlesPage(getState());
    const isLoading = getArticlesIsLoading(getState());
    const error = getArticlesError(getState());

    if (hasMore && !isLoading && !error) {
      dispatch(articlesActions.setPage(page + 1));
      dispatch(fetchArticlesData({}));
    }
  },
);
