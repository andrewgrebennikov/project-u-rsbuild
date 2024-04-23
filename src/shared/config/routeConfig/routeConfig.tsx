import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { ArticleDetailsEditPage } from '@/pages/ArticleDetailsEditPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { CreateArticlePage } from '@/pages/CreateArticlePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFound } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';

import { UserRole } from '@/entities/User';

import { ValueOf } from '../../lib/types/valueOf';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  ARTICLE_EDIT: 'article_edit',
  CREATE_ARTICLE: 'create_article',
  ADMIN: 'admin',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutes, (id?: string) => string> = {
  [AppRoutes.MAIN]: () => '/',
  [AppRoutes.ABOUT]: () => '/about',
  [AppRoutes.PROFILE]: (id?: string) => (id ? `/profile/${id}` : '/profile/:id'),
  [AppRoutes.ARTICLES]: () => '/articles',
  [AppRoutes.ARTICLE_DETAILS]: (id?: string) => (id ? `/article/${id}` : '/article/:id'),
  [AppRoutes.ARTICLE_EDIT]: (id?: string) => (id ? `/article/${id}/edit` : '/article/:id/edit'),
  [AppRoutes.CREATE_ARTICLE]: () => '/article/create',
  [AppRoutes.ADMIN]: () => '/admin',
  [AppRoutes.FORBIDDEN]: () => '/forbidden',
  [AppRoutes.NOT_FOUND]: () => '*',
};

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.main(),
    element: <MainPage />,
  },
  {
    path: RoutePath.about(),
    element: <AboutPage />,
  },
  {
    path: RoutePath.articles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_details(),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: RoutePath.article_edit(),
    element: <ArticleDetailsEditPage />,
    authOnly: true,
  },
  {
    path: RoutePath.create_article(),
    element: <CreateArticlePage />,
    authOnly: true,
  },
  {
    path: RoutePath.profile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.admin(),
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: RoutePath.forbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  {
    path: RoutePath.not_found(),
    element: <NotFound />,
  },
];
