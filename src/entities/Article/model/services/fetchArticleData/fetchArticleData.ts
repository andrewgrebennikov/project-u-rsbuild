import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '../../types/article';

export const fetchArticleData = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'article/fetchArticleData',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      if (!articleId) {
        throw new Error();
      }

      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
