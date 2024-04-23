import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticlesInited = (state: StoreSchema) => state.articles?._inited;
