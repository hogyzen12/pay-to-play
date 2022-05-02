import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('./pages/Main' /* webpackChunkName: "MainPage" */),
);

export const RafflePage = lazy(() =>
  import('./pages/Raffle' /* webpackChunkName: "RafflePage" */),
);

export const PremiumPage = lazy(() =>
  import('./pages/Premium' /* webpackChunkName: "PremiumPage" */),
);

export const PremiaPage = lazy(() =>
  import('./pages/Premia' /* webpackChunkName: "PremiaPage" */),
);

export const AlphaPage = lazy(() =>
  import('./pages/Alpha' /* webpackChunkName: "AlphaPage" */),
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
  alpha: '/alpha',
  raffle: '/raffle',
  premia: '/premia',
  premium: '/premium',
  discount: '/discount',
  crossword: '/crossword',
  notFound: '*',
};
