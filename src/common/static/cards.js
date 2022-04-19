import game from 'assets/image/game.jpg';
import alpha from 'assets/image/alpha.png';
import premia from 'assets/image/premia.jpg';
import premium from 'assets/image/premium.png';
import discount from 'assets/image/discount.jpg';

import { routes } from 'routes';

export const cards = [
  {
    title: 'Premium Article',
    description: 'I mean it says in the title - SHOW ME THE MONEY!!',
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
      'I’m no sorcerer, but after months of deep research, I’m confident I can leave the crystal ball at home, and still give you some grade-A alpha. - Max',
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
      'Currently under construction - a skill based game that will test your crypto knowledge.',
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
      'Being worked on at the moment - you will be able to claim a discount on any CoinDrip Merch!',
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
