import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('./pages/Main' /* webpackChunkName: "MainPage" */),
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

export const MultiChainPage = lazy(() =>
  import('./pages/MultiChain' /* webpackChunkName: "MultiChainPage" */),
);

export const AlivePage = lazy(() =>
  import('./pages/Alive' /* webpackChunkName: "AlivePage" */),
);

export const TeleportPage = lazy(() =>
  import('./pages/Teleport' /* webpackChunkName: "TeleportPage" */),
);

export const DiscountPage = lazy(() =>
  import('./pages/Discount' /* webpackChunkName: "DiscountPage" */),
);

export const RafflePage = lazy(() =>
  import('./pages/Raffle' /* webpackChunkName: "RafflePage" */),
);

export const CrosswordPage = lazy(() =>
  import('./pages/Crossword' /* webpackChunkName: "CrosswordPage" */),
);

export const MembershipPage = lazy(() =>
  import('./pages/Membership' /* webpackChunkName: "MembershipPage" */),
);

export const NotFoundPage = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const routes = {
  home: '/',
  alive: '/alive',
  alpha: '/alpha',
  raffle: '/raffle',
  premia: '/premia',
  teleport: '/teleport',
  universe: '/universe',
  premium: '/premium',
  discount: '/discount',
  crossword: '/crossword',
  membership: '/membership',
  notFound: '*',
};
