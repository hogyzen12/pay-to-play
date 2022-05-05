import raffle from 'assets/image/raffle.png';
import { routes } from 'routes';

export const tickets = [
  {
    title: 'Degen Trash Panda #7934',
    image: raffle,
    redirect: routes.home,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 25, 2022',
    targetTime: '18:00:00',
  },
  {
    title: 'Degen Test Panda #7171',
    image: raffle,
    redirect: routes.home,
    transitionDelay: 0.2,
    buttonText: 'Purchase raffle entry (1 DMND)',
    targetDate: 'May 1, 2022',
    targetTime: '13:00:00',
  },
];
