import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getProfileIsLoading = (state: StoreSchema) => state.profile?.isLoading;
