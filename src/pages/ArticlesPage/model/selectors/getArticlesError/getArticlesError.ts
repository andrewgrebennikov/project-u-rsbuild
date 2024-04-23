import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticlesError = (state: StoreSchema) => state.articles?.error;
