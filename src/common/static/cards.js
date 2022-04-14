import game from 'assets/image/game.jpg';
import article from 'assets/image/article.jpg';
import discount from 'assets/image/discount.jpg';

import { routes } from 'routes';

export const cards = [
  {
    title: 'Premium Article',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: article,
    available: true,
    redirect: routes.articles,
  },
  {
    title: 'Diamond Hands NFT Game',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: game,
    available: false,
    redirect: routes.crossword,
  },
  {
    title: 'Win Coindrip Merchandise',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: discount,
    available: true,
    redirect: routes.discount,
  },
];
