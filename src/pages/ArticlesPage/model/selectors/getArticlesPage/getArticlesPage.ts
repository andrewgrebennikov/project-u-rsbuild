import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticlesPage = (state: StoreSchema) => state.articles?.page || 1;
