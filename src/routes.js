import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('./pages/Main' /* webpackChunkName: "MainPage" */),
);

export const ArticlesPage = lazy(() =>
  import('./pages/Articles' /* webpackChunkName: "ArticlesPage" */),
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

export const ForexPage = lazy(() =>
  import('./pages/articles/Forex' /* webpackChunkName: "ForexPage" */),
);

export const WealthPage = lazy(() =>
  import('./pages/articles/Wealth' /* webpackChunkName: "WealthPage" */),
);

export const XChainPage = lazy(() =>
  import('./pages/articles/XChain' /* webpackChunkName: "XChainPage" */),
);

export const FuturePage = lazy(() =>
  import('./pages/articles/Future' /* webpackChunkName: "FuturePage" */),
);

export const PremiumPage = lazy(() =>
  import('./pages/articles/Premium' /* webpackChunkName: "PremiumPage" */),
);

export const PremiaPage = lazy(() =>
  import('./pages/articles/Premia' /* webpackChunkName: "PremiaPage" */),
);

export const AlphaPage = lazy(() =>
  import('./pages/articles/Alpha' /* webpackChunkName: "AlphaPage" */),
);

export const AlphaTwentyPage = lazy(() =>
  import(
    './pages/articles/AlphaTwenty' /* webpackChunkName: "AlphaTwentyPage" */
  ),
);

export const MultiChainPage = lazy(() =>
  import(
    './pages/articles/MultiChain' /* webpackChunkName: "MultiChainPage" */
  ),
);

export const AlivePage = lazy(() =>
  import('./pages/articles/Alive' /* webpackChunkName: "AlivePage" */),
);

export const TeleportPage = lazy(() =>
  import('./pages/articles/Teleport' /* webpackChunkName: "TeleportPage" */),
);

export const NotFoundPage = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

export const routes = {
  home: '/',
  raffle: 'raffle',
  crossword: 'crossword',
  membership: 'membership',
  merchandise: 'merchandise',
  articles: 'articles',
  forex: 'forex',
  wealth: 'wealth',
  xchain: 'xchain',
  alive: 'alive',
  alpha: 'alpha',
  future: 'future',
  premia: 'premia',
  premium: 'premium',
  teleport: 'teleport',
  universe: 'universe',
  alphaTwenty: 'alpha-twenty',
  notFound: '*',
};

export const articlesRoutes = [
  { path: routes.forex, component: ForexPage },
  { path: routes.wealth, component: WealthPage },
  { path: routes.xchain, component: XChainPage },
  { path: routes.alive, component: AlivePage },
  { path: routes.alpha, component: AlphaPage },
  { path: routes.future, component: FuturePage },
  { path: routes.premia, component: PremiaPage },
  { path: routes.premium, component: PremiumPage },
  { path: routes.teleport, component: TeleportPage },
  { path: routes.universe, component: MultiChainPage },
  { path: routes.alphaTwenty, component: AlphaTwentyPage },
];
