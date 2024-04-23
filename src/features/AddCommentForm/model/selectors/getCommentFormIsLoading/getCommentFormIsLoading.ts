import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getCommentFormIsLoading = (state: StoreSchema) => state.addCommentForm?.isLoading;
