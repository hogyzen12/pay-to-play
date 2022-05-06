import raffle from 'assets/image/lionel_trashi.png';
import raffle2 from 'assets/image/count_trashula.png';
import { routes } from 'routes';

export const tickets = [
  {
    title: 'Degen Trash Panda #7934',
    image: raffle,
    redirect: routes.raffle,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 13, 2022',
    targetTime: '15:00:00',
  },
  {
    title: 'Degen Trash Panda #601',
    image: raffle2,
    redirect: routes.raffle,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 13, 2022',
    targetTime: '15:00:00',
  },
];
