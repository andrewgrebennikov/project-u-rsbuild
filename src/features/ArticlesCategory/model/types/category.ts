import { ValueOf } from '@/shared/lib/types/valueOf';

export const ArticlesCategoriesField = {
  ALL: 'All',
  IT: 'IT',
  SCIENCE: 'Science',
  ECONOMY: 'Economy',
} as const;

export type ArticlesCategoriesField = ValueOf<typeof ArticlesCategoriesField>;
