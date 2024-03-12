import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getProfileError = (state: StoreSchema) => state.profile?.error;
