import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import { ArticlesSortField } from '../../types/articles';

export const getArticlesSort = (state: StoreSchema) => state.articles?.sort || ArticlesSortField.CREATED;
