import game from 'assets/image/game.jpg';
import alpha from 'assets/image/alpha.png';
import premia from 'assets/image/premia.jpg';
import premium from 'assets/image/premium.png';
import discount from 'assets/image/discount.jpg';

import { routes } from 'routes';

export const cards = [
  {
    title: 'Premium Article',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: premium,
    available: true,
    redirect: routes.premium,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
    },
  },
  {
    title: 'Premia Deep Dive',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: premia,
    available: true,
    redirect: routes.premia,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
    },
  },
  {
    title: 'Alpha-DAO Proposal #18',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: alpha,
    available: true,
    redirect: routes.alpha,
    payment: {
      sol: false,
      dhmt: true,
      shdw: true,
    },
  },
  {
    title: 'Diamond Hands NFT Game',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: game,
    available: false,
    redirect: routes.crossword,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
    },
  },
  {
    title: 'Win Coindrip Merchandise',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: discount,
    available: false,
    redirect: routes.discount,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
    },
  },
];
