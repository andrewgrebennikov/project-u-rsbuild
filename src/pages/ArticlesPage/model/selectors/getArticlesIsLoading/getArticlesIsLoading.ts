import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticlesIsLoading = (state: StoreSchema) => state.articles?.isLoading;
