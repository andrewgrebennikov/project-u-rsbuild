import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData } from 'entities/User';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface IRequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props;
  const authData = useSelector(getAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.main()} state={{ from: location }} replace />;
  }

  return children;
};
