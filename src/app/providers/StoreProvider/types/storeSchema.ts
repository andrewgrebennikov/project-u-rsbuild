import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesSchema } from 'pages/ArticlesPage';

import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditProfileCard';
import { ScrollSchema } from 'features/SavePositionScroll';

import { ArticleSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';

import { rtkApi } from 'shared/api/rtkApi';

export interface StoreSchema {
  user: UserSchema;
  scroll: ScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  addCommentForm?: AddCommentFormSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articles?: ArticlesSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
