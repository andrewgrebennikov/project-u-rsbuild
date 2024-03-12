import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticleError = (state: StoreSchema) => state.article?.error;
