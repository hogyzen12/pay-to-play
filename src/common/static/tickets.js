import raffle from 'assets/image/raffles/lionel_trashi.png';
import raffle2 from 'assets/image/raffles/count_trashula.png';
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
  {
    title: 'Degen Trash Panda #7934',
    image: raffle,
    redirect: routes.raffle,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 13, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleMemo,
    raffleWalletPublicKey: raffleWalletPublicKey,
  },
  {
    title: 'Degen Trash Panda #601',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 17, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleTwoMemo,
    raffleWalletPublicKey: raffleTwoWalletPublicKey,
  },
  {
    title: 'Degen Trash Panda #601',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.3,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 27, 2022',
    targetTime: '15:00:00',
    raffleMemo: raffleThreeMemo,
    raffleWalletPublicKey: raffleThreeWalletPublicKey,
  },
];
