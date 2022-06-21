import forex from 'assets/image/articles/forex.png';
import wealth from 'assets/image/articles/wealth.png';
import xchain from 'assets/image/articles/xchain.png';
import universe from 'assets/image/articles/universe.png';
import alive from 'assets/image/articles/alive.png';
import teleport from 'assets/image/articles/teleport.png';

import future from 'assets/image/articles/future.png';
import premia from 'assets/image/articles/premia.jpg';
import deep from 'assets/image/articles/deep.png';

import dao18 from 'assets/image/articles/dao18.png';
import dao19 from 'assets/image/articles/dao19.png';
import dao20 from 'assets/image/articles/dao20.png';

import premium from 'assets/image/articles/premium.png';
import reset from 'assets/image/articles/reset.png';

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
      latest: false,
    },
    {
      title: 'The Bridge to Crypto Wealth',
      description:
        'We are rapidly approaching the end of the cross-chain communications series. Up till now, we have covered; the thesis, Liquidity Pools...',
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
      latest: false,
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
      latest: false,
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
        'The question is no longer which chain will succeed and render the rest of them obsolete. As we have seen with Layer 1 SZN...',
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
        'We have outlined the problem in the first part of this series - how to move assets and information efficiently...',
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
      title: 'dYdX | Deep Dive',
      description:
        'Intro The crypto market is huge, and constantly growing (not up only, but over time). DeFi use is exploding. The derivatives market is the largest...',
      image: deep,
      available: true,
      redirect: `${routes.articles}/${routes.deep}`,
      transitionDelay: 0.1,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: 'Leaping Into the Future(s)',
      description:
        'The Babylonian dynasty King Hammurabi is not someone we mention often at Cryptonary. The Ancient Mesopotamia ruler...',
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
        'I’m no sorcerer, but after months of deep research, I’m confident I can leave the crystal ball at home, and still...',
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
        'Alpha-DAO is a new Decentralized Autonomous Organization created by seasoned crypto researchers. Disclaimer: This is not investment...',
      image: dao20,
      available: true,
      redirect: `${routes.articles}/${routes.alphaTwenty}`,
      transitionDelay: 0.1,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: false,
    },
    {
      title: 'Alpha-DAO: Proposal #19',
      description:
        'Alpha-DAO is a new Decentralized Autonomous Organization created by seasoned...',
      image: dao19,
      available: true,
      redirect: `${routes.articles}/${routes.alphaNineteen}`,
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
      title: 'Alpha-DAO: Proposal #18',
      description:
        "The Diamond Hands NFT project is backed by Cryptonary's team of leading industry experts...",
      image: dao18,
      available: true,
      redirect: `${routes.articles}/${routes.alpha}`,
      transitionDelay: 0.3,
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
      title: 'Inflation, Fiat, and the Fed',
      description:
        'We have had a lot of questions regarding inflation and monetary policy over the last couple of months...',
      image:
        'https://www.cryptonary.com/wp-content/uploads/2022/06/Without-other-ballons.png',
      available: true,
      redirect: `${routes.articles}/${routes.inflation}`,
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
      title: 'Navigating the Bear Market',
      description:
        'Bear markets are frantic and frightening, but they are a natural part of the market cycle. Bull markets do not last forever...',
      image:
        'https://www.cryptonary.com/wp-content/uploads/2022/06/NavBearMarket-1.jpg',
      available: true,
      redirect: `${routes.articles}/${routes.bearMarket}`,
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
      title: 'The Great Reset',
      description:
        'Everyone is talking about The Great Reset, the only reset happening right now though is your portfolio...',
      image: reset,
      available: true,
      redirect: `${routes.articles}/${routes.reset}`,
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
      title: 'Premium Article',
      description: 'I mean it says in the title - SHOW ME THE MONEY!!',
      image: premium,
      available: true,
      redirect: `${routes.articles}/${routes.premium}`,
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
  categoryE: [
    {
      title: 'Layer-2 Ecosystem Update',
      description:
        'Yes, you heard it correctly! All the Layer-2 Alpha in one simple report. Major activities, outlooks...',
      image:
        'https://www.cryptonary.com/wp-content/uploads/2022/06/Layer-2-Ecosystem-Update.png',
      available: true,
      redirect: `${routes.articles}/${routes.layerTwo}`,
      transitionDelay: 0.1,
      payment: {
        sol: true,
        dhmt: true,
        shdw: false,
        free: false,
      },
      latest: true,
    },
  ],
};
