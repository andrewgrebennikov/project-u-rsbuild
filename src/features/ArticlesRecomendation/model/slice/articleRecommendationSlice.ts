import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import { Article } from 'entities/Article';

import { fetchArticleRecommendation } from '../services/fetchArticleRecommendation/fetchArticleRecommendation';
import { ArticleRecommendationSchema } from '../types/articleRecommendationSchema';

const articleRecommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendation = articleRecommendationAdapter.getSelectors<StoreSchema>(
  (state) => state.articleRecommendation || articleRecommendationAdapter.getInitialState(),
);

export const articleRecommendationSlice = createSlice({
  name: 'articleRecommendation',
  initialState: articleRecommendationAdapter.getInitialState<ArticleRecommendationSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendation.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendation.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleRecommendationReducer } = articleRecommendationSlice;
