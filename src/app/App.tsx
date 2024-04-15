import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Sidebar } from 'widgets/Sidebar';

import { getAuthInited, userActions } from 'entities/User';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';

import { AppRouter } from './router';
import './styles/index.scss';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getAuthInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <div className="app__content">
          <Sidebar />
          {isInited && <AppRouter className="app__page" />}
        </div>
      </Suspense>
    </div>
  );
};
