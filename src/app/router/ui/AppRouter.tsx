import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '@/widgets/Navbar';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Loader } from '@/shared/ui/Loader/Loader';

import { RequireAuth } from '../ui/RequireAuth';

interface IAppRouterProps {
  className?: string;
}

export const AppRouter = (props: IAppRouterProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routeConfig.map((route) => {
            const { path, element, authOnly, roles } = route;

            return (
              <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth roles={roles}>{element}</RequireAuth> : element}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
