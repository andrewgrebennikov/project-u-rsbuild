import { cx } from 'classix';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';

import { getAuthData, getUserIsAdmin, userActions } from 'entities/User';

import IconArrowDown from 'shared/assets/icons/icon-arrow-down.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useModal } from 'shared/hooks/useModal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
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
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(getUserIsAdmin);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const items = useMemo(
    () => [
      {
        id: '1',
        label: t('Профиль'),
        href: RoutePath.profile(authData?.id),
      },
      ...(isAdmin
        ? [
            {
              id: '2',
              label: t('Админка'),
              href: RoutePath.admin(),
            },
          ]
        : []),
      {
        id: '3',
        label: t('Выйти'),
        action: handleLogout,
      },
    ],
    [authData?.id, handleLogout, isAdmin, t],
  );

  return (
    <div className={cx(styles.navbar, className)} data-testid="navbar">
      <ThemeSwitcher className={styles.themeSwitcher} />
      <LangSwitcher className={styles.langSwitcher} />
      {authData ? (
        <Dropdown
          button={
            <>
              <Avatar src={authData.avatar} alt={authData.username} width="40" height="40" />
              <IconArrowDown className={cx('icon', styles.dropDownIcon)} width="20" height="20" />
            </>
          }
          items={items}
        />
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
