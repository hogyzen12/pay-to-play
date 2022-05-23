import game from 'assets/image/cards/game.jpg';
import alpha from 'assets/image/cards/alpha.png';
import raffle from 'assets/image/cards/raffle.png';
import premia from 'assets/image/cards/premia.jpg';
import premium from 'assets/image/cards/premium.png';
import discount from 'assets/image/cards/discount.jpg';
import universe from 'assets/image/cards/universe.png';
import alive from 'assets/image/cards/alive.png';
import teleport from 'assets/image/cards/teleport.png';

import { routes } from 'routes';

export const cards = [
  {
    title: 'The Multi-Chain Universe & Thesis',
    description:
      'If you are a true DeFi degen, you will likely have lost track of the number of wallets you have used over the past couple...',
    image: universe,
    available: true,
    redirect: routes.universe,
    transitionDelay: 0.1,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: '30X: Alive & Well or...?',
    description:
      'The question is no longer which chain will succeed and render the rest of them obsolete. As we have seen with Layer 1 SZN throughout...',
    image: alive,
    available: true,
    redirect: routes.alive,
    transitionDelay: 0.2,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Simply Teleport your Coins',
    description:
      'We have outlined the problem in the first part of this series - how to move assets and information efficiently and safely between otherwise isolated...',
    image: teleport,
    available: true,
    redirect: routes.teleport,
    transitionDelay: 0.3,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Raffle page',
    description:
      'NFT raffles with entries available ONLY in DMNDS! Will you get lucky ?',
    image: raffle,
    available: true,
    redirect: routes.raffle,
    transitionDelay: 0.4,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
  },
  {
    title: 'Claim CPro membership',
    description: 'Claim CPro membership',
    image: raffle,
    available: true,
    redirect: routes.membership,
    transitionDelay: 0.5,
    payment: {
      sol: false,
      dhmt: false,
      shdw: false,
      free: true,
    },
  },
  {
    title: 'Diamond Hands NFT Game',
    description:
      'Currently under construction - a skill based game that will test your crypto knowledge.',
    image: game,
    available: false,
    redirect: routes.crossword,
    transitionDelay: 0.6,
    payment: {
      sol: false,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Win Coindrip Merchandise',
    description:
      'Being worked on at the moment - you will be able to claim a discount on any CoinDrip Merch!',
    image: discount,
    available: true,
    redirect: routes.discount,
    transitionDelay: 0.7,
    payment: {
      sol: false,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Premium Article',
    description: 'I mean it says in the title - SHOW ME THE MONEY!!',
    image: premium,
    available: true,
    redirect: routes.premium,
    transitionDelay: 0.8,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Premia Deep Dive',
    description:
      'I’m no sorcerer, but after months of deep research, I’m confident I can leave the crystal ball at home, and still give you some grade-A alpha. - Max',
    image: premia,
    available: true,
    redirect: routes.premia,
    transitionDelay: 0.9,
    payment: {
      sol: true,
      dhmt: true,
      shdw: false,
      free: false,
    },
  },
  {
    title: 'Alpha-DAO Proposal #18',
    description:
      "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
    image: alpha,
    available: true,
    redirect: routes.alpha,
    transitionDelay: 1,
    payment: {
      sol: false,
      dhmt: true,
      shdw: true,
      free: false,
    },
  },
];
