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
          The question is no longer which chain will succeed and render the rest
          of them obsolete. As we have seen with Layer 1 SZN throughout 2021,
          there is no “one-size-fits-all” solution. Each chain has its own use
          cases, capabilities, limitations, and offering. Rather, the question
          now is very simple - how can we enhance cooperation between these
          chains and integrate them into a functional economic system that can
          rival that of the TradFi world? It is one of the most pressing
          problems that is stunting the growth of the market, and the adoption
          of blockchain technology on a global scale. The issue affects
          everything from user experience, to innovation, and there is no
          solution that has been universally adopted by the market to date.
          However, we do have some solutions that have moved beyond the
          theoretical stage and are functional - Cross-Chain Liquidity Pools.
          Let’s dive in! &nbsp;
          <em>
            <strong>
              Disclaimer: This is not investment nor investment advice. Only you
              are responsible for any capital-related decisions you make and
              only you are accountable for the results.
            </strong>
          </em>
          &nbsp;
          <h2>TLDR</h2>
          <ul>
            <li>
              Automated Market Makers have already created many alternatives to
              centralised exchanges, such as Binance and Kraken.
            </li>
            <li>
              The complete decentralisation and automation of swapping and
              moving wealth have already been achieved.
            </li>
            <li>
              THORChain has created a functional solution for cross-chain swaps,
              meaning wealth can now be moved across chains.
            </li>
            <li>
              Scaling the solution and improving user experience is the next
              phase for the liquidity pool model of cross-chain communications.
            </li>
          </ul>
          <h2>Automated Market Makers</h2>
          Those who have been in the crypto space for a couple of months will no
          doubt have heard of decentralised exchanges (DEXs) such as Uniswap,
          SushiSwap, PancakeSwap, Raydium - the list is extensive. Most
          ecosystems have some form of DEX as part of their core infrastructure.
          Swapping assets is by far the most common transaction that most people
          will carry out in their day-to-day business. All these exchanges have
          a lot in common - they all work using some variant of the{' '}
          <strong>Automated Market Maker</strong> (AMM) model:
          <img
            className="wp-image-211716 size-full aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/AMM_LiquidityPool.png"
            alt=""
            width="984"
            height="554"
          />
          To summarise:
          <ul>
            <li>
              A pool of assets containing two tokens exists. For the purposes of
              this example, Token A and Token B.
            </li>
            <li>
              This <strong>Liquidity Pool</strong> is funded by{' '}
              <strong>Liquidity Providers</strong> who deposit their funds into
              the pool - half Token A and half Token B.
            </li>
            <li>
              A user comes along looking to <strong>swap</strong> some amount of
              Token B for an equal value of Token A.
            </li>
            <li>
              The user connects their wallet, and a smart contract executes the
              trade - Token B is deposited, allowing Token A to be withdrawn.
            </li>
            <li>
              For the service that has been provided, the user is charged a
              transaction fee over and above the standard gas fee.
            </li>
            <li>
              Liquidity Providers receive this extra fee paid as a reward and
              incentive to keep their assets in the pool.
            </li>
            <li>
              The <strong>ratio</strong> of the assets in the pool determines
              the relative value of the assets - visualised for a BTC-ETH pool
              below:
            </li>
          </ul>
          <img
            className="size-full wp-image-211713 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/LP.png"
            alt=""
            width="872"
            height="668"
          />
          Automated Market Makers do not require a centralised entity to
          facilitate the buying and selling of assets. Looking at the chart
          above, hopefully, you can see that{' '}
          <strong>supply &amp; demand </strong>is still a driving factor behind
          making a market, however it’s completely automated. The Liquidity
          Providers essentially <em>become</em> the exchange and the whole
          process remains trustless, permissionless, and completely
          decentralised. And these DEXs are excellent at what they do! However,
          for the most part, they only allow users to swap assets that have the
          same token standards. Want to swap some ERC-20 USDC for ETH? Great!
          SushiSwap can facilitate that. Want to swap BNB for ETH? Errr - you’ll
          have to look elsewhere.
          <h2>Monetary Interoperability</h2>
          It is impossible to use ETH on the Solana blockchain because the token
          standards are completely different. ETH cannot exist as an ERC-20
          token <strong>anywhere</strong> other than the Ethereum blockchain.
          The same is true for any other native asset you can think of - that
          should be clear at this point. We already have a method for
          decentralised transactions on a single chain using the AMM model
          outlined above. However, for security, and for decentralisation when
          transacting <em>between</em> chains, there must be another layer to
          the transaction - an intermediary that can communicate with{' '}
          <strong>both</strong> the initial{' '}
          <em>
            <strong>and</strong>
          </em>{' '}
          destination chains. Recording the transfer of wealth between chains is
          just as critical as recording any transaction on a single chain.
          Luckily, one of the best examples that we currently have for this kind
          of infrastructure is our very own 30x token….
          <h2>THORChain</h2>
          <img
            className="aligncenter wp-image-211715 size-full"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/thorchain.jpg"
            alt="liquidity"
            width="1522"
            height="769"
          />
          THORChain is a pseudo-DEX that provides a method for users to swap
          between native assets. Users can swap BTC to ETH, BTC to LTC, BTC to
          BNB, ETH to BNB, LUNA to BTC….{' '}
          <em>
            <strong>Any</strong>
          </em>{' '}
          supported asset can be swapped to{' '}
          <em>
            <strong>any OTHER</strong>
          </em>{' '}
          supported asset. Direct swaps - no bridging, no wrapped assets, etc,
          with the results of any transaction recorded on all relevant chains.
          Complete continuity from chain to chain. But how is this possible, you
          ask? I thought you said there was no way for transactions to be
          recorded across chains? Remember the AMM method that we outlined
          above, where Liquidity Pools are used to facilitate trustless
          transactions? That’s exactly how THORChain works, but with a couple of
          extra steps:
          <ul>
            <li>
              THORChain uses a technology called the Bifrost (Bridge) protocol,
              which runs a full node for each of the chains that are supported
              by THORChain. This allows the protocol to record deposits and
              withdrawals into the respective vaults, on-chain, for each chain.
            </li>
            <li>
              The Bifrost can also communicate with the THORChain blockchain, an
              independent blockchain that essentially acts as a “witness” to
              transactions that occur on the other chains.
            </li>
            <li>
              When a user wants to swap from BTC to ETH, several things happen:
            </li>
          </ul>
          <ol>
            <li>
              Their BTC is deposited into the Bitcoin Vault, with the
              transaction registered on the Bitcoin network.
            </li>
            <li>
              The Bifrost confirms that the BTC is in the Bitcoin Vault and
              registers a “witness” transaction on the THORChain network.
            </li>
            <li>
              Once this transaction has been confirmed, THORChain initiates a
              swap.
            </li>
            <li>
              ETH of equal value to the BTC that was deposited into the Bitcoin
              Vault is released from the Ethereum Vault, and the outbound
              transaction is registered on the Ethereum blockchain.
            </li>
            <li>
              The user is credited with the ETH, and the transaction is
              complete.
            </li>
          </ol>
          But hold on a minute - if ETH and BTC cannot interact with the same
          Liquidity Pools, how does the protocol know how much ETH to send to
          the user? Well, that’s where RUNE comes in:
          <img
            className="aligncenter wp-image-211714 size-full"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/LPs.png"
            alt="liquidity"
            width="1024"
            height="316"
          />
          Externally, it appears to the user that they have just swapped BTC to
          ETH in a single transaction. Internally, however, RUNE has acted as an
          intermediary asset:
          <ul>
            <li>
              RUNE is the second asset that must be deposited when a Liquidity
              Provider adds liquidity to one of the pools.
            </li>
            <li>
              The ratio of the RUNE and BTC in the RUNE/BTC Liquidity Pool is
              compared to the ratio of RUNE and ETH in the RUNE/ETH Liquidity
              Pool.
            </li>
            <li>
              Example: There are 10 BTC and 10,000 RUNE in the RUNE/BTC pool,
              implying 1 BTC is worth 1,000 RUNE.
            </li>
            <li>
              There are 100 ETH and 10,000 RUNE in the RUNE/ETH pool, implying 1
              ETH is worth 100 RUNE.{' '}
              <em>
                This is how the protocol knows how much ETH to send to the user.
              </em>
            </li>
            <li>
              When a swap occurs, the users 1 BTC is deposited into the BTC
              pool, and 1,000 RUNE is sent from the BTC pool to the ETH pool -
              remember, the pool must always be balanced.
            </li>
            <li>
              Now the RUNE/ETH pool has a surplus of 1000 RUNE - how much ETH
              does it need to move to get back to equilibrium? If 1 ETH = 100
              RUNE, then 10 ETH must be withdrawn from the pool to restore the
              proper ratio.
            </li>
          </ul>
          <h2>The Future</h2>
          The Liquidity Pool model for cross-chain communications is becoming
          increasingly popular as a method of moving wealth around between
          independent chains. Important note: when using a multi-chain DEX such
          as THORChain you are <em>not</em> moving the assets between chains -
          you are moving{' '}
          <em>
            <strong>value.</strong>
          </em>
          The FOREX market(s) allows participants to buy/sell/exchange fiat
          currencies. There are many reasons an individual or entity would want
          to change one currency to another - hedging, speculation, etc. The
          market operates as a global network of computers and brokers around
          the world, and this network handles <strong>TRILLIONS</strong> in
          volume every single day - ranging between $5-6 trillion daily in 2019.
          <img
            className="size-full wp-image-211719 aligncenter"
            src="https://www.cryptonary.com/wp-content/uploads/2022/04/FOREX-market.png"
            alt=""
            width="992"
            height="538"
          />
          It is the largest and most liquid market on Earth, estimated to be
          worth $2.4 QUADRILLION. Now, consider everything that has been written
          above:
          <ul>
            <li>
              Instead of a centralised broker handling trades, we have Automated
              Market Makers.
            </li>
            <li>Instead of fiat, it is crypto that is being exchanged.</li>
          </ul>
          The AMM/liquidity pool model has many parallels with the FOREX market.
          DEX aggregation can take this model to the next level, whereby the
          core infrastructure (such as THORChain) does not need to have a pool
          for every single asset in crypto for users to be able to trade them.
          For example, there’s no pool for UNI in THORChain but there’s an
          ETH/UNI pool on most other DEXs - the swap from BTC to UNI would be
          routed:
          <ul>
            <li>BTC -&gt; ETH on THORChain (Cross-Chain)</li>
            <li>ETH -&gt; UNI on SushiSwap (ERC-20)</li>
          </ul>
          DEX aggregation turns every individual Liquidity Pool into one big
          global Liquidity Pool, with cross-chain protocols at the centre where
          all orders are routed. Very rarely is there a DEX on any chain that
          does not have a pair that includes the native asset (ETH on Ethereum,
          SOL on Solana, AVAX on Avalanche, etc.) which means that potentially
          any asset on any DEX can be traded using <em>any other</em> asset
          through the cross-chain liquidity pool model.{' '}
          <em>
            <strong>It’s HUGE.</strong>
          </em>
          One issue facing this model is that there is currently only enough
          liquidity to support 6-7 figure transactions at any one time without
          substantial slippage. For most individuals, this is fine. However, for
          the likes of Do Kwon trying to move billions of $ of BTC, there is
          still no good way to do this. The model scales though, with the
          Liquidity Pools essentially acting as one big bank - the
          yield/interest being generated by swap fees. Centralised exchanges
          still have a monopoly over the point of access for most individuals.
          However, the growing adoption and acceptance of cryptocurrencies have
          opened a lot of doors for DeFi protocols that would have been
          impossible just a year or two ago. The future is bright…{' '}
          <strong>The future is multi-chain.</strong>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default Alive;
