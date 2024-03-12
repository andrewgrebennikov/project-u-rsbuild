import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

import { RequireAuth } from '../ui/RequireAuth';

export const AppRouter = () => {
  return (
    <div className="app-page">
      <Suspense fallback={<Loader />}>
        <Routes>
          {routeConfig.map((route) => {
            const { path, element, authOnly } = route;

            return <Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
