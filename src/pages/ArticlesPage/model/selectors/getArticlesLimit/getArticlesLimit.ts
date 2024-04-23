import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticlesLimit = (state: StoreSchema) => state.articles?.limit || 8;
