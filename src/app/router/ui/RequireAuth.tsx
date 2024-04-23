import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData, UserRole } from '@/entities/User';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface IRequireAuthProps {
  children: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children, roles } = props;
  const authData = useSelector(getAuthData);
  const location = useLocation();

  const hasAccess = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => authData?.roles?.includes(role));
  }, [authData?.roles, roles]);

  if (!authData) {
    return <Navigate to={RoutePath.main()} state={{ from: location }} replace />;
  }

  if (!hasAccess) {
    return <Navigate to={RoutePath.forbidden()} state={{ from: location }} replace />;
  }

  return children;
};
