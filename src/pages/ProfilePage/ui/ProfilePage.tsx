import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
} from 'entities/Profile';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList } from 'shared/lib/types/reducersList';

import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { id: profileId } = useParams();
  const { t } = useTranslation();
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
    dispatch(updateProfileData(profileId));
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
    document.title = t('Страница О нас');
  }, [t]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData(profileId));
    }
  }, [dispatch, profileId]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
