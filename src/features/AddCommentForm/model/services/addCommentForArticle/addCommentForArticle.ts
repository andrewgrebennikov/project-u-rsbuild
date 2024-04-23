import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage';

import { getArticleData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getAuthData } from '@/entities/User';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI;

    const profileData = getAuthData(getState());
    const articleData = getArticleData(getState());

    if (!profileData || !text || !articleData) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleData.id,
        userId: profileData.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleData.id));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
