import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

import { ArticlesCategoriesField } from '../../types/category';

export const getArticlesCategory = (state: StoreSchema) => state.articles?.type || ArticlesCategoriesField.ALL;
