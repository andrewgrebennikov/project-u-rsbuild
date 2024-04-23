import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

import { ArticlesCategoriesField } from '@/features/ArticlesCategory';
import { ArticlesOrderField } from '@/features/ArticlesOrder';
import { ArticlesSortField } from '@/features/ArticlesSort';
import { ArticlesView } from '@/features/ArticlesViewSelector';

import { Article } from '@/entities/Article';

import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';

import { fetchArticlesData } from '../services/fetchArticlesData/fetchArticlesData';
import { ArticlesSchema } from '../types/articlesSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.articles || articlesAdapter.getInitialState(),
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
    view: ArticlesView.LIST,
    page: 1,
    limit: 8,
    order: ArticlesOrderField.ASC,
    sort: ArticlesSortField.CREATED,
    search: '',
    hasMore: true,
    type: ArticlesCategoriesField.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<ArticlesOrderField>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticlesCategoriesField>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticlesView;

      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
