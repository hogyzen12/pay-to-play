import { lazy } from 'react';

export const HomePage = lazy(() =>
  import('./pages/Home' /* webpackChunkName: "HomePage" */),
);

export const CrosswordPage = lazy(() =>
  import('./pages/Crossword' /* webpackChunkName: "CrosswordPage" */),
);

export const NotFoundPage = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const routes = {
  home: '/',
  crossword: '/crossword',
  notFound: '*',
};
