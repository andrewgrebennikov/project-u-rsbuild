import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticleRecommendationIsLoading = (state: StoreSchema) => state.articleRecommendation?.isLoading;
