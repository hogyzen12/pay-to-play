import React from 'react';
import {
  CardMedia,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { EmbeddedVideo } from 'common/components';
import staticContent from 'common/static/content.json';
import withPresence from 'common/hoc/withPresence';
import deep from 'assets/image/articles/deep.png';

const { title, description } = staticContent.meta.forex;

const Deep = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={deep} component="img" />
    <Typography sx={styles.title} variant="h3">
      Intro
    </Typography>
    <Typography sx={styles.regular}>
      The crypto market is huge, and constantly growing (not up only, but over
      time).
    </Typography>
    <Typography sx={styles.regular}>DeFi use is exploding.</Typography>
    <Typography sx={styles.regular}>
      The derivatives market is the largest financial market in the world.
    </Typography>
    <Typography sx={styles.regular}>
      dYdX captures a bit of each of these incredibly powerful markets.
    </Typography>
    <Typography sx={styles.regular}>
      It intends to become the biggest crypto exchange in the world, centralised
      or decentralised.
    </Typography>
    <Typography sx={styles.regular}>Can it succeed? Let’s find out…</Typography>
    <Typography
      sx={{
        ...styles.regular,
        ...styles.boldText,
        ...styles.italicText,
        mb: '32px',
      }}
    >
      Disclaimer: This is not investment nor investment advice. Only you are
      responsible for any capital-related decisions you make and only you are
      accountable for the results.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      TD:LR
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}dYdX is <em>bigger than Coinbase</em> and growing
          exponentially.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}It has a hall of fame list of investors, boasting the
          likes of Andreessen Horowitz and Paradigm
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}It’s the biggest, most liquid and most advanced DeFi
          derivatives exchange, able to compete directly with the likes of FTX
          and Binance
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The question is, can it overthrow the centralised rulers,
          or is there pain in store?
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      What is dYdX?
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/1DYDX.png"
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      dYdX is a decentralised perpetual futures (perps) exchange, built on{' '}
      <Link
        sx={styles.link}
        href="https://docs.starkware.co/starkex-v4/"
        target="_blank"
      >
        StarkWare’s StarkEx blockchain
      </Link>
      , which offers up to 20x leverage.
    </Typography>
    <Typography sx={styles.regular}>
      If you’re not sure what perps are,{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/leaping-into-the-futures/"
        target="_blank"
      >
        check out our futures article
      </Link>
      . Most are familiar with them as the leveraged positions you take on FTX
      and Binance.
    </Typography>
    <Typography sx={styles.regular}>
      Check out this introduction to dYdX video posted in Feb 2021:
    </Typography>
    <EmbeddedVideo
      videoExpanded
      fullScreen
      videoLink="https://www.youtube.com/embed/PGE1uoiZTmM"
      videoTitle="dYdX"
      customStyles={{ height: '400px', mb: '32px' }}
    />
    <Typography sx={styles.regular}>
      Currently, there are 36 markets live on dYdX, with this number increasing
      rapidly (up from 3 in March 2021). Where there is liquidity and demand,
      more markets will be added.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The protocol is sitting head and shoulders above the rest of the DeFi
      market, and has managed to come into direct competition with the likes of
      Binance and FTX. The question now is, can they continue to grow and take
      market share from the centralised exchanges (CEXs)?
    </Typography>
    <Typography sx={styles.title} variant="h3">
      <Link
        sx={styles.link}
        href="https://antonio-dydx.medium.com/the-history-of-dydx-so-far-68bf46789f86"
        target="_blank"
      >
        History of dYdX
      </Link>
    </Typography>
    <Typography sx={styles.regular}>
      dYdX was the first decentralised exchange to move away from the Automatic
      Market Maker (AMM) model, which suffers from liquidity issues causing high
      slippage for users (meaning higher costs), latency and flash crashes
      (during high volatility).
    </Typography>
    <Typography sx={styles.regular}>
      For spot DEXs, the AMM style is hugely beneficial, but for futures, it is
      widely considered sub-optimal. dYdX instead used an orderbook to make
      their markets (where large parties provide liquidity to the markets). This
      was a game-changer, and a major factor in the exponential growth of dYdX
      (as seen below).
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/2DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      As the only perp exchange utilising ZK roll-ups (viewed by many, including
      Vitalik, as the future), and with a hall-of-fame list of backers, you
      certainly can’t ignore dYdX.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Biggest than Coinbase?!
    </Typography>
    <Typography sx={styles.regular}>
      On September 27th and 28th 2021, dYdX recorded $18.6bn in transactions,
      compared with $5.9bn for Coinbase (according to CoinGecko). Derivatives
      are already larger than spot markets in crypto, and the CeFi to DeFi gap
      is getting ever smaller, especially with DeFi apps like dYdX near
      perfecting the user experience.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      It seems like only a matter of time until we see the DeFi snatch market
      share from CeFi - could this become the flippening that defines the crypto
      markets?
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Team
    </Typography>
    <Typography sx={styles.regular}>
      The dYdX team is outstanding. Largely made up of Princeton graduates, the
      team boasts former employees of Coinbase, Uber, Facebook, Goldman,
      Bridgewater, Google and Bloomberg (and that’s just the senior management).
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/3DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Investors
    </Typography>
    <Typography sx={styles.regular}>
      With a hall-of-fame list of investors, as seen below, dYdX is certainly
      doing something right in the eyes of the big boys.
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/4DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Scalability and Blockchain
    </Typography>
    <Typography sx={styles.regular}>
      dYdX is on{' '}
      <Link
        sx={styles.link}
        href="https://docs.starkware.co/starkex-v4/"
        target="_blank"
      >
        StarkEx
      </Link>
      , an exchange specific layer 2 blockchain by StarkWare.
    </Typography>
    <Typography sx={styles.regular}>
      StarkEx is a Zero-Knowledge Rollup (ZK-Rollup) scaling solution. Rollups
      execute transactions outside of the main Ethereum chain and send the final
      data back to Ethereum once done. For more info check out our Layer 2
      report,{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/layer-cake/"
        target="_blank"
      >
        Layer Cake
      </Link>
      .
    </Typography>
    <Typography sx={styles.regular}>
      The main benefits of using StarkEx is the high throughput, instant
      finality (no risk of trade rollbacks, unlike optimistic roll-ups like
      Arbitrum and Optimism), self-custody, and privacy for your trading
      strategies (StarkEx only publishes delta stats (i.e., changes in balance)
      on-chain, protecting proprietary traders as no one can copy their
      strategies). It benefits from the safety and security of the Ethereum
      mainnet, whilst having extremely low transaction costs.
    </Typography>
    <Typography sx={styles.regular}>
      See why dYdX chose to go with StarkEx, rather than other scaling solutions
      such as Arbitrum or Optimism, in their own words below.
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/5DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Two Sides to Every Story
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/6DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      The one major drawback of StarkEx (and StarkNet, if dYdX migrates over
      once it is live) is that it uses a different programming language called
      Cairo, meaning dYdX can’t directly integrate with other protocols, or take
      advantage of the money-lego’s we see uniquely in DeFi.
    </Typography>
    <Typography sx={styles.regular}>
      This impacts in a few ways, most notably complementary protocols, such as
      automatic hedging protocols, would need to build directly onto StarkEx/Net
      to integrate with dYdX. This is in contrast to other perp providers such
      as GMX, who could integrate with any protocol in the Ethereum Virtual
      Machine (EVM) ecosystem (Ethereum’s programming language, which captures
      most blockchains).
    </Typography>
    <Typography sx={styles.regular}>
      This certainly opens up space for competitors to gain market share when
      innovative protocols and use-cases arise, such as automatic hedging
      engines and structured products.{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/guide-why-is-defi-so-damn-impressive/"
        target="_blank"
      >
        Check out this guide on why we think that could be very powerful…
      </Link>
    </Typography>
    <Typography sx={styles.regular}>
      However, dYdX is laser-focused on providing the best perp trading venue
      and experience across CeFi and DeFi. I expect their target market
      (traders) will not drop as a result of composable (able to integrate)
      protocols. The fact that the competition is already struggling to offer
      anything close to what dYdX offers, combined with dYdX’s continuous
      research and development, gives me confidence that over the medium term
      the lack of composability won’t be detrimental to the protocol.
    </Typography>
    <Typography sx={styles.regular}>
      In fact, this drawback could become a positive, as it narrows their
      offering and allows them to focus on being the best at what they do,
      whilst others may have their focus elsewhere (for example, on
      composability and partnerships/integrations). This could reinforce dYdX’s
      niche and position in the market as the number 1 venue for traders.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      There is potential, once StarkNet is live (likely quite a way in the
      future), for porting apps from EVM chains onto StarkNet. StarkWare is
      working to do just that by building a Solidity to Cairo transpiler, named
      Warp. dYdX could easily transfer from StarkEx to StarkNet once live, and
      benefit from Warp, which could address long term concerns by allowing
      protocols to integrate with dYdX.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Trading on dYdX
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/7DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      <Link
        sx={styles.link}
        href="https://metabase.dydx.exchange/public/dashboard/5fa0ea31-27f7-4cd2-8bb0-bc24473ccaa3"
        target="_blank"
      >
        For a massive range of analytics and metrics on dYdX check out this
        dashboard.
      </Link>
    </Typography>
    <Typography sx={styles.regular}>
      Rather than going into depth on the trading experience and offering of
      dYdX, I’m going to outline the key characteristics.
    </Typography>
    <Typography sx={styles.regular}>
      If you want to give it a go without risking your hard-earned money, check
      out their{' '}
      <Link
        sx={styles.link}
        href="https://trade.stage.dydx.exchange/portfolio/overview"
        target="_blank"
      >
        testnet
      </Link>{' '}
      (although note this may not be operating the latest version).
    </Typography>
    <Typography sx={styles.regular}>
      dYdX has 36 assets available and very liquid markets, add to this the on
      par, even arguable better trading experience than the centralised
      counterparts, as well as a mobile app, order types including limit and
      take profit (and more), no gas fees for trading, pricing based off major
      exchanges (meaning pricing parity with CEXs), and great trading rewards
      and competitions, and you have a recipe for success.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      This has been reflected in dYdX’s performance, with it regularly achieving
      over $1bn daily volume, spiking as high as $15.4bn on Feb 15th 2022.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Trading Rewards
    </Typography>
    <Typography sx={styles.regular}>
      Trading rewards are a big driver of volume for dYdX at the moment, with
      25% of the token supply dedicated to them. This opens an avenue for
      exploitation, as we see regularly in crypto, reward structures can be
      gamed. There is potential for market makers to provide liquidity to the
      dYdX orderbook, then trade against their own liquidity whilst
      simultaneously hedging their risk, allowing them to take advantage of the
      DYDX trading rewards up for grabs. The spikes seen in the chart in the
      reward window backs up this theory, or at least demonstrates that the
      rewards are causing unnatural spikes in volume on the platform.
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/11DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      <Link
        sx={styles.link}
        href="https://help.dydx.exchange/en/articles/5917874-trading-leagues"
        target="_blank"
      >
        Trading Leagues
      </Link>
    </Typography>
    <iframe
      title="dYdX"
      src="https://twitter.com/dYdX/status/1485630433505251340"
    ></iframe>
    <Typography sx={styles.regular}>
      An initiative designed to attract new users, and keep current users
      trading, the leagues gamify trading on the platform with some huge prizes
      up for grabs. Announced in January, the leagues are an innovative
      competition that works in a similar structure to football leagues, where
      traders can be relegated or promoted through the leagues. The higher the
      league, the higher the prizes.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/8DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      They run in weekly ‘seasons’, incentivising traders to continue trading
      every week, especially if they are in a high league (so they don’t get
      relegated and miss out on prizes).
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Funding Rate, Margin and Leverage
    </Typography>
    <Typography sx={styles.regular}>
      For information on the funding rate, margin and liquidation check out our{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/guide-funding-rate-margin-and-liquidations-in-perps/"
        target="_blank"
      >
        crypto school article
      </Link>{' '}
      which covers all three. For the purpose of this article, I’m going to
      assume you either know what they are, or have read the{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/guide-funding-rate-margin-and-liquidations-in-perps/"
        target="_blank"
      >
        article
      </Link>
      .
    </Typography>
    <Typography sx={styles.regular}>
      dYdX’s takes funding payments every hour, and requires a minimum of 4%
      margin collateral (for BTC and ETH, which have higher maximum leverage
      than other assets, which have an 8% minimum).
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/9DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Collateral
    </Typography>
    <Typography sx={styles.regular}>
      Collateral for the platform is USDC, and is cross-margined, meaning you
      use the same USDC collateral for any position on any asset across the
      platform.
    </Typography>
    <Typography sx={styles.regular}>
      This is in contrast to when the protocol first launched, where you had to
      hold the native asset for each position as collateral (e.g., if you had
      SOL, ETH and BTC longed, you would have to hold each asset in your dYdX
      account as margin).
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      This was clearly sub-par to CEXs and had to change. The move from layer-1
      Ethereum onto layer-2 StarkEx is what allowed this change, facilitating
      much better liquidity and many more markets (there was only 3 using the
      old system).
    </Typography>
    <Typography sx={styles.title} variant="h3">
      <Link
        sx={styles.link}
        href="https://dydx.exchange/blog/dydx-on-ios"
        target="_blank"
      >
        Mobile App
      </Link>
    </Typography>
    <Typography sx={styles.regular}>
      One key competitive advantage dYdX has is their new mobile app, which was
      released to the public on 10th May 2022, check out the announcement and
      video below to see how it works.
    </Typography>
    <iframe
      title="dYdX"
      src="https://twitter.com/dYdX/status/1524053110582243328"
    ></iframe>
    <iframe title="dYdX" src="https://youtu.be/7BOA6cZdzHU"></iframe>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      dYdX is one of the first DeFi protocols to launch a mobile app, and by far
      the largest. A vital tool, it differentiates them from their competitors
      within DeFi, and further brings them into direct competition with the top
      CEXs.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      <Link
        sx={styles.link}
        href="https://dydx.foundation/blog/introducing-dydx-token"
        target="_blank"
      >
        dYdX Airdrop
      </Link>
    </Typography>
    <EmbeddedVideo
      videoExpanded
      fullScreen
      videoLink="https://www.youtube.com/embed/ShddM8IiiG0"
      videoTitle="dYdX Airdrop"
      customStyles={{ height: '400px', mb: '32px' }}
    />
    <Typography sx={styles.regular}>
      dYdX airdropped tokens to early users of the protocol, with the snapshot
      ending at 0:00 UTC on 26th July 2021. A massive 75,000,000 DYDX tokens
      were distributed to around 64,000 users. This was distributed according to
      a tiered system, which you can see below.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/10DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      Note, the airdrop was not distributed to US users or residents.
    </Typography>
    <Typography sx={styles.regular}>
      The airdrop proved a massive success, with dYdX activity relative to
      centralised exchanges rising from a few basis points to single digits
      immediately after the airdrop. You can see the rapid growth after the
      airdrop release on 7th September 2021 in the chart below.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/11DYDX.png"
      alt=""
      component="img"
    />
    <Link
      sx={{ ...styles.link, mb: '32px' }}
      href="https://www.coindesk.com/business/2021/09/08/users-celebrate-massive-dydx-token-airdrop-as-transfer-restrictions-lift/"
      target="_blank"
    >
      Some lucky traders received over $50,000 in DYDX!
    </Link>
    <Typography sx={styles.title} variant="h3">
      Distribution and Tokenomics
    </Typography>
    <Typography sx={styles.regular}>
      The DYDX token airdrop amounted to around 7.5% of the total supply, so
      what is happening with the rest? See the distribution of tokens (when
      fully unlocked) below.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      There is the option for governance to vote in an up to 2% annual inflation
      rate after the supply of 1,000,000 is reached in August 2026. Whether this
      is done, and what it will be used for, is in the hands of DYDX holders.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/13DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      The circulating supply sits at around 100m (23/05/22), or 10% of the total
      supply. Each month, 3,835,616 DYDX, or around 3.8% of the current
      circulating supply, is distributed as trading rewards. This is alongside
      1,150,685 DYDX, or around 1.1% of circulating supply, which acts as
      liquidity provider returns.
    </Typography>
    <Typography sx={styles.regular}>
      Investor tokens begin unlocking in Feb 2023, with 30% unlocked at that
      time, 40% unlocked evenly between March and August 2023, 20% evenly
      between September 2023 and August 2024, and the remaining 10% between Sept
      2024 and Sept 2025.
    </Typography>
    <Typography sx={styles.regular}>
      The result of the above distributions can be seen on the graph below,
      showing when DYDX tokens will unlock starting from September 2021.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/14DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      This is a scary chart, especially around Feb 2023, when we see the
      circulating supply almost double overnight (with a 15% of total supply
      unlock for team and investors). However, when looking at projects with
      steep inflation, we must consider the fully diluted value.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Market Cap and Fully Diluted Value (FDV)
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/15DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      At the time of writing (23/05/22) dYdX has a market cap of $223m and an
      FDV of $2.2bn.
    </Typography>
    <Typography sx={styles.regular}>
      It has $960m total value locked, with annualised revenue of over $320m.
    </Typography>
    <Typography sx={styles.regular}>
      Consider this. Decentralisation is supposedly coming by the end of this
      year. With that, the ability for token holders to vote for revenue
      sharing. Should this happen, and 80% of revenues are then distributed to
      token holders (this is a high percentage, it may well be less due to
      operating costs, however as an example I’m using 80%), that would be $256m
      going to token holders. More than the entire current market cap of the
      protocol!
    </Typography>
    <Typography sx={styles.regular}>
      To put this into perspective, dYdX can be viewed as a relatively similar
      style investment as Tesla (high growth, huge potential, long way to go
      before full vision is realised but making good progress). dYdX is
      currently trading at 0.87x price to earnings (the yearly revenue vs market
      cap, also known as the PE ratio). Tesla is trading at over 80x PE!
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      Note, there are many differences, Tesla was chosen as it is an extreme
      example of a high price to earnings (PE) stock (there are others, with
      Twitter over 140x PE and Amazon 55x PE). Tesla faces very different
      circumstances to dYdX, so this should not be taken to represent dYdX’s
      potential valuation in anyway, it is only to demonstrate that it is
      currently trading at a low PE ratio.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      On the other side of the scale you have Coinbase, which is currently
      trading at only 7.7 PE, likely due to the bearish sentiment on crypto
      amongst traditional investors at the moment.
    </Typography>
    <Typography sx={styles.regular}>
      Even at its fully diluted value, dYdX is only trading at 10x price to
      earnings. dYdX has huge growth potential, due to the migration from CeFi
      to DeFi, the incredibly refined user experience, and the growth of the
      crypto market as a whole. Add to this their massive first mover advantage
      and network effects, and you see that a comparison to Coinbase doesn’t do
      it justice (and many consider Coinbase to be undervalued at the moment,
      with{' '}
      <Link
        sx={styles.link}
        href="https://fortune.com/2022/05/12/cathie-wood-ark-invest-buys-coinbase-shares-after-crash/"
        target="_blank"
      >
        Ark Invest buying $30m in COIN shares recently
      </Link>
      ).
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      In short, whilst the inflation rate may have short term price impacts, as
      early investors book profits after getting involved at a $10m valuation
      and over 200x’ing their initial investment (at current prices), in the
      longer term, it is of little concern as long as dYdX continues to perform.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      V4 &amp; Full Decentralisation
    </Typography>
    <Typography sx={styles.regular}>
      At the moment dYdX functions as a hybrid exchange, with the bulk
      decentralised, but some components remaining centralised. V3 (the current
      version) handles trade settlement and liquidations with a centralised
      orderbook and matching engine. All fees collected go to the centralised
      entity as profits.
    </Typography>
    <Typography sx={styles.regular}>
      Initially, dYdX had no intentions of fully decentralising. They didn’t
      believe it was possible with the current technology and were concerned it
      would compromise their offering.
    </Typography>
    <Typography sx={styles.regular}>
      Happily, that doesn’t seem to be the case. dYdX intends to be fully
      decentralised by the end of 2022!
    </Typography>
    <iframe
      title="dYdX"
      src="https://twitter.com/dYdX/status/1516477847791095808?ref_src=twsrctfw%7Ctwcamptweetembed%7Ctwterm1516477847791095808%7Ctwgr%7Ctwcons1_&amp;ref_url=https%3A%2F%2Fcointelegraph.com%2Fnews%2Fderivatives-exchange-dydx-to-become-100-decentralized-by-eoy"
    ></iframe>
    <Typography sx={styles.regular}>
      With release of V4, expected by the end of 2022, the V3 API will stop
      being used, and instead, a fully decentralised perpetual contracts market
      API will ship, seeing a fully decentralised dYdX born.
    </Typography>
    <Typography sx={styles.regular}>
      This will be where dYdX can move from being on par with centralised
      exchanges to better.
    </Typography>
    <Typography sx={styles.regular}>Why, you ask?</Typography>
    <Typography sx={styles.regular}>
      Simple: revenue sharing, censorship resistance, and community ownership
      &amp; decision making.
    </Typography>
    <Typography sx={styles.regular}>
      This is something no centralised exchange could ever effectively
      implement, and to be honest, they wouldn’t want to. Why would they, when
      they can just keep the money and decision making.
    </Typography>
    <Typography sx={styles.regular}>
      As the protocol will be community-governed, the community could easily put
      forward a proposal to share revenue with token holders. Remember that
      example in the ‘market cap &amp; fully diluted value section’ above…
    </Typography>
    <Typography sx={styles.regular}>
      The potential of revenue sharing means dYdX holders will essentially own
      shares in the ‘company’, and these shares could give them a pro-rata
      proportion of the revenue.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The censorship resistance means there is no culprit for regulators to be
      hostile towards. Once fully decentralised, the DYDX holders are
      responsible for ensuring that governance decisions are made in compliance
      with applicable laws and regulations. What this means, is that if a
      government suddenly decides to ban dYdX (which is always a possibility due
      to its nature as a derivatives exchange) they will have a very difficult
      time enforcing that, as there will be no person or body to hold
      accountable.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Market Makers
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      This does create a potential issue though, with the US being so tough on
      crypto, many market makers may decide (or be forced) to stop providing
      services to dYdX. This wouldn’t be an end-game situation, with many
      international and crypto native market makers likely to continue providing
      a service on dYdX, but it is something to keep an eye on as it develops,
      and react quickly to if issues arise.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Governance
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/16DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      dYdX governance is already live, and has been that way since the DYDX
      token launched (the reason revenue sharing cannot be unlocked until full
      decentralisation is a legal issue). Governance is based on the AAVE
      governance contracts and supports voting based on token holdings.
    </Typography>
    <Typography sx={styles.regular}>
      The governance process begins at the{' '}
      <Link
        sx={styles.link}
        href="https://forums.dydx.community/"
        target="_blank"
      >
        Community forum
      </Link>{' '}
      and is brought to life through dYdX Improvement Proposals (DIPs, similar
      to Ethereum’s EIPs). Click on the community forum link above to check out
      all the governance discussions currently taking place.
    </Typography>
    <Link
      sx={{ ...styles.link, mb: '32px' }}
      href="https://dydx.community/dashboard"
      target="_blank"
    >
      Check out their community dashboard here.
    </Link>
    <Typography sx={styles.title} variant="h3">
      Grants
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/17DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      In January 2022 Reverie, a consultancy for DAOs,{' '}
      <Link
        sx={styles.link}
        href="https://dydx.community/dashboard/proposal/5"
        target="_blank"
      >
        proposed running a grants program
      </Link>{' '}
      to aid dYdX’s growth by funding community projects. This passed with
      unanimous support, and 752k DYDX was moved from the Community Treasury to
      the grants multisig wallet.
    </Typography>
    <Typography sx={styles.regular}>
      The program has seen a massive increase in the number of active
      contributors working on development, marketing, education, and more. This
      really demonstrates the use case of decentralisation, allowing involvement
      from any outside party to further the project. Contributors are
      compensated for their efforts whilst improving a protocol they are likely
      invested in, what more could you want?
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Check out their{' '}
      <Link
        sx={styles.link}
        href="https://dydxgrants.com/grants-v1-retroactive"
        target="_blank"
      >
        Retroactive Look at Grants V1
      </Link>
      for an overview of the mission, what they’ve funded and achieved, and
      where the program hopes to go next.{' '}
      <Link
        sx={styles.link}
        href="https://dydxgrants.com/list-of-grants"
        target="_blank"
      >
        See here for a full list of grants approved.
      </Link>{' '}
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Considerations and Drawbacks
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/18DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Depositing Funds to dYdX
    </Typography>
    <Typography sx={styles.regular}>
      As dYdX operates on StarkEx, an independent blockchain, it requires
      bridging over funds to use the protocol. This can result in high gas fees,
      which prohibits small retail traders.
    </Typography>
    <Typography sx={styles.regular}>
      dYdX, in an attempt to remove this barrier to entry, offer gas-free
      deposits. To be gas-free, you must deposit a minimum amount. dYdX’s
      article and rules conflict on how much this must be, but it is at a very
      minimum{' '}
      <Link
        sx={styles.link}
        href="https://dydx.exchange/gasless-deposit-rules"
        target="_blank"
      >
        $500 for new users, and $1,000 for existing
      </Link>
      .{' '}
      <Link
        sx={styles.link}
        href="https://dydx.exchange/blog/gasless-deposits"
        target="_blank"
      >
        This article states it’s double that.
      </Link>
    </Typography>
    <Typography sx={styles.regular}>
      This will definitely help attract users who are concerned about gas fees,
      especially when gas is very high, but there are some issues. Firstly, it
      is a promotion and will end at some point. Secondly, the minimum deposit
      is prohibitively high for many users.
    </Typography>
    <Typography sx={styles.regular}>
      There is an answer to this, in the form of Orbiter Finance, as seen in the
      Tweet below. Orbiter allows deposits from Arbitrum, zkSync, Polygon,
      Optimism and more (with considerably lower gas fees!).
    </Typography>
    <iframe
      title="dYdX"
      src="https://twitter.com/dYdX/status/1526217744835813377.html"
    ></iframe>
    <Typography sx={styles.regular}>
      I’ve tested Orbiter, and for anyone familiar with DeFi, it’s intuitive and
      simple to use, and a great tool for depositing to dYdX with low fees (as
      the deposit only costs around $2 and is near instant).
    </Typography>
    <Typography sx={styles.regular}>
      The issue of no direct banking link though, is, in my opinion, the largest
      barrier dYdX faces in becoming larger than centralised exchanges; and it
      is a big one.
    </Typography>
    <Typography sx={styles.regular}>
      I don’t believe it’s an issue when comparing to other DEXs such as GMX or
      Perpetual Protocol, as none have direct banking links. If a user has a
      DeFi wallet set up and wants to trade, the gas-free trading and
      considerably better experience on dYdX is a massive selling point, even
      with having to move their funds across blockchains.
    </Typography>
    <Typography sx={styles.regular}>
      However, for users new to crypto, the fact they can’t deposit directly
      from their bank account into dYdX is a major drawback. For experienced
      traders, the fact that they can’t withdraw their gains directly from dYdX
      is a pain point which would require them using a CEX anyway to bridge the
      gap. The question then is, why not just use the CEX in the first place?
    </Typography>
    <Typography sx={styles.regular}>
      Now, there are some key reasons discussed above, but you can see how this
      causes a sticking point in dYdX’s growth. In my opinion, once this barrier
      is addressed, the sky is the limit.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      As DeFi matures, is trusted, and integrates with existing financial
      systems, I expect we will see dYdX partner with a company to offer direct
      deposits and withdrawals. Clearly, though, we have some way to go before
      that happens.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      DYDX’s Invest-ability - A Side Note
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/markus-spiske-VO5w2Ida70s-unsplash-1024x683.jpg"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      The fact that full decentralisation is expected by the end of the year
      appears to be conveniently timed with the supply almost doubling overnight
      in Feb 2023. This is likely intentional, as dYdX are aware of the
      potential impact of such a large unlock on consumer confidence and token
      price. Whilst it is not malicious or an attempt to pump DYDX prior to the
      unlock in my opinion, it is something for us to keep in mind, as if the
      timeline slips, that could have massive impacts on the token price in the
      short term.
    </Typography>
    <Typography sx={styles.regular}>
      With the bearish sentiment in the market currently not expected to finish
      anytime soon, it is worth waiting for a change in market structure before
      considering investing in DYDX, unless you are averaging in over the long
      term. This is because if full decentralisation is pushed back, bear market
      is ongoing and unlock happens, the price could suffer in the short term.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      We will do an update report on dYdX after decentralisation takes place.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Conclusion
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/19DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      dYdX is growing at an astronomical rate (looking back over the last 18
      months). There is still a long way to go before it reaches it’s goal of
      being the ‘largest crypto exchange in the world’, but it’s certainly
      making strides in the right direction.
    </Typography>
    <Typography sx={styles.regular}>
      The laser focus on providing the best venue for traders is what
      differentiates them, which leads me to believe the lack of composability
      and ability to use money-lego’s, integrating directly with other
      protocols, will not cause any issues. All it will do is open up the market
      for other players, with more focus on composability, to carve out their
      own niche.
    </Typography>
    <Typography sx={styles.regular}>
      The issue of no direct banking links is certainly one to consider, but it
      isn’t a sticking point. At the moment, that is the standard across DeFi.
      If, like me, you believe the potential of DeFi is too great to ignore, and
      in the future the traditional world (including regulators and banks) will
      be forced to adapt or be left behind, then you believe this problem will
      resolve itself in time. For now, until we go mainstream, getting into DeFi
      will always have an element of difficulty.
    </Typography>
    <Typography sx={styles.regular}>
      Another point of contention is the gaming of trading rewards, and
      potential issues around regulation for market makers when dYdX is fully
      decentralised. It is vital that we continuously evaluate the market makers
      and liquidity on the exchange, although there have been no signs of it
      weakening. With the revenue they are able to generate, they clearly have
      the means to incentivise market makers onto the platform. Whether this
      will impact the percentage that could be used for revenue sharing with
      token holders remains to be seen, as well as what that revenue sharing
      model could look like.
    </Typography>
    <Typography sx={styles.regular}>
      No DeFi perp exchange has ever reached the revenue and valuation of dYdX,
      let alone fully decentralised at that level. However, if they succeed,
      they will have a clear competitive field, with no other company or
      protocol offering what they do. The importance of their move to full
      decentralisation for crypto as a whole shouldn’t be understated. If it is
      successful, it provides a clear case study on centralised entities going
      fully decentralised, with it not just working as a concept, but thriving
      in the real world. It is a great step towards the decentralised, open and
      fair future many of us in the crypto space hope for.
    </Typography>
    <Typography sx={styles.regular}>
      To finish, imagine a world where every person and company can work
      together to further every project, the efficiency and synergies that are
      possible is almost beyond conception. The implications of truly global
      talent access with massively reduced barriers to get involved (as you can
      do so from your laptop in most cases) cannot be underestimated. Combine
      this with community ownership and direct and even revenue sharing, and you
      have an entirely new way to conceptualise the way businesses operate
      within a capitalist society.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      There are obviously hurdles on the road to this vision, some of which are
      very large, and we have to consider that we, as humans, are often the
      force that drives negative results. Perhaps this idealistic scenario would
      be tainted by our failings as a species. Even with that all in mind,
      though, it is still incredibly exciting to see a new era of innovation in
      long-standing and seemingly incumbent structures within finance, business
      and commerce.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Technical Analysis
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.italicText }}>
      Before we get into the TA, there is an important disclaimer to add. The
      current macro is very uncertain, and it is unclear how long this bear
      market could go on for. Therefore, investing in any asset at the moment is
      very risky, and often it is worth waiting until the market has shown signs
      of bottoming before making any moves.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/20DYDX.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      Although dYdX has a solid fundamental base, its price action isn’t
      embracing that, as dYdX has been creating all-time lows for months. Of
      course, this is most likely influenced by the current market state and
      doesn’t affect our conviction in the project. As far as technicals go, we
      can see a key area of interest has been formed around $4.5 - $5, which, if
      we were to look for market structure reversals, needs to be reclaimed in
      order to flip dYdX’s bearish market structure bullish.
    </Typography>
    <Typography sx={styles.regular}>
      Because dYdX has found itself in a constant downtrend, with all-time lows
      being formed frequently, we can only assume demand will be found around
      psychological levels - take $1, for example. Other key levels are also
      based on psychological numbers, such as $5, $6, $7, $8, and $10, which
      were highlighted on the chart. Volume has been quite low since January
      2022, something which cannot be ignored, as this, paired with BTC’s
      current market state, will only slow down dYdX’s rise and keep it from
      reaching its true potential. BTC has been ranging around its $30.000
      psychological &amp; technical support level for two weeks, after a
      record-breaking downtrend of eight red weekly candles. Its likely selling
      pressure will slow down, which will allow buyers to take control of the
      price for a limited amount of time. $5 remains the crucial level to
      reclaim in order to confirm real further upside - until then, we should
      expect ranging between $1.5 and $5 for the next few months.
    </Typography>
  </>
);

export default withPresence({ title, description })(Deep);
