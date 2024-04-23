import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticlesHasMore = (state: StoreSchema) => state.articles?.hasMore;
