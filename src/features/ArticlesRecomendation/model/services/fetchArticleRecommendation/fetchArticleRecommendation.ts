import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Article } from 'entities/Article';

export const fetchArticleRecommendation = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'article/fetchArticleRecommendation',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
          _expand: 'user',
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
