import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

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
