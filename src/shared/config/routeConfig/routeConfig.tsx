import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsEditPage } from 'pages/ArticleDetailsEditPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { CreateArticlePage } from 'pages/CreateArticlePage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

import { ValueOf } from '../../lib/types/valueOf';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  ARTICLE_EDIT: 'article_edit',
  CREATE_ARTICLE: 'create_article',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath = {
  [AppRoutes.MAIN]: () => '/',
  [AppRoutes.ABOUT]: () => '/about',
  [AppRoutes.PROFILE]: (id?: string) => (id ? `/profile/${id}` : '/profile/:id'),
  [AppRoutes.ARTICLES]: () => '/articles',
  [AppRoutes.ARTICLE_DETAILS]: (id?: string) => (id ? `/article/${id}` : '/article/:id'),
  [AppRoutes.ARTICLE_EDIT]: (id?: string) => (id ? `/article/${id}/edit` : '/article/:id/edit'),
  [AppRoutes.CREATE_ARTICLE]: () => '/article/create',
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
    path: RoutePath.not_found(),
    element: <NotFound />,
  },
];
