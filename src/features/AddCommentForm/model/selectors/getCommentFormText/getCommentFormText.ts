import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getCommentFormText = (state: StoreSchema) => state.addCommentForm?.text || '';
