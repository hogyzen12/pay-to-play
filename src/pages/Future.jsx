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
import future from 'assets/image/cards/future.png';

const { title, description } = staticContent.meta.future;

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
  listItem: { padding: '0 0 0 16px' },
};

const Future = () => (
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
          <CardMedia sx={{ mb: '24px' }} src={future} component="img" />
          <Typography sx={styles.regular}>
            The Babylonian dynasty King Hammurabi is not someone we mention
            often at Cryptonary.
          </Typography>
          <Typography sx={styles.regular}>
            The Ancient Mesopotamia ruler, famous for establishing early written
            laws, could be considered the father of futures contracts, having
            created an ‘agree a future trade date and price’ exchange system.
          </Typography>
          <Typography sx={styles.regular}>
            This basic concept is now coming to the fore in the world of
            cryptocurrency. Futures contracts, especially perpetual futures, are
            now traded more than anything else in the field, capturing 62% of
            the crypto volume in January 2022.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            King Hammurabi would surely be proud.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            TLDR
          </Typography>
          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Futures contracts are agreements to trade an asset
                at an upcoming time, for a specific price.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Perpetual futures (perps) account for the majority
                of crypto trading volume.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Harsh regulations are forcing users to turn to
                DeFi.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}DeFi protocols are set to order take their
                centralised counterparts in terms of user experience and what
                they offer.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Currently, DeFi perps account for under 1% of the
                total crypto derivatives volume. This space is set to explode!
              </ListItemText>
            </ListItem>
          </List>
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              mb: '32px',
            }}
          >
            Disclaimer: Not financial nor investment advice. Any capital-related
            decisions you make is your full responsibility and only you are
            accountable for the results.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            What are futures?
          </Typography>
          <Typography sx={styles.regular}>
            A futures contract is an agreement to buy or sell an underlying
            asset, at a specific point in the future, for a predetermined price.
          </Typography>
          <Typography sx={styles.regular}>It could works like this:</Typography>
          <Typography sx={styles.regular}>
            Eugene and Yazan enter into a futures contract, for 1 ETH. It has a
            settlement date (28th April) and a strike price ($3,000). Eugene is
            the buyer, and Yazan the seller.
          </Typography>
          <Typography sx={styles.regular}>
            Sounds kind of like options, right? There are some key differences:
          </Typography>
          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>&#9679;{'  '}There is no premium.</ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Eugene is{' '}
                <Typography sx={styles.italicText} component="span">
                  obliged
                </Typography>{' '}
                to buy 1 ETH for $3,000 from Yazan on the 28 of April. Yazan is{' '}
                <Typography sx={styles.italicText} component="span">
                  obliged
                </Typography>{' '}
                to sell it to Eugene.
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={styles.title} variant="h3">
            Why is this useful?
          </Typography>
          <Typography sx={styles.regular}>
            Primarily:{' '}
            <Typography sx={styles.italicText} component="span">
              hedging!
            </Typography>{' '}
            Some of the most important aspects of investing in any market are
            protecting your investment and limiting your risk.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            Beyond this, futures allow easy shorting of assets, and in their
            modern format allow users to trade with huge leverage (get rekt).
            More on these later in the report.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Back to the Futures
          </Typography>
          <Typography sx={styles.regular}>
            Futures have been dated back as far as 1750 BC to Ancient
            Mesopotamia, when Babylonian dynasty King Hammurabi created one of
            the first legal codes. It allowed sales of goods and assets to be
            delivered for an agreed price at a future date, requiring contracts
            and witnesses.
          </Typography>
          <Typography sx={styles.regular}>
            Since then, futures have protected farmers and those in similar
            industries from volatile prices, with the Dojima Rice Exchange
            (established 1730 in Japan) being the first recognised futures
            exchange.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            Futures have caught on massively since, and can now be used to trade
            almost any asset, commodity or currency.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Futures in Crypto
          </Typography>
          <Typography sx={styles.regular}>
            TradFi organisations stick to what they are used to: using the
            Chicago Merchantile Exchange (CME) to purchase dated crypto futures.
            For us native crypto folk, there is something else on offer.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            Whilst there are platforms that offer futures with an expiration
            date (settlement date) in crypto, the big dogs in crypto are
            perpetual futures (perps), also known as perpetual swaps. The
            opportunity to leverage and win big with these has drawn in traders
            for years, many of them ending up REKT.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/get-rekt-stewie-1.gif"
            component="img"
          />
          <Typography sx={styles.regular}>
            First seen in crypto in May 2016 on Bitmex, Binance and FTX launched
            perps in September and October 2019 respectively, with dYdX
            launching them in May 2020.
          </Typography>
          <Typography sx={styles.regular}>
            At the time of writing, mid-March 2022, the 24-hour trading volume
            of perps was $153 billion.
          </Typography>
          <Typography sx={styles.regular}>
            The major difference between standard futures contracts and perps is
            that perps don’t expire: they continue perpetually, hence the name.
          </Typography>
          <Typography sx={styles.regular}>
            Because of this, they are priced similarly to the spot asset, as
            your exposure is virtually the same. The reason people use perps
            rather than holding spot positions is simple: leverage (and the
            ability to short). The majority of perp venues offer leverage up to
            100x, meaning you can put down $10, and have exposure to $1,000 of
            the underlying asset.
          </Typography>
          <Typography sx={styles.regular}>
            Whilst this does massively amplify gains, it also does the same for
            losses.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            <Typography sx={styles.italicText} component="span">
              Disclaimer: we as a company do not trade high leverage, especially
              not the kind seen in futures. It is extremely risky, and without
              significant education and experience you will get rekt. If you do
              use leveraged futures, only use what you can afford to lose.
            </Typography>
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Margin and Liquidations
          </Typography>
          <Typography sx={styles.regular}>
            If you’ve only put in $10, but you have exposure to $1,000 of the
            asset, that means that a mere 1% move would wipe you out.
          </Typography>
          <Typography sx={styles.regular}>
            To make futures trading possible, and to ensure exchanges don’t get
            stung if there’s a sudden 5% drop (meaning the money in the account
            wouldn’t cover the loss of the position), they use margins and
            liquidations.
          </Typography>
          <Typography sx={styles.regular}>
            This can get complex, but simply put:
          </Typography>
          <Typography sx={{ ...styles.regular, ...styles.italicText }}>
            Margin: what makes it possible to trade with leverage. The margin is
            the collateral you have in your futures account.
          </Typography>
          <Typography sx={{ ...styles.regular, ...styles.italicText }}>
            Liquidation: if you fall below the minimum margin required, your
            position or positions will be liquidated, meaning you lose
            everything.
          </Typography>
          <Typography sx={styles.regular}>
            Exchanges display your liquidation prices, margin level and
            requirement, among other information on their pages. See the below
            example from Binance:
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Binance-1.png"
            component="img"
          />
          <Typography sx={styles.regular}>
            Due to the level of leverage and volatility of the crypto markets,
            liquidations are far too regular. You may have heard of markets
            dropping due to cascading liquidations. This refers to people
            positions being liquidated, which increases sell pressure, driving
            the price down, resulting in more liquidations… it’s a vicious
            cycle.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            These conditions also make it possible for whales to short or long
            squeeze markets, purposefully driving prices up or down to cause
            liquidations that they can profit from.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Funding Rate
          </Typography>
          <Typography sx={styles.regular}>
            The funding rate is used to keep the perp in line with the
            underlying asset, involving regular payments between buyers and
            sellers (often every 8 hours, although it can vary, with dYdX, FTX
            and Perpetual Protocol conducting payments every hour).
          </Typography>
          <Typography sx={styles.regular}>
            If the price of the perp is greater than the underlying, the funding
            rate is positive, meaning traders who are long (buyers) have to pay
            those who are short. This disincentivises buying and incentivises
            selling, bringing down the price to fall in line with the
            underlying.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Funding-rate.png"
            component="img"
          />
          <Typography sx={styles.regular}>
            If the funding rate is negative, shorts pay longs, incentivising
            buying and disincentivising selling, raising the perp price to fall
            in line with the underlying.
          </Typography>
          <Typography sx={styles.regular}>
            The mechanics behind the funding rate are very complex, and out of
            the scope of this report.
          </Typography>
          <Typography sx={styles.regular}>
            Generally, funding falls between 0.025% and -0.025%. At times of
            extreme volatility this can increase dramatically, having reached
            0.14% on 21st Oct 2021.
          </Typography>
          <Typography sx={styles.regular}>
            It is important to note that the funding rate is charged against
            your notional position, so if you put down $10 using 100x leverage,
            you will be charged a percentage of the $1,000 notional position.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Crypto Loves Futures
          </Typography>
          <Typography sx={styles.regular}>
            If you need evidence of how much crypto loves futures, check out the
            chart below showing the open interest (total of open positions).
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Open-interest.png"
            component="img"
          />
          <Typography sx={styles.regular}>
            THE TOTAL NUMBER OF FUTURES CONTRACTS OPEN AT ANY ONE TIME IS ON THE
            LEFT, ON THE RIGHT IS TOTAL VALUE OF THESE CONTRACTS
          </Typography>
          <Typography sx={styles.regular}>
            Futures, especially perps, are dominant in the crypto markets, with
            a considerable majority of their volume on centralised exchanges.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Volumes.png"
            component="img"
          />
          <Typography sx={styles.regular}>
            DYDX (THE ONLY DEFI FUTURES VENUE MEASURED ON COINGLASS) IS THE
            LIGHT PINK
          </Typography>
          <Typography sx={styles.regular}>
            As covered in our report on{' '}
            <Link
              sx={styles.link}
              href="https://www.cryptonary.com/research/going-to-the-moon-2022/"
              target="_blank"
            >
              <Typography sx={styles.boldText} component="span">
                options
              </Typography>{' '}
            </Link>
            this is seen across derivatives, not just in futures. In fact, it’s
            seen across the entire crypto trading landscape. Crippling gas fees
            and a previous lack of infrastructure, along with how young DeFi is,
            can be blamed.
          </Typography>
          <Typography sx={styles.regular}>
            Things are changing, though. In the last year we have seen the DeFi
            ecosystem explode, and futures have not been left behind. Regulatory
            scrutiny and sweeping bans for retail customers have paid no small
            part in this, with customers in countries including the UK unable to
            trade leveraged perps on most centralised exchanges.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Perp-volume.png"
            component="img"
          />
          <Typography sx={styles.title} variant="h3">
            <Typography sx={styles.boldText} component="span">
              CeFi vs DeFi
            </Typography>
          </Typography>
          <Typography sx={styles.regular}>
            Historically, DeFi and CeFi have had different value propositions
            for users, with DeFi offering full decentralisation and censorship
            resistance (meaning you can’t be banned from using it), and CeFi
            offering free and smoother trading, with a central party to blame
            should anything go wrong.
          </Typography>
          <Typography sx={styles.regular}>
            As DeFi develops, teething problems are being ironed out and
            innovation is happening at breakneck speed; we are seeing the
            negative trade-off turning on its head. Layer 2 solutions like
            StarkWare and Gnosis (formerly known as xDai) are enabling gas-free
            trading. Improved UI/UXs make it just as intuitive to trade on the
            decentralised counterparts. And innovative market-making means
            slippage is a thing of the past (on dYdX), with prices in line with
            centralised exchanges (and the underlying asset).
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            This, combined with regulators forcing our hands, is the perfect
            cocktail for DeFi futures to take off.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            DeFi Futures Protocols
          </Typography>
          <Typography sx={{ ...styles.regular, ...styles.italicText }}>
            Note: these are not necessarily the best protocols to invest in, but
            ones that stood out in research. This doesn’t take into account
            vital information such as tokenomics. If we see an opportunity for
            our investment, we will write a standalone report with further
            information.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              ...styles.italicText,
            }}
          >
            dYdX
          </Typography>
          <Typography sx={styles.regular}>
            Until dYdX came onto the scene, DeFi operated an automatic market
            maker (AMM), and CeFi utilised the orderbook style. This caused
            slippage for DeFi users. For spot DEXs the AMM style is hugely
            beneficial, but for futures it is widely considered sub-optimal.
          </Typography>
          <Typography sx={styles.regular}>
            dYdX changed this, being the first DEX to operate with an orderbook
            style, and has repeatedly overtaken Coinbase in daily trading
            volumes as a result. As the only perp exchange utilising ZK roll-ups
            (viewed by many, including Vitalik, as the future of Ethereum
            scaling), and with a hall-of-fame list of backers including
            Andreessen Horowitz, a16z and Paradigm, you can’t ignore dYdX. The
            protocol is currently sitting head and shoulders above the rest of
            the market. The question is: can it stay there?
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-14-at-11.01.42-PM.png"
            component="img"
          />
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              ...styles.italicText,
            }}
          >
            Perpetual Protocol
          </Typography>
          <Typography sx={styles.regular}>
            By far the largest perpetual futures platform until dYdX’s
            disruption, Perpetual Protocol was treading where no-one had before.
          </Typography>
          <Typography sx={styles.regular}>
            dYdX was able to disrupt the market with superior performance and
            style of market-making (by being more fit for purpose), achieving
            $937m open interest in the last 24 hours (at time of writing: 8th
            March 2022), compared to $2.1m for Perpetual Protocol.
          </Typography>
          <Typography sx={styles.regular}>
            Whilst Perpetual Protocol has suffered from dYdX’s rise, its
            downturn was inevitable given its shortcomings. Despite this it has
            managed to retain stable trading volume, solving many of those
            shortcomings with its latest update, Curie.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-14-at-11.04.10-PM.png"
            component="img"
          />
          <Typography sx={styles.regular}>
            Perpetual Protocol is now focusing on a different path: a
            ‘money-lego’ ethos. To do this it is building on top of other DeFi
            projects (for example, its v2 ‘Curie’ utilises Uniswap v3, with any
            market making strategy provider able to run smart contracts on
            Curie). It is also facilitating ways for future projects to build on
            top of them, such as a grant scheme.
          </Typography>
          <Typography sx={styles.regular}>
            dYdX, meanwhile, is laser-focused on performance without comprising
            decentralisation, trading off collaboration and composability.
            Powered by Starkware’s StarkEx platform, dYdX is an app-specific
            roll-up (all code is customised to the needs of dYdX), meaning it is
            not a platform where multiple DeFi legos can stack up.
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              ...styles.italicText,
            }}
          >
            SynFutures
          </Typography>
          <Typography sx={styles.regular}>
            SynFutures is early in its development. Impressively, it has almost
            caught up with dYdX in user numbers whilst in open-beta, while not
            offering perps yet.
          </Typography>
          <Typography sx={styles.regular}>
            It is planning to bring multi-chain futures trading to the platform
            through a partnership with Celer Network. It is also planning to
            introduce coin-margined futures - using ETH and other assets as
            collateral (similar to Binance), and NFT and hash-rate futures, plus
            two-click community listings. For the latter, anyone can list any
            pair with a single asset in two clicks.
          </Typography>
          <Typography sx={styles.regular}>
            This protocol is new in comparison to dYdX and Perpetual Protocol,
            and it’s impossible to effectively compare them yet. However,
            SynFutures’ impressive backers including Pantera, ByBit, and
            Wintermute, along with its range of unique offerings and impressive
            growth - hitting $3bn trading volume in Jan 2022 - make it one to
            watch.
          </Typography>
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/03/SynFutures.png"
            component="img"
          />
          <Typography
            sx={{
              ...styles.regular,
              ...styles.italicText,
            }}
          >
            Oh, and no token yet!
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              ...styles.boldText,
              ...styles.italicText,
            }}
          >
            01 Exchange
          </Typography>
          <Typography sx={styles.regular}>
            01 Exchange is differentiating itself by making Solana its home and
            offering new products. Its user experience is smooth, while the dApp
            is intuitive and pleasant on the eye. Launched on mainnet in January
            2022, they plan to offer power perpetuals and everlasting options:
            two innovative DeFi native products (crypto school article to
            follow).
          </Typography>
          <Typography
            sx={{
              ...styles.regular,
              mb: '32px',
            }}
          >
            The current outages we are seeing on Solana mean it has some way to
            go before it can realise its full potential in DeFi, but the
            protocols being created on the blockchain are impressive.
          </Typography>
          <Typography sx={styles.title} variant="h3">
            Conclusion
          </Typography>
          <Typography sx={styles.regular}>
            Decentralised perp daily volume typically hovers around $5bn: under
            1% of overall crypto derivatives volume. With regulatory pressures,
            smooth trading experiences and incredible innovation, this is set to
            change.
          </Typography>
          <Typography sx={styles.regular}>
            It takes time for people to learn about and trust any sector. This
            is building in DeFi, and it’s a cycle of positive reinforcement. As
            more people use DeFi it gains more credibility, causing more people
            to learn about and use it.
          </Typography>
          <Typography sx={styles.regular}>
            Its success depends on it offering something new and better. We are
            seeing an explosion in DeFi infrastructure, and the innovation
            happening is incredible. This will continue, with things that were
            previously impossible in the CeFi world routinely being achieved in
            DeFi.
          </Typography>
          <Typography sx={styles.regular}>
            As seen in our last three reports in this series -{' '}
            <Link
              sx={styles.link}
              href="https://www.cryptonary.com/research/going-to-the-moon-2022/"
              target="_blank"
            >
              Is This Sector Going to the Moon in 2022?
            </Link>
            ,{' '}
            <Link
              sx={styles.link}
              href="https://www.cryptonary.com/research/dont-lose-the-option/"
              target="_blank"
            >
              Don’t Lose the Option
            </Link>{' '}
            and{' '}
            <Link
              sx={styles.link}
              href="https://www.cryptonary.com/research/structured-sustainable-yield/"
              target="_blank"
            >
              Structures &amp; Sustainable Yield
            </Link>{' '}
            -{' '}
            <Typography sx={styles.italicText} component="span">
              we are early.
            </Typography>
          </Typography>
          <Typography sx={styles.regular}>
            The infrastructure is being built but the key to this shift, which
            we believe will be especially prevalent in futures trading, is going
            to be this migration from CeFi to DeFi.
          </Typography>
          <Typography sx={{ ...styles.regular, ...styles.italicText }}>
            See you in the future(s).
          </Typography>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default Future;
