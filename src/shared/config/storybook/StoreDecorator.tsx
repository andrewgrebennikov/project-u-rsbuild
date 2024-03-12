import { StoryFn } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage';

import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';

import { articleReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';

import { ReducersList } from 'shared/lib/types/reducersList';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>, asyncReducer?: ReducersList) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={state as StoreSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
      <Story />
    </StoreProvider>
  );
};
