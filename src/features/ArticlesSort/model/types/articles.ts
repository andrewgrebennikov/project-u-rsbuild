import { ValueOf } from 'shared/lib/types/valueOf';

export const ArticlesSortField = {
  VIEWS: 'views',
  TITLE: 'title',
  CREATED: 'createdAt',
} as const;

export type ArticlesSortField = ValueOf<typeof ArticlesSortField>;
