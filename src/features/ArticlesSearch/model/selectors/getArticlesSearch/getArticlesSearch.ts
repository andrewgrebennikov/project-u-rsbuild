import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticlesSearch = (state: StoreSchema) => state.articles?.search || '';
