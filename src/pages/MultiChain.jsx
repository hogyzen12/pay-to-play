import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CardMedia,
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.premium;

const styles = {
  title: {
    fontSize: { xs: '24px', md: '32px' },
    lineHeight: { xs: '24px', md: '32px' },
    fontWeight: 600,
    mb: '32px',
    color: '#fff',
  },
  italicText: {
    fontStyle: 'italic',
  },
  boldText: {
    fontWeight: 600,
  },
  link: {
    color: '#3366BB',
  },
  regular: { mb: '16px' },
};

const MultiChain = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer size="md">
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{ userSelect: 'none' }}
        >
          &nbsp; If you are a true DeFi degen, you will likely have lost track
          of the number of wallets you have used over the past couple of years.
          Moving assets between chains is, quite frankly, a pain in the “donkey”
          - most of us are aware of this.
          <blockquote>
            It is one of the biggest problems facing the DeFi economy right now.
          </blockquote>
          Say for instance we had $1000 worth of USDC in MetaMask on Ethereum.
          There’s an IDO that we would like to participate in, but the project
          is built on Solana. For us to participate in that IDO, we have to find
          a way to move the USDC on Ethereum over to Solana. Can’t immediately
          transfer since they’re too different chains. This presents an issue –
          how can we move our assets between chains to utilise the products (and
          opportunities) that are otherwise not available on the chain we have
          our assets on? Having to move assets between chains is annoying, for
          sure; but is only the immediate issue and generally only affects those
          who are currently using DeFi (which in the grand scheme of things, is
          not a lot). The real issue goes much deeper than simply moving assets
          from one place to another. This series will cover cross-chain
          communications from the ground up - from the problem to the solutions,
          and finally to the projects that we believe have the best chance of
          successfully solving the BIGGEST issue currently facing DeFi.
          <strong>
            Disclaimer: This is not investment nor investment advice. Only you
            are responsible for any capital-related decisions you make and only
            you are accountable for the results.
          </strong>
          <h2>TLDR</h2>
          <ul>
            <li>
              The number of blockchains has grown exponentially in the last 2
              years.
            </li>
            <li>
              Communication between blockchains and their respective ecosystems
              is almost zero.
            </li>
            <li>
              This makes adoption difficult because there is no unified payment
              process across chains, like SWIFT in TradFi, which leads to the
              next issue.
            </li>
            <li>
              Liquidity fragmentation is gradually becoming a major problem –
              tokens, assets, and products, are all unable to use from liquidity
              on other chains.
            </li>
            <li>
              NOTHING is hindering the development of DeFi more, than the lack
              of a cross-chain communications solution.
            </li>
          </ul>
          <h2>Changing Times</h2>
          The narrative of the crypto market a few years ago was basically a
          case of “Which blockchain is the future?” - the idea that one
          blockchain would become the standard and all the others would become
          irrelevant. Some Bitcoin maximalists will still argue the case that
          Bitcoin is the only required network and anything else is a rug-pull,
          scam, or otherwise useless – this argument is becoming increasingly
          hard to defend. In the last couple of years, it has become clear that
          each chain comes with its own pros and cons, and that it is (probably)
          impossible to create a “one-size-fits-all” blockchain whereby every
          conceivable use case can be implemented. We have seen this with the
          rise of chains like Avalanche (AVAX), Solana (SOL), and Terra (LUNA),
          to name a few examples. Each offers something that the others don’t
          (or fundamentally can’t). At this point, it should be clear that{' '}
          <em>the future is Multi-Chain.</em>
          <h2>The Problem</h2>
          The lack of interoperability is mainly because most blockchains are
          unable to communicate with each other in any meaningful way. There are
          a huge number of unique token standards designed for use on specific
          chains. ERC-20 (Ethereum), BEP-20 (BSC), TRC-20 (Tron), SPL (Solana) -
          the list is basically endless. Although these token standards work
          great on the chain they are designed for, they can’t be used on other
          chains. It is impossible for an ERC-20 token to exist on the Solana
          network - that would be like putting gas in a diesel car. For
          blockchain technology to be adopted on a worldwide scale, the entire
          system must function like a well-oiled machine – it must be{' '}
          <em>
            <strong>better</strong>
          </em>{' '}
          than the current financial system. However, the system currently acts
          like a fleet of well-oiled machines that all do roughly the same job,
          but use different spare parts, different fuel, some are wheeled, some
          use tracks, etc.
          <img
            className="size-full wp-image-210488 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/lowqualitymeme.png"
            alt=""
            width="2210"
            height="1268"
          />
          &nbsp; This causes all sorts of problems – how can an economy function
          if at the communications level certain parts are totally isolated?
          Could a credit score and digital ID validated on the Ethereum
          blockchain be used to secure a mortgage from a provider based on
          Solana? The answer to any use of blockchain where each party uses a
          different chain is currently <strong>no</strong> – not without having
          a presence on both chains.
          <h2>Fragmented Liquidity</h2>
          Arguably the single biggest issue facing the crypto market right now
          is the fragmentation of liquidity across various ecosystems. To
          visualise what we’re talking about, we can look at the TVL of all
          chains over the last couple of years:
          <img
            className="size-full wp-image-210489 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/TVLtotal.png"
            alt=""
            width="1444"
            height="521"
          />
          &nbsp; Up until relatively recently, Ethereum was basically the only
          chain with any DeFi activity, as can be seen by the chart on the right
          which shows the dominance of each chain in terms of Total Value Locked
          (TVL) in the entire crypto market as a percentage. Although Ethereum
          still holds the top spot for DeFi, it becomes clear the extent of the
          issue – 45% of the entire DeFi economy is segregated from the other
          chains due to incompatibility with each other. The fragmentation of
          liquidity across the DeFi economy is one of the great inefficiencies
          of the crypto market. Over $200 billion in value is currently locked
          in DeFi protocols across all chains, and we speculate that this number
          grows exponentially over the next decade into the trillions. Having
          large parts of the economy segregated by what assets users can
          interact with and where they can use them in any given scenario is
          completely inefficient. Generally, without outside input, protocols
          rely on the liquidity already present in their respective ecosystem
          for operation – this could become a limiting factor for growth. In an
          ideal, distributed ledger-based future, “outside input” shouldn’t even
          exist.
          <h2>Trade Volumes</h2>
          Even the TVL numbers don’t fully outline the gravity of the liquidity
          problem:
          <img
            className="size-full wp-image-210491 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/DEX-volume.png"
            alt=""
            width="2536"
            height="1020"
          />
          &nbsp; Billions of dollars in trade volume is executed on
          decentralised exchanges (DEXs) across all networks daily. The vast
          majority of this volume is through DEXs built on Ethereum; however,
          more recently we have seen some of these exchanges branch out to other
          blockchains. This is an example of the lengths that protocols are
          having to go to provide services on other chains. At the very basic
          level assets and tokens should be available to anyone who wants them
          without having to jump hurdles. Equally, exchanges and other DeFi
          products shouldn’t have to build new infrastructure to interact with
          users on other chains. What we are seeing is clone products pop up on
          newer chains to fill a gap that has already been filled by another
          protocol on another chain. This is a monumental waste of time and
          resources and doesn’t solve the problem - if anything it makes
          liquidity fragmentation even worse. McDonald’s doesn’t need to build a
          whole new payment network in order to open a restaurant in a country
          that uses a different currency. Crypto wallets, DEXs, lending
          protocols etc. are already difficult enough for newcomers to the
          market to navigate without the additional problem of having to learn
          it all again on another chain. Transacting between ecosystems and
          economies should be as easy as it is in the traditional fiat markets.
          But it isn’t –{' '}
          <em>
            <strong>for now</strong>
          </em>
          .
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default MultiChain;
