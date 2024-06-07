import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile } from '@/entities/Profile';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
