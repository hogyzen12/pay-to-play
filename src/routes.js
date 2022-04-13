import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('./pages/Home' /* webpackChunkName: "HomePage" */),
);

export const MainPage = lazy(() =>
  import('./pages/Main' /* webpackChunkName: "MainPage" */),
);

export const ArticlesPage = lazy(() =>
  import('./pages/Articles' /* webpackChunkName: "ArticlesPage" */),
);

export const DiscountPage = lazy(() =>
  import('./pages/Discount' /* webpackChunkName: "DiscountPage" */),
);

export const CrosswordPage = lazy(() =>
  import('./pages/Crossword' /* webpackChunkName: "CrosswordPage" */),
);

export const NotFoundPage = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const routes = {
  home: '/',
  articles: '/articles',
  discount: '/discount',
  crossword: '/crossword',
  notFound: '*',
};
