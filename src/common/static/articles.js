import alpha from 'assets/image/cards/alpha.png';
import premia from 'assets/image/cards/premia.jpg';
import premium from 'assets/image/cards/premium.png';
import universe from 'assets/image/cards/universe.png';
import alive from 'assets/image/cards/alive.png';
import teleport from 'assets/image/cards/teleport.png';
import dao20 from 'assets/image/cards/dao20.png';
import future from 'assets/image/cards/future.png';
import forex from 'assets/image/cards/forex.png';
import wealth from 'assets/image/cards/wealth.png';
import xchain from 'assets/image/cards/xchain.png';

import { routes } from 'routes';

export const articles = {
  categoryA: [
    {
      title: 'FOREX On-Chain',
      description:
        'The time has come! We’re finally at the end of the cross-chain communications series. We’ve covered the most feasible methods of closing the gaps that...',
      image: forex,
      available: true,
      redirect: `${routes.articles}/${routes.forex}`,
      transitionDelay: 0.1,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: true,
    },
    {
      title: 'The Bridge to Crypto Wealth',
      description:
        'We are rapidly approaching the end of the cross-chain communications series. Up till now, we have covered; the thesis, Liquidity Pools, Synthetic Assets, and Layer...',
      image: wealth,
      available: true,
      redirect: `${routes.articles}/${routes.wealth}`,
      transitionDelay: 0.2,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: true,
    },
    {
      title: 'Sliding into X-Chain DMs',
      description:
        'Up till this point we have covered a few of the cross-chain solutions that allow for the transfer of wealth between chains. However, there is...',
      image: xchain,
      available: true,
      redirect: `${routes.articles}/${routes.xchain}`,
      transitionDelay: 0.3,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: true,
    },
    {
      title: 'The Multi-Chain Universe & Thesis',
      description:
        'If you are a true DeFi degen, you will likely have lost track of the number of wallets you have used over the past couple...',
      image: universe,
      available: true,
      redirect: `${routes.articles}/${routes.universe}`,
      transitionDelay: 0.4,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: '30X: Alive & Well or...?',
      description:
        'The question is no longer which chain will succeed and render the rest of them obsolete. As we have seen with Layer 1 SZN throughout...',
      image: alive,
      available: true,
      redirect: `${routes.articles}/${routes.alive}`,
      transitionDelay: 0.5,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: 'Simply Teleport your Coins',
      description:
        'We have outlined the problem in the first part of this series - how to move assets and information efficiently and safely between otherwise isolated...',
      image: teleport,
      available: true,
      redirect: `${routes.articles}/${routes.teleport}`,
      transitionDelay: 0.6,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
  ],
  categoryB: [
    {
      title: 'Leaping Into the Future(s)',
      description:
        'The Babylonian dynasty King Hammurabi is not someone we mention often at Cryptonary. The Ancient Mesopotamia ruler, famous for establishing early written laws, could be...',
      image: future,
      available: true,
      redirect: `${routes.articles}/${routes.future}`,
      transitionDelay: 0.2,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: 'Premia Deep Dive',
      description:
        'I’m no sorcerer, but after months of deep research, I’m confident I can leave the crystal ball at home, and still give you some grade-A alpha. - Max',
      image: premia,
      available: true,
      redirect: `${routes.articles}/${routes.premia}`,
      transitionDelay: 0.3,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
  ],
  categoryC: [
    {
      title: 'Alpha DAO: Proposal #20',
      description:
        'Alpha-DAO is a new Decentralized Autonomous Organization created by seasoned crypto researchers. Disclaimer: This is not investment nor investment advice. Only you are responsible for...',
      image: dao20,
      available: true,
      redirect: `${routes.articles}/${routes.alphaTwenty}`,
      transitionDelay: 0.3,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: 'Alpha-DAO Proposal #18',
      description:
        "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts and one of the biggest established communities in the crypto space.",
      image: alpha,
      available: true,
      redirect: `${routes.articles}/${routes.alpha}`,
      transitionDelay: 0.4,
      payment: {
        sol: false,
        dhmt: true,
        shdw: true,
        free: false,
      },
      latest: false,
    },
  ],
  categoryD: [
    {
      title: 'Premium Article',
      description: 'I mean it says in the title - SHOW ME THE MONEY!!',
      image: premium,
      available: true,
      redirect: `${routes.articles}/${routes.premium}`,
      transitionDelay: 0.4,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
  ],
};
