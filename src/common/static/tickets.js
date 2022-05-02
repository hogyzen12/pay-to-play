import raffle from 'assets/image/raffle.png';

import { routes } from 'routes';

export const tickets = [
  {
    title: 'Degen Trash Panda',
    image: raffle,
    redirect: routes.home,
    transitionDelay: 0.1,
    buttonText: 'Purchase raffle entry (1 DMND)',
  },
];
