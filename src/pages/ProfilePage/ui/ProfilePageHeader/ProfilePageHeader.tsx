import { cx } from 'classix';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileFormData } from 'entities/Profile';
import { getAuthData } from 'entities/User';

import { Button } from 'shared/ui/Button/Button';

import styles from './ProfilePageHeader.module.scss';

interface IProfilePageHeader {
  className?: string;
  readOnly?: boolean;
  onEditForm?: () => void;
  onCancelEditForm?: () => void;
  onSaveForm?: () => void;
}

export const ProfilePageHeader = (props: IProfilePageHeader) => {
  const { className, readOnly, onEditForm, onCancelEditForm, onSaveForm } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getAuthData);
  const profileData = useSelector(getProfileFormData);
  const canEdit = authData?.id === profileData?.id;

  return (
    <div className={cx(styles.header, className)}>
      <h1>{t('Профиль')}</h1>
      {canEdit &&
        (readOnly ? (
          <Button variant="outlined" onClick={onEditForm}>
            {t('Редактировать')}
          </Button>
        ) : (
          <div className={styles.actions}>
            <Button variant="outlined" onClick={onSaveForm}>
              {t('Сохранить')}
            </Button>
            <Button variant="outlined" onClick={onCancelEditForm}>
              {t('Отмена')}
            </Button>
          </div>
        ))}
    </div>
  );
};
