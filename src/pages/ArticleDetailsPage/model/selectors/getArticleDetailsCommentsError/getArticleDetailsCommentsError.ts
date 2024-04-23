import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getArticleDetailsCommentsError = (state: StoreSchema) => state.articleDetailsComments?.error;
