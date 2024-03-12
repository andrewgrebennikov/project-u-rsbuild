import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import { ArticlesView } from '../../types/articles';

export const getArticlesView = (state: StoreSchema) => state.articles?.view || ArticlesView.LIST;
