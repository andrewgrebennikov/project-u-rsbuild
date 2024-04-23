import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

import { Comment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleDetailsComments || articleDetailsCommentsAdapter.getInitialState(),
);

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        articleDetailsCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
