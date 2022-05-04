import raffle from 'assets/image/raffle.png';
import { routes } from 'routes';

export const date = date => new Date(date).getTime() / 1000;

export const tickets = [
  {
    title: 'Degen Trash Panda #7934',
    image: raffle,
    redirect: routes.home,
    transitionDelay: 0.1,
    countdownTo: date('2 Jun 2022 00:00:00 GMT'),
    buttonText: 'Purchase raffle entry (1 DMND)',
  },
  {
    title: 'Degen Test Panda #7171',
    image: raffle,
    redirect: routes.home,
    transitionDelay: 0.2,
    countdownTo: date('2 Jun 2022 00:00:00 GMT'),
    buttonText: 'Purchase raffle entry (1 DMND)',
  },
];
