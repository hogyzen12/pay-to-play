import game from 'assets/image/cards/dmnd-game.jpg';
import raffle from 'assets/image/cards/dmnd-raffle.jpg';
import discount from 'assets/image/cards/dmnd-discount.jpg';
import cpro from 'assets/image/cards/cpro.png';
import future from 'assets/image/cards/articles_head.png';

import { routes } from 'routes';

export const cards = [
  {
    title: 'Articles',
    description: 'Open Articles list...',
    image: future,
    available: true,
    redirect: routes.articles,
    transitionDelay: 0.1,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
    latest: false,
  },
  {
    title: 'Raffle page',
    description:
      'NFT raffles with entries available ONLY in DMNDS! Will you get lucky ?',
    image: raffle,
    available: true,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
    latest: false,
  },
  {
    title: 'Claim CPro membership',
    description: 'Claim CPro membership',
    image: cpro,
    available: true,
    redirect: routes.membership,
    transitionDelay: 0.3,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
    latest: false,
  },
  {
    title: 'Diamond Hands NFT Game',
    description:
      'A game that will test your crypto knowledge, with prizes for the top 40 players and participation rewards for the first 500 players.',
    image: game,
    available: true,
    redirect: routes.crossword,
    transitionDelay: 0.4,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
    latest: false,
  },
  {
    title: 'Win Coindrip Merchandise',
    description:
      'Being worked on at the moment - you will be able to claim a discount on any CoinDrip Merch!',
    image: discount,
    available: false,
    redirect: routes.merchandise,
    transitionDelay: 0.5,
    payment: {
      sol: false,
      dhmt: true,
      shdw: false,
      free: false,
    },
    latest: false,
  },
];
