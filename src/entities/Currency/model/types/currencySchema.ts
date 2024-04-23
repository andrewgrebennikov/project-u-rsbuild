import { ValueOf } from '@/shared/lib/types/valueOf';

export const currency = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const;

export type Currency = ValueOf<typeof currency>;
