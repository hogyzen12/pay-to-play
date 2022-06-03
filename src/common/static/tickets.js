import raffle from 'assets/image/raffles/portals_cc.png';
import raffle2 from 'assets/image/raffles/tombstoned_3463.png';
import raffle3 from 'assets/image/raffles/diamonds_game.png';
import { routes } from 'routes';

import {
  portalsRaffleMemo,
  tombstonedRaffleMemo,
  diamondsGameRaffleMemo,
  testMemo,
  portalsRafflePublicKey,
  tombstonedRafflePublicKey,
  diamondsGameRafflePublicKey,
  testRafflePublicKey,
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
  //{
  //  title: 'New Raffle',
  //  image: raffle3,
  //  redirect: routes.raffle,
  //  transitionDelay: 0.4,
  //  buttonText: 'Purchase game entry (1 DMND)',
  //  targetDate: 'Jun 27, 2022',
  //  targetTime: '15:00:00',
  //  raffleMemo: testMemo,
  //  raffleWalletPublicKey: testRafflePublicKey,
  //  possibleWinners: 1,
  //},
  {
    title: 'Portals WL spots',
    image: raffle,
    redirect: routes.raffle,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'Jun 10, 2022',
    targetTime: '15:00:00',
    raffleMemo: portalsRaffleMemo,
    raffleWalletPublicKey: portalsRafflePublicKey,
    possibleWinners: 20,
  },
  {
    title: 'Tombstoned #2302',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'Jun 10, 2022',
    targetTime: '15:00:00',
    raffleMemo: tombstonedRaffleMemo,
    raffleWalletPublicKey: tombstonedRafflePublicKey,
    possibleWinners: 1,
  },
  {
    title: 'Diamonds Game',
    image: raffle3,
    redirect: routes.raffle,
    transitionDelay: 0.3,
    buttonText: 'Purchase game entry (1 DMND)',
    targetDate: 'Jun 10, 2022',
    targetTime: '15:00:00',
    raffleMemo: diamondsGameRaffleMemo,
    raffleWalletPublicKey: diamondsGameRafflePublicKey,
    possibleWinners: 0,
  },
];
