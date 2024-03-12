import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { ArticlesCategoriesField, getArticlesCategory } from 'features/ArticlesCategory';
import { getArticlesOrder } from 'features/ArticlesOrder';
import { getArticlesSearch } from 'features/ArticlesSearch';
import { getArticlesSort } from 'features/ArticlesSort';

import { Article } from 'entities/Article';

import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit';
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage';

interface IFetchArticlesProps {
  replace?: boolean;
}

export const fetchArticlesData = createAsyncThunk<Article[], IFetchArticlesProps, ThunkConfig<string>>(
  'articles/fetchArticlesData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesLimit(getState());
    const page = getArticlesPage(getState());
    const sort = getArticlesSort(getState());
    const order = getArticlesOrder(getState());
    const search = getArticlesSearch(getState());
    const type = getArticlesCategory(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: !search.length ? undefined : search,
          type: type === ArticlesCategoriesField.ALL ? undefined : type,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
