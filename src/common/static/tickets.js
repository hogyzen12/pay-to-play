import raffle from 'assets/image/raffles/Pawnshop_gnomie_2685.png';
import raffle2 from 'assets/image/raffles/Primate_7267.png';
import raffle3 from 'assets/image/raffles/diamonds_game.png';
import { routes } from 'routes';

import {
  firstRaffleMemo,
  secondRaffleMemo,
  diamondsGameRaffleMemo,
  gnomeRafflePublicKey,
  primateRafflePublicKey,
  diamondsGameRafflePublicKey,
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
    title: 'Pawnshop Gnomie #2685',
    image: raffle,
    redirect: routes.raffle,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'Jun 25, 2022',
    targetTime: '15:00:00',
    raffleMemo: firstRaffleMemo,
    raffleWalletPublicKey: gnomeRafflePublicKey,
    possibleWinners: 1,
  },
  {
    title: 'Primate #7267',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'Jun 25, 2022',
    targetTime: '15:00:00',
    raffleMemo: secondRaffleMemo,
    raffleWalletPublicKey: primateRafflePublicKey,
    possibleWinners: 1,
  },
  {
    title: 'Diamonds Game',
    image: raffle3,
    redirect: routes.raffle,
    transitionDelay: 0.3,
    buttonText: 'Purchase game entry (1 DMND)',
    targetDate: 'Jun 25, 2022',
    targetTime: '15:00:00',
    raffleMemo: diamondsGameRaffleMemo,
    raffleWalletPublicKey: diamondsGameRafflePublicKey,
    possibleWinners: 0,
  },
];
