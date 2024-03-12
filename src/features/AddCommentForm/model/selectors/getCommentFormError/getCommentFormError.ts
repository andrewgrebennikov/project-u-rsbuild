import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getCommentFormError = (state: StoreSchema) => state.addCommentForm?.error;
