import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticleDetailsCommentsIsLoading = (state: StoreSchema) => state.articleDetailsComments?.isLoading;
