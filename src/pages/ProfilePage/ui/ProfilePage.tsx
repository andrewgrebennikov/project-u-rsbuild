import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page/Page';

import { EditProfileCard } from '@/features/EditProfileCard';

const ProfilePage = () => {
  const { id: profileId } = useParams();
  const { t } = useTranslation('translation');

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [t]);

  if (!profileId && __PROJECT__ !== 'storybook') {
    return <p>{t('Профиль не найден')}</p>;
  }

  return (
    <Page>
      <EditProfileCard profileId={profileId} />
    </Page>
  );
};

export default ProfilePage;
