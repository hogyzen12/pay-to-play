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

const { title, description } = staticContent.meta.bear;

const BearMarket = ({ styles }) => (
  <>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/NavBearMarket-1.jpg"
      component="img"
    />
    <Typography sx={styles.regular}>
      Bear markets are frantic and frightening, but they are a natural part of
      the market cycle. Bull markets do not last forever, nor do bear markets.
      The latter are healthy and required for continued price appreciation.
    </Typography>
    <Typography sx={styles.regular}>
      Nobody can predict with certainty when they will begin, how long they will
      persist, or how drastically prices will drop. However, the market does
      leave clues. In this report we will discuss:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679; The clues given by the market near the top -{' '}
          <Typography sx={styles.boldText} component="span">
            shared in Cryptonary Pro
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679; Survival tips for the bear market
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679; What it takes to make it in crypto
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      Market Structure Beats Talent
    </Typography>
    <Typography sx={styles.regular}>
      Cryptonary Pro offers two main products:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{' '}
          <Typography sx={styles.boldText} component="span">
            Market Research
          </Typography>
          : will always be bullish as the point of it is to find undervalued
          assets (or gems)
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{' '}
          <Typography sx={styles.boldText} component="span">
            Market Analysis
          </Typography>
          : shares an unbiased view on the market at any point in time and finds
          the clues left by the market
        </ListItemText>
      </ListItem>
    </List>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/TA-16TH.png"
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Bitcoin trended up to the meme level of $69,000 in November before
      starting to fall. Mid-month, the market structure turned from bullish to
      bearish with the setting of a lower low. The rest is history.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Were you paying attention anon?
    </Typography>
    <Typography sx={styles.regular}>
      Here are some screenshots taken from Cryptonary Pro’s Discord in the month
      of November after the structural breaks.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Discord-1.png"
      component="img"
    />
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Discord-3.png"
      component="img"
    />
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Discord-4.png"
      component="img"
    />
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-19-at-10.52.29-AM-1024x395.png"
      component="img"
    />
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Discord-6.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      What else was leaving clues? The{' '}
      <Typography sx={styles.boldText} component="span">
        On-Chain movements from whales
      </Typography>{' '}
      alongside the change in macro.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-19-at-10.48.52-AM-1.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Our market analysis was spot-on. Anyone who reads it and conducts
      additional research could see that the overall picture is shifting towards
      the bearish side. While we cant advise every person on how to manage their
      portfolio, we can give a market outlook, and that’s what we always do at
      Cryptonary.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Survival Tips
    </Typography>
    <Typography sx={styles.regular}>
      Buy low, sell high. Investors buy during bear markets and sell during bull
      markets. Wealth is created this way.
    </Typography>
    <Typography sx={styles.regular}>
      While it sounds simple, very few do it. If they did, every investor would
      be a retired multi-millionaire by now. Let’s dive into more constructive
      tips.
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Have an Income:
          </Typography>{' '}
          Make sure you have a reliable source of income. The quickest way to
          wreck your life is to invest with all you own. Yes, crypto offers
          enormous profits, but that doesn’t mean you should take out a loan to
          buy the dip or quit your job to focus on it full-time (unless you want
          to build something) when you already don’t have enough money to pay
          your bills. Never invest in more than you can afford to lose. A stable
          income also grants you the luxury of waiting multiple years for crypto
          to thrive.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Knowledge is Power:
          </Typography>{' '}
          Instead of buying a coin simply because your cousin encouraged you to,
          consider why you should, instead of following their advice. Start by
          learning and fully comprehending the fundamentals of cryptocurrencies
          & blockchain technology, then advance your knowledge by delving into
          more advanced topics. If you do your research and invest wisely, the
          market will reward you - you can never stop learning. You can start
          with{' '}
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/crypto-school/"
            target="_blank"
          >
            Cryptonary’s Education
          </Link>{' '}
          (100% free).
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Cash is King:
          </Typography>{' '}
          Can’t buy the dip or distressed assets if you don’t have cash.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Risk Management:
          </Typography>{' '}
          In a bull market, everything goes up in price, the same phenomenon
          happens in a bear market but with prices soaring downwards. Expect
          prices to go lower than you expect. Convinced this is the bottom?
          Avoid going all-in because you could be wrong and price could fall
          further. Also, exit when you are wrong and a certain support doesn’t
          hold.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Don’t Try to Buy the Bottom:
          </Typography>{' '}
          You may think you know where it is, but it’ll likely fall further than
          you think. The reversal can also be incredibly boring (13-months in
          the 2015 bear), you have time. The only way we V-shape recover is if
          some out-of-this-earth news breaks such as the FED printing again.
          Don’t FOMO into every relief rally thinking the bottom is here and you
          missed out, but rather wait for signs of strength & reclaim of price.
          In every bear market, the bottom was formed when there was a long
          period of boredom and price accumulation in a range. Accumulation is
          your sign to start buying or DCA. The bear market will not end in just
          a day, it will take many months to recover.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Stay Away from Sh*tcoins:
          </Typography>{' '}
          Avoid investing in projects with no fundamentals, even if they are
          hyped & marketed well. This gambling strategy may work in a bull
          market, still a game of musical chairs, but doesn’t work in a bear.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Build Conviction & Have Courage:
          </Typography>{' '}
          Finally, have conviction in your investments. If you don’t have
          conviction, your emotions won’t be able to withstand the blood in the
          market, and you would end up either selling all of your holdings or
          leaving crypto for good. Having a conviction will develop with proper
          research and dedication. Don’t have a conviction for a sh*tcoin. There
          will always be buyers & sellers at specific prices – the market will
          not go to zero. So avoid FOMO and FUD, and do not rush with your
          judgments.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span"></Typography>
        </ListItemText>
      </ListItem>
    </List>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/ETH-TA.png"
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Make Money in a Bear Market
    </Typography>
    <Typography sx={styles.regular}>
      Look for other ways to make money, other than buying & selling assets.
      Some examples:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Run an Ethereum validator node. It costs 32 ETH and pays
          0.12 ETH per month.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Look for token-less protocols, and try them out for
          airdrops, low risk/high reward. Try using apps on Arbitrum.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Farm stablecoins, and receive interest (1%-3% annually).
          Farm on Aave or Uniswap.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      Market Cycles - Emotions
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Market-Psychology.png"
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Right now we are between Capitulation and Anger. Depression is still way
      off. Everyone will stop talking about crypto during the Depression phase,
      which is the most dreadful and boring time and when many people will leave
      the space for good. A prudent investor will remain in the Depression phase
      and begin to build up before the Disbelief phase.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Crypto is a Long-Term Game
    </Typography>
    <Typography sx={styles.regular}>
      Bear markets are no reason to panic. It is a period to generate wealth.
      The amount of funding, institutional interest, and liquidity is increasing
      every year. With regulations being enforced, crypto will be classified as
      an asset class. So whoever is telling you that crypto is going to zero,
      will end up buying the top like every cycle. People who stayed since 2013
      lacked the basics and tools to learn, yet they persisted. Now that you
      have all the resources you need to stay in the game, will you choose to
      leave and regret it later, or stay and be ahead of the majority?
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/TA-2.png"
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      Summary | TLDR
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Never fade market structure and pay close attention to
          it. It’ll also be the first clue on when the bear market ends.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Don’t try to catch knives or predict bottoms – it is a
          fool’s errand.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Have Patience, Conviction & Courage.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Maximise your time & capital in this bear market.
        </ListItemText>
      </ListItem>
    </List>
  </>
);

export default withPresence({ title, description })(BearMarket);
