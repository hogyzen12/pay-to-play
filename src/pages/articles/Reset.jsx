import React from 'react';
import {
  CardMedia,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import withPresence from 'common/hoc/withPresence';
import reset from 'assets/image/articles/reset.png';

const { title, description } = staticContent.meta.forex;

const Reset = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={reset} component="img" />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Everyone is talking about{' '}
      <Typography sx={styles.boldText} component="span">
        The Great Reset
      </Typography>
      , the only reset happening right now though is your portfolio... Over the
      past 7 months crypto has lost over $2 Trillion in value and it now trades
      (
      <Typography sx={styles.italicText} component="span">
        time of writing
      </Typography>
      ) below the $1 Trillion mark.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Total-MCap-14-June-2022.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      We will walk chronologically, starting off with what helped the{' '}
      <Typography sx={styles.boldText} component="span">
        bull-run
      </Typography>{' '}
      start, what caused it to stop and initiated a{' '}
      <Typography sx={styles.boldText} component="span">
        bear market
      </Typography>
      . Then we’ll take a look into the future.
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Notes
      </Typography>
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.italicText} component="span">
        Words you need to know while reading this:
      </Typography>
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          1. Risk-On: Investor sentiment and risk tolerance is high, wanting to
          have exposure to risk assets such as stocks or crypto
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          2. Risk-Off: Investor sentiment and risk tolerance is low, wanting to
          minimise exposure to risk assets such as stocks or crypto
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          3. Tapering: Slowing down the rate of asset buying
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      COVID Printing
    </Typography>
    <Typography sx={styles.regular}>
      When COVID-19 was announced as a global pandemic by the World Health
      Organisation on 12 March 2020, all markets crashed... really hard. That
      day will forever go in the history books as{' '}
      <Typography sx={styles.boldText} component="span">
        Black Thursday
      </Typography>{' '}
      - a black swan event.
    </Typography>
    <Typography sx={styles.regular}>
      A pandemic needs certain measures to minimise worldwide health damage, the
      main one being lockdowns in this case. This meant that businesses such as
      shops and restaurants would need to shut down, tourism would take a
      massive hit too as everyone sat at home. The economic damage that this
      would cause because of unemployment and decreased revenues would be very
      severe. Everyone was also fleeing to cash and exiting all positions given
      the fact that they don’t know how long this would last and they’d need
      cash to survive.
    </Typography>
    <Typography sx={styles.regular}>
      Naturally, the Federal Reserve stepped in to save the day by announcing
      Quantitative Easing (i.e. Printing) to purchase assets causing all markets
      to bottom and V-shape recover.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-14-at-4.55.13-PM.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      They tell you to follow the big boys movements. What about when the
      biggest, baddest and richest bank in the world starts buying? You
      definitely don’t want to be selling.
    </Typography>
    <Typography sx={styles.regular}>
      Obviously, the FED was not buying Bitcoin or any crypto, but investor
      sentiment was risk-on so this effect propagated to crypto given it
      presents one of the highest risks and highest rewards. At the same time,
      fundamentals of crypto were improving as value accrual started to exist in
      tokens and actual products were being shipped beyond promises on a
      whitepaper like 2017.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      All of this helped propel{' '}
      <Typography sx={styles.boldText} component="span">
        Bitcoin from $4,000 to $69,000
      </Typography>{' '}
      and{' '}
      <Typography sx={styles.boldText} component="span">
        ETH from $80 to $4,900
      </Typography>
      .
    </Typography>
    <Typography sx={styles.title} variant="h3">
      The Day the Music Stopped
    </Typography>
    <Typography sx={styles.regular}>
      After helping all markets recover, especially the S&amp;P500 with +112%,
      it was now time to deal with the other end of the stick: inflation.
    </Typography>
    <Typography sx={styles.regular}>
      Printing is great for risk assets, prices go up tremendously but you know
      what else goes up? The prices of everyday goods because the system was
      flooded with so much USD supply (i.e. inflation). On the 3rd of November
      2021, the Federal Reserve announced they will start tapering all the way
      until March where the monthly asset purchases would go down from $120B to
      $0 per month. This caused investor sentiment to start shifting risk-off
      and markets began their journey in marking the top.
    </Typography>
    <Typography sx={styles.regular}>
      There are three main methods that can be used to tame inflation:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          1.{'  '}
          <Typography sx={styles.boldText} component="span">
            Tapering:
          </Typography>{' '}
          Slowly stopping asset purchases in the market.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          2.{'  '}
          <Typography sx={styles.boldText} component="span">
            Raising Interest Rates:
          </Typography>{' '}
          By raising rates on loans, borrowing capital is discouraged because it
          becomes more expensive.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={{ ...styles.italicText, ...styles.boldText }}>
          3.{'  '}
          <Link
            sx={styles.link}
            href="https://www.stlouisfed.org/open-vault/2022/may/how-will-fed-reduce-balance-sheet"
            target="_blank"
          >
            Shrinking Balance Sheet
          </Link>
          : When the FED purchases assets on the market, these become part of
          its balance sheet which can quickly ramp up. The assets they deal with
          are Mortgage-Backed Securities (MBS) and Treasury Securities. Both of
          these assets are bonds and have a maturity date by definition. At
          maturity, the face value of the bond is paid back to the buyer. During
          QE, the FED reinvests that capital which keeps their balance sheet
          growing; they renew the bonds. When they want to shrink it, they
          simply stop reinvesting the capital after maturation. By letting them
          run-off they reduce the size of their balance sheet.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      Here is the full timeline of events on the Bitcoin chart.
    </Typography>
    <CardMedia
      sx={{ mb: '32px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-14-at-4.54.54-PM.png"
      alt=""
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Tales of Crypto
    </Typography>
    <Typography sx={styles.regular}>
      The macro environment is causing the main effect on crypto prices, but
      crypto itself continues to deal with its own issues. First we had the{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/guide-5-big-crashes-in-crypto-history/"
        target="_blank"
      >
        LUNA death spiral
      </Link>{' '}
      after the UST depeg which deleted $50B+ of wealth from the market.
      Recently we began dealing with mismanagement of customer funds from
      centralised entities such as Celsius Network. If there is a bank run (
      <Typography sx={styles.italicText} component="span">
        everyone wants to withdraw at once
      </Typography>
      ) and the platform isn’t able to redeem then we must brace ourselves as
      they liquidate their wBTC and stETH holdings which represents further
      selling pressure on the market.{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/simply-explained-nexo-nexo/"
        target="_blank"
      >
        Nexo
      </Link>
      , another lending provider, has offered to purchase their remaining
      qualifying assets to give liquidity to their clients given that they’ve
      halted withdrawals. This is a solution that would have lower market impact
      if chosen.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      In a bull run, many of these details are hidden in plain euphoria but when
      the tide shifts we start seeing who’s over-leveraged and the market will
      punish the sinners - as it is now.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      The Future
    </Typography>
    <Typography sx={styles.regular}>
      Now that we’ve evaluated the past, let’s take a look at the future and
      what it may hold.
    </Typography>
    <Typography sx={styles.regular}>
      Market stress is high and we’re already seeing people calling for
      sub-$10,000 BTC. The new and revolutionary financial system is trading
      under the $1 Trillion mark because of internal leverage and external
      pressures. When those pressures release, crypto will see light of day
      again - not every token though.
    </Typography>
    <Typography sx={styles.regular}>
      The bottom may be in or very close but that does not mean we’ll see
      another V-shaped recovery, in fact it is unlikely. We’re likely to sit in
      a deadly boring range for the remainder of the summer and people who buy
      today may end up puking their positions out of boredom and doubt before
      the market recovers. The safest route (
      <Typography sx={styles.italicText} component="span">
        slightly less rewarding
      </Typography>
      ) is waiting for a clear signal from the FED about some pressure relief.
    </Typography>
    <Typography sx={styles.regular}>
      Under the hood of crypto, very little has changed. The building continues
      to live on, including here at Cryptonary HQ, bull or bear we continue to
      build on for a better tomorrow. This can be said of many other crypto
      projects and protocols too. The rain washes out a lot of the BS which
      gives those who stick around a clearer view on the real builders and
      future winners.
    </Typography>
    <Typography sx={styles.regular}>
      Crypto is destined to repair the broken TradFi system, the mistakes of
      which we are currently dealing with collectively.
    </Typography>
    <Typography sx={styles.regular}>
      Today, you are in a prime place and still early. Why? Because crypto is
      still under construction, the proof-of-concept (Bitcoin) is complete and
      now we are building the building blocks (base layers) and linking them
      together (cross-chain comms) to help the end product thrive which is the
      application layer. When all three elements are built, then it would be too
      late. Today isn’t that day.
    </Typography>
    <Typography sx={styles.regular}>
      When it is all said and done and this market attains a{' '}
      <Typography sx={styles.italicText} component="span">
        $100 Trillion
      </Typography>{' '}
      market capitalisation in 2030, everyone will say: “In retrospect, it was
      inevitable“. But was their conviction strong enough to help them stick
      around in the hardest of times?
    </Typography>
  </>
);

export default withPresence({ title, description })(Reset);
