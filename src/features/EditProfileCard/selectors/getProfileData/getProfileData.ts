import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getProfileData = (state: StoreSchema) => state.profile?.profileData;
