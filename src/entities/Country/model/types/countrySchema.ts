import { ValueOf } from '@/shared/lib/types/valueOf';

export const country = {
  Russia: 'Россия',
  Belarus: 'Беларусь',
} as const;

export type Country = ValueOf<typeof country>;
