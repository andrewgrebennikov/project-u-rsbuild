import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticleData = (state: StoreSchema) => state.article?.articleData;
