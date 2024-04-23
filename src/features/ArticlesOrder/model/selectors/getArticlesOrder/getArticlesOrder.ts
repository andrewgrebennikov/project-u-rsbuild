import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

import { ArticlesOrderField } from '../../types/articles';

export const getArticlesOrder = (state: StoreSchema) => state.articles?.order || ArticlesOrderField.ASC;
