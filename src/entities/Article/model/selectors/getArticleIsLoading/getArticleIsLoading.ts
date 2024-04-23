import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticleIsLoading = (state: StoreSchema) => state.article?.isLoading;
