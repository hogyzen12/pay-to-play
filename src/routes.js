import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('./pages/Main' /* webpackChunkName: "MainPage" */),
);

export const FuturePage = lazy(() =>
  import('./pages/Future' /* webpackChunkName: "FuturePage" */),
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

export const AlphaTwentyPage = lazy(() =>
  import('./pages/AlphaTwenty' /* webpackChunkName: "AlphaTwentyPage" */),
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

export const RafflePage = lazy(() =>
  import('./pages/Raffle' /* webpackChunkName: "RafflePage" */),
);

export const CrosswordPage = lazy(() =>
  import('./pages/Crossword' /* webpackChunkName: "CrosswordPage" */),
);

export const MerchandisePage = lazy(() =>
  import('./pages/Merchandise' /* webpackChunkName: "MerchandisePage" */),
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
  future: '/future',
  premia: '/premia',
  premium: '/premium',
  teleport: '/teleport',
  universe: '/universe',
  crossword: '/crossword',
  membership: '/membership',
  merchandise: '/merchandise',
  alphaTwenty: '/alpha-twenty',
  notFound: '*',
};
