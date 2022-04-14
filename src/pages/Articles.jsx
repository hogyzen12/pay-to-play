import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CardMedia,
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { staticContent } from 'common/static/content';
import AppContainer from 'common/layout/AppContainer';
import graph from 'assets/image/graph1.png';
import graphSecond from 'assets/image/graph2.png';

const { title, description } = staticContent.meta.atricles;
const styles = {
  title: {
    fontSize: { md: '32px' },
    fontWeight: 600,
    mb: '24px',
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

const Articles = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="md">
        <Typography sx={styles.regular}>
          If you wanted to make money in 2021 you would have bought SOL or LUNA,
          both of which ran up over 100x. What about 2022?
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={graph} />
        <Typography sx={{ mb: '32px' }}>
          Disclaimer: Not financial nor investment advice. Any capital-related
          decisions you make is your full responsibility.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Crypto&apos;s Growth Path
        </Typography>
        <Typography sx={styles.regular}>
          If you haven&apos;t found out what “The Sauce” is in crypto yet then
          start off with this thread first
        </Typography>
        <Typography sx={styles.regular}>The Crypto Sauce</Typography>
        <Typography sx={styles.regular}>
          “Understand how this market is built and you will understand where
          it&apos;s going”
        </Typography>
        <Typography sx={styles.regular}>
          This recipe is the base to all of our research
        </Typography>
        <Typography sx={styles.regular}>A thread</Typography>
        <Typography sx={styles.regular}>
          — Cryptonary (
          <Box sx={styles.italicText} component="span">
            @
          </Box>
          cryptonary){' '}
          <Link
            href="https://twitter.com/cryptonary/status/1492343561127448577?ref_src=twsrc%5Etfw"
            sx={styles.link}
          >
            February 12, 2022
          </Link>
        </Typography>
        <Typography sx={styles.regular}>
          If you prefer delving into the details without a primer via a Tweet
          Thread then read the full research report{' '}
          <Link
            href="https://www.cryptonary.com/research/the-crypto-sauce/"
            sx={styles.link}
          >
            here
          </Link>
          .
        </Typography>
        <Typography sx={{ mb: '32px' }}>
          Now that you&apos;ve read and understood the path crypto is on, then
          you logically see why Layer-1s such as Solana and Terra really boomed
          in 2021. What&apos;s next?
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Sector Hype | 2022
        </Typography>
        <Typography>
          Maybe calling it “hype” is uncalled for because some of these sectors
          are due for outperformance given the natural state of growth of this
          market. In other words, they are the solution to the most prominent
          problems faced today{' '}
          <Box sx={styles.italicText} component="span">
            (not 5 years from now)
          </Box>{' '}
          in crypto.
        </Typography>

        <List component="ol">
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                1. Alternative L1s:
              </Box>{' '}
              This narrative is still ongoing, mainly because the money tap is
              wide open with incentives flooding some of these new ecosystems.
              For example, Near Protocol has $800M lined up in incentives and
              Binance Smart Chain has $1B ready. This is a sector we foresee
              continuing to rise but we don&apos;t think it would be as easy as
              last year, mainly because of this next sector.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                2. Ethereum L2s:
              </Box>{' '}
              Most new chains deal with security/throughput problems along the
              way (
              <Box sx={styles.italicText} component="span">
                think Solana outages
              </Box>
              ), there&apos;s one though that has been consistent: Ethereum. The
              problem is that it is incredibly expensive with some transactions
              costing as much as a fancy dinner in the heart of London. This is
              where Layer-2s come into play with better UX and significantly
              lower fees. With exchanges opening up withdrawals directly to L2s
              such as FTX/Binance with Arbitrum and mobile wallets doing 100x
              improvements with zkSync (try{' '}
              <Link href="https://www.argent.xyz/" sx={styles.link}>
                Argent
              </Link>
              ) we see this becoming a prominent narrative in 2022 onwards. One
              may call it “L222”
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                3. Cross-Chain Communication:
              </Box>{' '}
              Tens of L1s and many new L2s on the rise, it is clear that these
              chains are becoming silos and that&apos;s a major problem -
              perhaps the biggest problem of 2022. These chains will need to
              communicate and aggregate liquidity in some form or manner.
              Whether that is done via an L0, bridge or liquidity pools, a
              solution is needed and it can&apos;t come soon enough.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                4. DeFi Derivatives:
              </Box>{' '}
              Some people like to degen gamble while others like to use complex
              products to hedge/limit their risk and we shouldn&apos;t stop
              them. Derivatives are the most traded products worldwide across
              asset classes (
              <Box sx={styles.italicText} component="span">
                crypto incl
              </Box>
              ) with a particular emphasis on Futures & Options. These products
              are now in DeFi and prime candidates for a narrative, especially
              with regional bans on derivs like we saw in China last year -
              people flock to DeFi.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                5. Infrastructure/Storage Solutions:
              </Box>{' '}
              With NFTs rising in popularity throughout 2021, we saw a problem
              become more prominent: storage - which needs to become
              decentralised.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={styles.boldText} component="span">
                6. Metaverse:
              </Box>{' '}
              This is an area many are trying to compete in to gain market share
              but how the metaverse will end up looking like is yet to be seen.
              Catching early winners here will be rewarding in our opinion and
              gaming is the first step.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          There is a{' '}
          <Box sx={styles.boldText} component="span">
            7th vertical
          </Box>{' '}
          we believe will rise but we won&apos;t be creating a full series about
          it because they are all token-less and the way we are participating is
          by using them for potential airdrops, which is vertical is that?{' '}
          <Box sx={styles.boldText} component="span">
            WALLETS
          </Box>
          .
        </Typography>
        <Typography sx={{ mb: '32px' }}>
          There are quite a few options out there but the ones that stand out to
          us are: MetaMask. Phantom, Argent & XDeFi.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          The Two Pumps
        </Typography>
        <Typography sx={styles.regular}>
          If you&apos;ve paid attention in the “{' '}
          <Link
            href="https://www.cryptonary.com/research/the-crypto-sauce/"
            sx={styles.link}
          >
            Want the Sauce?
          </Link>
          ” report then you&apos;re thinking that some of these are in the
          Application Layer sector so why would they be rising now if
          you&apos;ve said the logical path puts this sector as the very last
          one to pump?
        </Typography>
        <Typography sx={styles.regular}>
          Great question sers (
          <Box sx={styles.italicText} component="span">
            I see the irony in posing the question and answering it myself lol
          </Box>
          ).
        </Typography>
        <Typography>
          The answer is simple, each sector/vertical has TWO PUMPS:
        </Typography>
        <List sx={{ padding: '0', mb: '16px' }}>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Pump: New to the market, hyped and flavour of the day
              which is non- sustained.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Fundamental Pump: This is where the numbers start
              backing the pump.
            </ListItemText>
          </ListItem>
        </List>
        <Typography sx={styles.regular}>
          Let me give you an example, one I am heavily biased towards as you
          know: ETH.
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={graphSecond} />
        <Typography sx={{ mb: '32px' }}>
          When Ethereum launched in 2015 it started pumping all the way until
          2017 and ran up by a massive 150,000%+ simply because it was “new” and
          smart contracts seemed “cool” - basically flavour of the day. At the
          time though, nothing fundamentally backed that pump since there was
          nothing built on top of it except for ERC tokens (no dApps, no TVL).
          Then in 2020, a new pump began but that was after many dApps began
          building and setting up shop on Ethereum, with rising TVL, that was
          the start of ETH&apos;s Fundamental Pump.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          What to expect from CPro?
        </Typography>
        <Typography sx={styles.regular}>
          Over the next 6-months+ you will see a new level of research emerge.
        </Typography>
        <Typography>
          We will be starting with a thesis on the sector as a whole, explaining
          its different components in the simplest manner and finally honing in
          on a few assets we&apos;re personally looking to long as a bet on said
          sector.
        </Typography>
        <Typography sx={{ mb: '32px' }}>
          Of course,{' '}
          <Box sx={styles.boldText} component="span">
            NOT FINANCIAL ADVICE & NOT TO BE REPLICATED
          </Box>
          . This will walk you through our thought process.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Base Assumption
        </Typography>
        <Typography sx={{ mb: '32px' }}>
          Now that we&apos;re coming to the end of this report, I guess it
          seemed like a base assumption throughout everything written is that
          crypto would pump in 2022 - as if it was a given. Well let me clarify
          that it is not a given and the year will heavily depend on what the
          FED decides in March about Quantitative Tightening. If they do go
          ahead with it, markets would dump more which means more pain but also
          more undervaluations for fundamentally-sound assets but also a
          pump-delay. If they don&apos;t, and even better print, then game on
          for 2022. For a full breakdown of the FED situation, read{' '}
          <Link
            href="https://www.cryptonary.com/research/are-we-headed-to-goblin-town/"
            sx={styles.link}
          >
            this
          </Link>
          .
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Will we be sitting on our hands until then?
        </Typography>
        <Typography sx={styles.regular}>
          Cash ready to deploy certainly from March onwards but not sitting on
          our hands.
        </Typography>
        <Typography sx={styles.regular}>
          Until then we will be playing the lowest risk and highest reward game
          in crypto:{' '}
          <Box sx={styles.boldText} component="span">
            AIRDROPS
          </Box>
          . Which? Arbitrum, Optimism, zkSync, MetaMask, Phantom, Opyn, 01
          Exchange, Wormhole and Rainbow Bridge.
        </Typography>
        <Typography>Thank you for reading fellow degens.</Typography>
      </AppContainer>
    </>
  );
};

export default Articles;
