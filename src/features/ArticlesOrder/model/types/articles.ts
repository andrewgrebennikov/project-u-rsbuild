import { ValueOf } from 'shared/lib/types/valueOf';

export const ArticlesOrderField = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type ArticlesOrderField = ValueOf<typeof ArticlesOrderField>;
