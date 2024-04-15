import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
  isLoading: false,
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCommentForArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addCommentForArticle.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addCommentForArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } = addCommentFormSlice;
