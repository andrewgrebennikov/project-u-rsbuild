import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserIsAdmin, User, userActions } from 'entities/User';

import IconArrowDown from 'shared/assets/icons/icon-arrow-down.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

interface IAvatarDropdownProps {
  className?: string;
  authData: User;
}

export const AvatarDropdown = (props: IAvatarDropdownProps) => {
  const { className, authData } = props;
  const { t } = useTranslation('translation');
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
    <Dropdown
      className={className}
      buttonContent={
        <>
          <Avatar src={authData.avatar} alt={authData.username} width="40" height="40" />
          <IconArrowDown className="icon" width="20" height="20" />
        </>
      }
      items={items}
    />
  );
};
