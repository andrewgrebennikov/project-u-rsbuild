import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleData } from '../services/fetchArticleData/fetchArticleData';
import { Article } from '../types/article';
import { ArticleSchema } from '../types/articleSchema';

const initialState: ArticleSchema = {
  articleData: undefined,
  isLoading: false,
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.articleData = action.payload;
      })
      .addCase(fetchArticleData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
