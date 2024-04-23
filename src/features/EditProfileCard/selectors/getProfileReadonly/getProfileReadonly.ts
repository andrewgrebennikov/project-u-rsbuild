import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getProfileReadonly = (state: StoreSchema) => state.profile?.readonly;
