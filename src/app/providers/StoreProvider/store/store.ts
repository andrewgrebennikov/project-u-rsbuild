import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { scrollReducer } from 'features/SavePositionScroll';

import { userReducer } from 'entities/User';

import { api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';

import { createReducerManager } from '../../StoreProvider/config/reducerManager';
import { StoreSchema } from '../types/storeSchema';

export const createReduxStore = (initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
    scroll: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
          },
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
