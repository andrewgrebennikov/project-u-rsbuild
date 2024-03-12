import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticleRecommendationError = (state: StoreSchema) => state.articleRecommendation?.error;
