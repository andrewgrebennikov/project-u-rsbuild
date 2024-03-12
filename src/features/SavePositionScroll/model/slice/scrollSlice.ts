import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSchema } from '../types/scrollSchema';

const initialState: ScrollSchema = {
  scrollPosition: {},
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ pathname: string; position: number }>) => {
      state.scrollPosition[action.payload.pathname] = action.payload.position;
    },
  },
});

export const { actions: scrollActions, reducer: scrollReducer } = scrollSlice;
