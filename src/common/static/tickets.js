import raffle from 'assets/image/raffles/geexolotls.gif';
import raffle2 from 'assets/image/raffles/bridged.png';
import raffle3 from 'assets/image/raffles/diamonds_game.png';
import { routes } from 'routes';

import {
  raffleMemo,
  raffleTwoMemo,
  raffleThreeMemo,
  raffleWalletPublicKey,
  raffleTwoWalletPublicKey,
  raffleThreeWalletPublicKey,
} from './constants';

export const tickets = [
  // {
  //   title: 'Degen Trash Panda #7934',
  //   image: raffle,
  //   redirect: routes.raffle,
  //   transitionDelay: 0.1,
  //   buttonText: 'Purchase raffle entry (1 DMND)',
  //   targetDate: 'May 13, 2022',
  //   targetTime: '15:00:00',
  //   raffleMemo: raffleMemo,
  //   raffleWalletPublicKey: raffleWalletPublicKey,
  //   possibleWinners: 0
  // },
  // {
  //   title: 'Degen Trash Panda #601',
  //   image: raffle2,
  //   redirect: routes.raffle,
  //   transitionDelay: 0.2,
  //   buttonText: 'Purchase raffle entry (1 DMND)',
  //   targetDate: 'May 17, 2022',
  //   targetTime: '15:00:00',
  //   raffleMemo: raffleTwoMemo,
  //   raffleWalletPublicKey: raffleTwoWalletPublicKey,
  //   possibleWinners: 0
  // },
  {
    title: 'GEEXOLOTLS WL spots',
    image: raffle,
    redirect: routes.raffle,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 25, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleMemo,
    raffleWalletPublicKey: raffleWalletPublicKey,
    possibleWinners: false,
  },
  {
    title: 'The Bridged #2302',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 27, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleTwoMemo,
    raffleWalletPublicKey: raffleTwoWalletPublicKey,
    possibleWinners: false,
  },
  {
    title: 'Diamonds Game',
    image: raffle3,
    redirect: routes.raffle,
    transitionDelay: 0.3,
    buttonText: 'Purchase game entry (1 DMND)',
    targetDate: 'May 27, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleThreeMemo,
    raffleWalletPublicKey: raffleThreeWalletPublicKey,
    possibleWinners: true,
  },
];
