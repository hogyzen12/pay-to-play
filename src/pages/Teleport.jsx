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

const { title, description } = staticContent.meta.teleport;

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

const Teleport = () => (
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
          We have outlined the problem in the first part of this series – how to
          move assets and information efficiently and safely between otherwise
          isolated blockchains. In the second part of this series, we will
          outline some of the more bespoke and little-known solutions that are
          currently in development; and often overlooked. You may or may not
          have heard of synths – sounds quite sci-fi. Usually people will think
          of robots, or futuristic androids or something along those lines. But
          what actually are synths? And how can they be used in the context of
          cross-chain communications? Let’s find out!
          <em>
            <strong>
              Disclaimer: This is not investment nor investment advice. Only you
              are responsible for any capital-related decisions you make and
              only you are accountable for the results.
            </strong>
          </em>
          <h2>TLDR</h2>
          <ul>
            <li>
              Synthetic assets are tokenised derivatives of the underlying asset
              they represent.
            </li>
            <li>
              They can represent anything – crypto assets, fiat currencies, oil,
              gold, etc.
            </li>
            <li>
              Synthetix are looking to implement a multi-chain solution using
              synths and oracles.
            </li>
            <li>Synths are minted by depositing some sort of collateral.</li>
            <li>
              This debt can be tracked and confirmed across chains, allowing
              them to be moved easily between chains since the information is
              shared and validated across multiple chains by a decentralised
              oracle.
            </li>
          </ul>
          <h2>Synthetic Assets</h2>A relatively new means of cross-chain comms
          is the use of synthetic assets. First off, a synthetic asset is a
          tokenised representation, or derivative, of whatever asset has been
          minted as a synth. For example, sUSD (synthetic USD) is a derivative
          of USD that is pegged to the price of USD. Unlike other forms of
          pegged assets, like USDT, synths are backed by any asset held in
          reserve and the price of the synthetic asset is determined using
          oracles. The use of oracles to determine the price of a synth
          derivative, rather than having to hold the underlying related asset
          like a spot ETF, allows greater flexibility in terms of what can be
          used as collateral. For example, on the Synthetix network the SNX
          token is used as collateral to mint any synth. But where do
          cross-chain communications come into this?
          <h2>Synthetix Be Improvin’</h2>
          Synthetix Improvement Proposal 165 (SIP-165) was a proposal put
          forward and implemented for the Synthetix network that allows an
          oracle to be used to query the debt ratio and the total amount of
          synths issued on-chain. The key part of the proposal was that it lays
          the groundwork for Synthetix to be able to use a multi-chain oracle
          (Chainlink) to query the debt across <strong>all</strong> chains that
          Synthetix is operating on, not just Ethereum.
          <img
            className="size-full wp-image-212803 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/oracles.png"
            alt=""
            width="1600"
            height="609"
          />
          The benefits of this are that there will never be liquidity issues
          when trying to use this system to move wealth from chain to chain. In
          other solutions, such as bridging, liquidity is held in the sending
          chain and an I.O.U is minted on the receiving chain. We’ll get into
          bridges later in the series, however, think Wrapped BTC on Ethereum as
          an example. However, synths can be burnt on one network and minted on
          another without having to pay off the original debt first -
          essentially “teleporting” synths between chains. To simplify, what
          this means is that going forward Synthetix will know exactly how much
          debt is held on what chain, as well as how many synths have been
          minted on each of those chains. Using this information Synthetix users
          will be able to take a deposit on one chain and mint a synth on any
          other supported chain as well as move those synths around at will –
          achieving cross-chain communications using synthetic assets. What
          Synthetix is doing is a huge step for cross-chain comms, however they
          are still quite early in development. We don’t expect a fully
          implemented solution till the latter half of 2022. The use of oracles
          to provide a price feed for assets that cannot exist on the blockchain
          (fiat currencies, oil, gold, etc) is one of the reasons we invested in
          SNX back in 2020. What we didn’t expect was for them to move into the
          multi-chain sector and so it will be exciting to observe how that
          product develops.
          <h2>THOR.Synths</h2>
          THORChain Synths (THOR.Synths) are derivative assets that are minted
          on the THORChain network. THOR.Synths differ from the Synthetix model
          in that they are backed 50% by the underlying asset, and 50% RUNE.
          This is also where their pricing comes from and so they also depend on
          the ratio of the Liquidity Pools for their price peg.
          <img
            className="size-full wp-image-212801 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/THORChain-synths.png"
            alt=""
            width="1200"
            height="728"
          />
          The Cosmos IBC (Inter-Blockchain Communication) basically allows
          tokens to be transferred between Cosmos chains (think THORChain,
          Osmosis, etc) creating an interconnected network. THORChain is built
          using the Cosmos SDK and so the chain is IBC-enabled. What this means
          is that THOR.Synths can theoretically be used on any other
          IBC-connected chain. The versatility and reach of synthetic assets
          minted on THORChain cannot be understated and they are redeemable at
          any time 1:1 for the underlying asset.
          <h2>What’s in store?</h2>
          Using synthetic assets for cross-chain communications is a fairly
          recent development, although the concept has been around for a while.
          We are just now reaching implementation with Synthetix already
          connecting Ethereum Mainnet and Optimism L2. Although Chainlink is
          being used as the consensus component for cross-chain price oracles
          and debt tracking (which occurs off-chain), the use of synths, in this
          case, is more secure than a lot of bridges since the debt values are
          eventually settled on-chain. Essentially the synth model works because
          of the validity of cross-chain messages, rather than the validity of
          an I.O.U locked on one side of a bridge.
          <img
            className="size-full wp-image-212802 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/ETHwETH.png"
            alt=""
            width="600"
            height="600"
          />
          Take the Wormhole exploit, for example. The exploiter managed to mint
          120,000 wETH (Wrapped ETH), sell some of it, and redeem it for real
          ETH because the bridge couldn’t tell the difference between the newly
          minted wETH and existing wETH. This would be impossible with the
          synthetic asset infrastructure since the exact number of synths
          minted, and the debt held by those who minted the synths is validated.
          Essentially the information must be valid on both chains, <em>and</em>{' '}
          the oracle, before any minting/movement of synths is allowed.
          Regarding THORChain synths, they share basically all the same benefits
          as the Synthetix model. The only downside is that THOR.Synths are
          limited to IBC-capable chains. However, THORChain’s approach uses a
          combination of the{' '}
          <a href="https://www.cryptonary.com/research/30x-alive-and-well/">
            liquidity pool model
          </a>{' '}
          <em>and</em> the synthetic assets model so there is the best of both
          worlds there. We expect THOR.Synths to be composable with IBC-chains
          sometime this year. Over and above using synths in the context of
          cross-chain communications, the implementation of a derivatives market
          that is multi-chain is not too far away. For some more context about
          how important derivatives are, have a read of our DeFi derivatives
          thesis{' '}
          <a href="https://www.cryptonary.com/research/going-to-the-moon-2022/">
            here
          </a>
          . The versatility of synthetic assets is huge – the versatility of
          multi-chain synths is{' '}
          <em>
            <strong>even bigger.</strong>
          </em>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default Teleport;