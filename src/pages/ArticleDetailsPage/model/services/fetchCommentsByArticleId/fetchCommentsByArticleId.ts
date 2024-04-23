import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      if (!articleId) {
        throw new Error();
      }

      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

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
