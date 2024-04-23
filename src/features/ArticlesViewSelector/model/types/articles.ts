import { ValueOf } from '@/shared/lib/types/valueOf';

export const ArticlesView = {
  LIST: 'LIST',
  GRID: 'GRID',
} as const;

export type ArticlesView = ValueOf<typeof ArticlesView>;
