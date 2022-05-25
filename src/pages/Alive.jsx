import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';
import alive from 'assets/image/cards/alive.png';

const { title, description } = staticContent.meta.alive;

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

const Alive = () => (
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
          <CardMedia sx={{ mb: '24px' }} src={alive} component="img" />
          <Typography sx={styles.regular}>
            The question is no longer which chain will succeed and render the
            rest of them obsolete. As we have seen with Layer 1 SZN throughout
            2021, there is no “one-size-fits-all” solution. Each chain has its
            own use cases, capabilities, limitations, and offering.
          </Typography>
          <Typography sx={styles.regular}>
            Rather, the question now is very simple - how can we enhance
            cooperation between these chains and integrate them into a
            functional economic system that can rival that of the TradFi world?
          </Typography>
          <Typography sx={styles.regular}>
            It is one of the most pressing problems that is stunting the growth
            of the market, and the adoption of blockchain technology on a global
            scale. The issue affects everything from user experience, to
            innovation, and there is no solution that has been universally
            adopted by the market to date.
          </Typography>
          <Typography sx={styles.regular}>
            However, we do have some solutions that have moved beyond the
            theoretical stage and are functional - Cross-Chain Liquidity Pools.
            Let’s dive in!
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              mb: '32px',
            }}
          >
            &nbsp; Disclaimer: This is not investment nor investment advice.
            Only you are responsible for any capital-related decisions you make
            and only you are accountable for the results.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            TLDR
          </Typography>
          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}Automated Market Makers have already created many
                alternatives to centralised exchanges, such as Binance and
                Kraken.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}The complete decentralisation and automation of
                swapping and moving wealth have already been achieved.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}THORChain has created a functional solution for
                cross-chain swaps, meaning wealth can now be moved across
                chains.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}Scaling the solution and improving user experience
                is the next phase for the liquidity pool model of cross-chain
                communications.
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.title} variant="h3">
            Automated Market Makers
          </Typography>
          <Typography sx={styles.regular}>
            Those who have been in the crypto space for a couple of months will
            no doubt have heard of decentralised exchanges (DEXs) such as
            Uniswap, SushiSwap, PancakeSwap, Raydium - the list is extensive.
            Most ecosystems have some form of DEX as part of their core
            infrastructure. Swapping assets is by far the most common
            transaction that most people will carry out in their day-to-day
            business.
          </Typography>
          <Typography sx={{ ...styles.regular, mb: '32px' }}>
            All these exchanges have a lot in common - they all work using some
            variant of the{' '}
            <Typography sx={styles.boldText} component="span">
              Automated Market Maker
            </Typography>{' '}
            (AMM) model:
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/AMM_LiquidityPool.png"
            component="img"
          />
          <Typography sx={styles.regular}>To summarise:</Typography>
          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}A pool of assets containing two tokens exists. For
                the purposes of this example, Token A and Token B.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}This{' '}
                <Typography sx={styles.boldText} component="span">
                  Liquidity Pool
                </Typography>{' '}
                is funded by{' '}
                <Typography sx={styles.boldText} component="span">
                  Liquidity Providers
                </Typography>{' '}
                who deposit their funds into the pool - half Token A and half
                Token B.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}A user comes along looking to{' '}
                <Typography sx={styles.boldText} component="span">
                  swap
                </Typography>{' '}
                some amount of Token B for an equal value of Token A.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}The user connects their wallet, and a smart
                contract executes the trade - Token B is deposited, allowing
                Token A to be withdrawn.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}For the service that has been provided, the user is
                charged a transaction fee over and above the standard gas fee.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}Liquidity Providers receive this extra fee paid as
                a reward and incentive to keep their assets in the pool.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}The{' '}
                <Typography sx={styles.boldText} component="span">
                  ratio
                </Typography>{' '}
                of the assets in the pool determines the relative value of the
                assets - visualised for a BTC-ETH pool below:
              </ListItemText>
            </ListItem>
          </List>
          <CardMedia
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/LP.png"
            sx={{ mb: '24px' }}
            component="img"
          />
          <Typography sx={styles.regular}>
            Automated Market Makers do not require a centralised entity to
            facilitate the buying and selling of assets. Looking at the chart
            above, hopefully, you can see that{' '}
            <Typography sx={styles.boldText} component="span">
              supply &amp; demand{' '}
            </Typography>
            is still a driving factor behind making a market, however it’s
            completely automated. The Liquidity Providers essentially{' '}
            <Typography sx={styles.italicText} component="span">
              become
            </Typography>{' '}
            the exchange and the whole process remains trustless,
            permissionless, and completely decentralised.
          </Typography>
          <Typography sx={{ ...styles.regular, mb: '32px' }}>
            And these DEXs are excellent at what they do! However, for the most
            part, they only allow users to swap assets that have the same token
            standards. Want to swap some ERC-20 USDC for ETH? Great! SushiSwap
            can facilitate that. Want to swap BNB for ETH? Errr - you’ll have to
            look elsewhere.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Monetary Interoperability
          </Typography>
          <Typography sx={styles.regular}>
            It is impossible to use ETH on the Solana blockchain because the
            token standards are completely different. ETH cannot exist as an
            ERC-20 token{' '}
            <Typography sx={styles.boldText} component="span">
              anywhere
            </Typography>{' '}
            other than the Ethereum blockchain. The same is true for any other
            native asset you can think of - that should be clear at this point.
          </Typography>{' '}
          <Typography sx={{ ...styles.regular, mb: '32px' }}>
            We already have a method for decentralised transactions on a single
            chain using the AMM model outlined above. However, for security, and
            for decentralisation when transacting{' '}
            <Typography sx={styles.italicText} component="span">
              between
            </Typography>{' '}
            chains, there must be another layer to the transaction - an
            intermediary that can communicate with{' '}
            <Typography sx={styles.boldText} component="span">
              both
            </Typography>{' '}
            the initial{' '}
            <Typography sx={styles.boldText} component="span">
              and
            </Typography>{' '}
            destination chains. Recording the transfer of wealth between chains
            is just as critical as recording any transaction on a single chain.
            Luckily, one of the best examples that we currently have for this
            kind of infrastructure is our very own 30x token….
          </Typography>
          <Typography sx={styles.title} variant="h3">
            THORChain
          </Typography>
          <CardMedia
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/thorchain.jpg"
            alt="liquidity"
            sx={{ mb: '24px' }}
            component="img"
          />
          <Typography sx={styles.regular}>
            THORChain is a pseudo-DEX that provides a method for users to swap
            between native assets. Users can swap BTC to ETH, BTC to LTC, BTC to
            BNB, ETH to BNB, LUNA to BTC….{' '}
            <Typography sx={styles.italicText} component="span">
              Any
            </Typography>{' '}
            supported asset can be swapped to{' '}
            <Typography sx={styles.italicText} component="span">
              any OTHER
            </Typography>{' '}
            supported asset. Direct swaps - no bridging, no wrapped assets, etc,
            with the results of any transaction recorded on all relevant chains.
            Complete continuity from chain to chain.
          </Typography>
          <Typography sx={styles.regular}>
            But how is this possible, you ask? I thought you said there was no
            way for transactions to be recorded across chains?
          </Typography>
          <Typography sx={styles.regular}>
            Remember the AMM method that we outlined above, where Liquidity
            Pools are used to facilitate trustless transactions? That’s exactly
            how THORChain works, but with a couple of extra steps:
          </Typography>
          <List>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}THORChain uses a technology called the Bifrost
                (Bridge) protocol, which runs a full node for each of the chains
                that are supported by THORChain. This allows the protocol to
                record deposits and withdrawals into the respective vaults,
                on-chain, for each chain.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}The Bifrost can also communicate with the THORChain
                blockchain, an independent blockchain that essentially acts as a
                “witness” to transactions that occur on the other chains.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}When a user wants to swap from BTC to ETH, several
                things happen:
              </ListItemText>
            </ListItem>
          </List>
          <List
            sx={{
              mb: '32px',
            }}
            component="ol"
          >
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                1. Their BTC is deposited into the Bitcoin Vault, with the
                transaction registered on the Bitcoin network.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                2. The Bifrost confirms that the BTC is in the Bitcoin Vault and
                registers a “witness” transaction on the THORChain network.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                3. Once this transaction has been confirmed, THORChain initiates
                a swap.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                4. ETH of equal value to the BTC that was deposited into the
                Bitcoin Vault is released from the Ethereum Vault, and the
                outbound transaction is registered on the Ethereum blockchain.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                5. The user is credited with the ETH, and the transaction is
                complete.
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.regular}>
            But hold on a minute - if ETH and BTC cannot interact with the same
            Liquidity Pools, how does the protocol know how much ETH to send to
            the user? Well, that’s where RUNE comes in:
          </Typography>
          <CardMedia
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/LPs.png"
            alt="liquidity"
            sx={{ mb: '24px' }}
            component="img"
          />
          <Typography sx={styles.regular}>
            Externally, it appears to the user that they have just swapped BTC
            to ETH in a single transaction. Internally, however, RUNE has acted
            as an intermediary asset:
          </Typography>
          <List sx={{ mb: '32px' }}>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}RUNE is the second asset that must be deposited
                when a Liquidity Provider adds liquidity to one of the pools.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '} The ratio of the RUNE and BTC in the RUNE/BTC
                Liquidity Pool is compared to the ratio of RUNE and ETH in the
                RUNE/ETH Liquidity
              </ListItemText>
              Pool.
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '} Example: There are 10 BTC and 10,000 RUNE in the
                RUNE/BTC pool, implying 1 BTC is worth 1,000 RUNE.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}There are 100 ETH and 10,000 RUNE in the RUNE/ETH
                pool, implying 1 ETH is worth 100 RUNE.{' '}
                <Typography sx={styles.italicText} component="span">
                  This is how the protocol knows how much ETH to send to the
                  user.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '}When a swap occurs, the users 1 BTC is deposited
                into the BTC pool, and 1,000 RUNE is sent from the BTC pool to
                the ETH pool - remember, the pool must always be balanced.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                &#9679;{'  '} Now the RUNE/ETH pool has a surplus of 1000 RUNE -
                how much ETH does it need to move to get back to equilibrium? If
                1 ETH = 100 RUNE, then 10 ETH must be withdrawn from the pool to
                restore the proper ratio.
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.title} variant="h3">
            The Future
          </Typography>
          <Typography sx={styles.regular}>
            The Liquidity Pool model for cross-chain communications is becoming
            increasingly popular as a method of moving wealth around between
            independent chains. Important note: when using a multi-chain DEX
            such as THORChain you are{' '}
            <Typography sx={styles.italicText} component="span">
              not
            </Typography>{' '}
            moving the assets between chains - you are moving{' '}
            <Typography
              sx={{
                ...styles.boldText,
                ...styles.italicText,
              }}
              component="span"
            >
              value.
            </Typography>
          </Typography>
          <Typography sx={styles.regular}>
            The FOREX market(s) allows participants to buy/sell/exchange fiat
            currencies. There are many reasons an individual or entity would
            want to change one currency to another - hedging, speculation, etc.
            The market operates as a global network of computers and brokers
            around the world, and this network handles{' '}
            <strong>TRILLIONS</strong> in volume every single day - ranging
            between $5-6 trillion daily in 2019.
          </Typography>
          <CardMedia
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/FOREX-market.png"
            sx={{ mb: '24px' }}
            component="img"
          />
          <Typography sx={styles.regular}>
            It is the largest and most liquid market on Earth, estimated to be
            worth $2.4 QUADRILLION.
          </Typography>
          <Typography sx={styles.regular}>
            Now, consider everything that has been written above:
          </Typography>
          <List>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText sx={styles.italicText}>
                &#9679;{'  '} Instead of a centralised broker handling trades,
                we have Automated Market Makers.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText sx={styles.italicText}>
                &#9679;{'  '}Instead of fiat, it is crypto that is being
                exchanged.
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.regular}>
            The AMM/liquidity pool model has many parallels with the FOREX
            market. DEX aggregation can take this model to the next level,
            whereby the core infrastructure (such as THORChain) does not need to
            have a pool for every single asset in crypto for users to be able to
            trade them. For example, there’s no pool for UNI in THORChain but
            there’s an ETH/UNI pool on most other DEXs - the swap from BTC to
            UNI would be routed:
          </Typography>
          <List component="ol">
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                1. BTC -&gt; ETH on THORChain (Cross-Chain)
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 16px' }}>
              <ListItemText>
                {' '}
                2. ETH -&gt; UNI on SushiSwap (ERC-20)
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.regular}>
            DEX aggregation turns every individual Liquidity Pool into one big
            global Liquidity Pool, with cross-chain protocols at the centre
            where all orders are routed. Very rarely is there a DEX on any chain
            that does not have a pair that includes the native asset (ETH on
            Ethereum, SOL on Solana, AVAX on Avalanche, etc.) which means that
            potentially any asset on any DEX can be traded using{' '}
            <Typography sx={styles.italicText} component="span">
              any other
            </Typography>{' '}
            asset through the cross-chain liquidity pool model.{' '}
            <Typography
              sx={{
                ...styles.italicText,
                ...styles.boldText,
              }}
              component="span"
            >
              It’s HUGE.
            </Typography>
          </Typography>
          <Typography sx={styles.regular}>
            One issue facing this model is that there is currently only enough
            liquidity to support 6-7 figure transactions at any one time without
            substantial slippage. For most individuals, this is fine. However,
            for the likes of Do Kwon trying to move billions of $ of BTC, there
            is still no good way to do this. The model scales though, with the
            Liquidity Pools essentially acting as one big bank - the
            yield/interest being generated by swap fees.
          </Typography>
          <Typography sx={styles.regular}>
            Centralised exchanges still have a monopoly over the point of access
            for most individuals. However, the growing adoption and acceptance
            of cryptocurrencies have opened a lot of doors for DeFi protocols
            that would have been impossible just a year or two ago. The future
            is bright…{' '}
            <Typography sx={styles.boldText} component="span">
              The future is multi-chain.
            </Typography>
          </Typography>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default Alive;
