import { cx } from 'classix';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationsButton } from 'features/NotificationsButton';

import { getAuthData } from 'entities/User';

import { useModal } from 'shared/hooks/useModal';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo((props: INavbarProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();
  const authData = useSelector(getAuthData);

  return (
    <div className={cx(styles.navbar, className)} data-testid="navbar">
      <ThemeSwitcher className={styles.themeSwitcher} />
      {authData && <NotificationsButton className={styles.notificationsButton} />}
      <LangSwitcher className={styles.langSwitcher} />
      {authData ? (
        <AvatarDropdown authData={authData} />
      ) : (
        <>
          <Button variant={ButtonVariant.CONTAINED} onClick={handleModalOpen}>
            {t('Войти')}
          </Button>
          <LoginModal isOpen={isOpenModal} onClose={handleModalClose} />
        </>
      )}
    </div>
  );
});
