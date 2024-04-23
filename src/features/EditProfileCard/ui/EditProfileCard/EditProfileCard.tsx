import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { getProfileError } from '../../selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../selectors/getProfileIsLoading/getLoginIsLoading';
import { getProfileReadonly } from '../../selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from '../../slice/profileSlice';
import { EditProfileCardHeader } from '../EditProfileCardHeader/EditProfileCardHeader';

interface IEditProfileCardProps {
  profileId?: string;
}

const initialReducers: ReducersList = { profile: profileReducer };

export const EditProfileCard = (props: IEditProfileCardProps) => {
  const { profileId } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadonly);

  const onEditForm = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEditForm = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveForm = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(updateProfileData(profileId));
    }
  }, [dispatch, profileId]);

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData(profileId));
    }
  }, [dispatch, profileId]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <EditProfileCardHeader
        readOnly={readOnly}
        onEditForm={onEditForm}
        onCancelEditForm={onCancelEditForm}
        onSaveForm={onSaveForm}
      />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readOnly={readOnly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
      />
    </DynamicModuleLoader>
  );
};
