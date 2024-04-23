import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getProfileFormData = (state: StoreSchema) => state.profile?.formData;
