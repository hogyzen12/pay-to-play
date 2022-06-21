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

const { title, description } = staticContent.meta.inflation;

const Inflation = ({ styles }) => (
  <>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Without-other-ballons.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      We have had a lot of questions regarding inflation and monetary policy
      over the last couple of months, and not many people are aware of the
      impact and importance of inflation when dealing with financial markets.
    </Typography>
    <Typography sx={styles.regular}>
      That’s what Cryptonary is here for - to educate. In this journal, we will
      dive deep into inflation, monetary policy, and the relationship between
      consumer prices and monetary policy.
    </Typography>
    <Typography sx={styles.regular}>
      Now, more than ever (literally), it’s important to understand the
      background of how we ended up here, and what it all means for both the
      average person and investors. Sit tight, this is a long one!
    </Typography>
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
      Inflation
    </Typography>
    <Typography sx={styles.regular}>
      Before we talk about the factors that are contributing to inflation, it’s
      important to understand exactly what inflation is. Simply, inflation is
      the decline of purchasing power of a currency over a period of time.
      Essentially, higher prices without matching wage growth. Example:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Sam makes $20,000 a year in 2020.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The cost of running his appliances, heating his home,
          mortgage, food, etc. comes to $12,000 per year.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}In 2022 Sam still makes $20,000 per year.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}However, his costs have increased 50% over these 2 years
          due to inflated prices.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Now, Sam’s cost of living is $18,000. This leaves him
          with just $2000 per year to spend on other things like entertainment,
          non-essential goods, etc.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Sam’s quality of life has dropped dramatically, and he is
          now essentially living paycheck-to-paycheck – in only 2 years.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      Central banks in most Western countries aim for a base inflation rate of
      around 2%. Inflation is not necessarily a bad thing when kept at
      reasonable levels. When inflation is at acceptable levels, and consumers
      expect inflation, it provides incentive to spend. If you know an item or
      service you want to purchase will most likely increase in price next year
      - why wait to buy it? Makes sense to buy now rather than later. Consumer
      spending is what keeps the economy turning.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/inflation-value.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Additionally, inflation is preferable to the alternative - deflation.
      Deflation has the exact opposite effect described above. If consumers
      expect prices to{' '}
      <Typography sx={styles.boldText} component="span">
        fall
      </Typography>
      , they will hold off on spending - why buy something now when it will cost
      less next year? This is catastrophic for a capitalist economy. Consumers
      reduce spending, companies lose revenue, factories produce less, people
      start to lose their jobs, unemployment rises, wages are reduced because
      the unemployment pool is growing, people can’t afford their mortgages
      because they don’t have a job - you see where we’re going with this.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/deflationary-spiral.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Deflation was the main concern that led governments and central banks
      around the globe to act during the pandemic, reducing interest rates and
      providing stimulus. So, 2% inflation is the target and is deemed as a fair
      balance between price increases, manageable wage growth, economic health,
      and a base reduction in spending power. However, the figures for inflation
      that we have been seeing for the past couple of years are way beyond 2%.
      Consumers have seen their purchasing power reduced dramatically, and wages
      haven’t kept pace - but why?
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Inflation Pressures
    </Typography>
    <Typography sx={styles.regular}>
      Inflation pressure can come from any number of sources. The most serious
      cases are usually caused by energy - without cheap energy,{' '}
      <Typography sx={styles.boldText} component="span">
        everything
      </Typography>{' '}
      becomes more expensive. The knock-on effect of more expensive energy (oil,
      gas, electricity, etc.) affects basically everything we buy as consumers.
      The most obvious examples are living costs - need to heat a home? Run a
      washing machine? That’ll cost you 5-10 times as much as it did in 2020.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/energy.PNG.png"
      sx={{ mb: '24px' }}
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      The above chart shows the extreme extent to which energy costs have
      increased. What this essentially means is that the purchasing power of
      wages have been decimated on energy costs alone. Energy costs also
      inherently increase the price of goods and services.
    </Typography>
    <Typography sx={styles.regular}>
      Nothing can be produced without expending energy in one form or another.
      Factories use huge amounts of electricity, farming equipment uses huge
      amounts of petrol/gas - this translates into increased costs for
      production, transport, etc. and ultimately the bill is passed on to
      consumers in the form of increased prices. However, the cost of energy is
      not the only inflation pressure that has eaten away consumer purchasing
      power.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Inflation-pressure.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      The chart above shows the disparity in where price pressure originates per
      region. In Europe, for example, energy is by far the largest contributor
      to inflation. This is largely a result of mainland Europe’s reliance on
      Russia for natural gas and other energy supplies. Obviously, without a
      resolution to the ongoing Ukraine-Russia conflict, this is set to continue
      for the foreseeable future as relations are not great (understatement).
    </Typography>
    <Typography sx={styles.regular}>
      Another key factor is the global food supply. Ukraine has been known for
      centuries as the “bread-basket of Europe”; some might say even the world -
      accounting for 9% of global wheat trade. The conflict in Ukraine has
      dramatically reduced exports due to blockades and the general chaos that
      conflict brings.
    </Typography>
    <Typography sx={styles.regular}>
      The war in Ukraine has increased the cost of food - not because the demand
      has increased, but because supply has been affected. Additionally,
      Russia’s share of food exports to Europe has been dramatically reduced
      because of sanctions from both sides. Overall, this has led to a
      relatively steep cost in food prices around the world and the situation is
      not likely to improve until the conflict is resolved and both countries
      restore exports to pre-War levels.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      On a related point, the US and its allies are constructing silos in the
      Western parts of Ukraine to enable exports through a land corridor to
      circumvent blockades. However, this infrastructure will likely not be
      complete till later this year and still does not account for lost
      production due to destroyed infrastructure.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Supply Chains
    </Typography>
    <Typography sx={styles.regular}>
      In the US, energy is still a large contributor to inflation, but other
      factors include supply chain issues that increase the cost of shipping
      goods to the US - higher import prices, basically. The US relies heavily
      on imported goods to meet consumer demand and the result of high import
      prices is inflated prices for the end consumer. Supply chains have been
      under extreme pressure from the effects of COVID and continuing lockdowns
      in key industrial exporters in Asia, along with high demand for shipping
      that existing capabilities around the world are struggling to meet.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/supply-chains.png"
      sx={{ mb: '24px' }}
      alt=""
      component="img"
    />
    <Typography sx={styles.regular}>
      The issue is not producing enough goods to meet demand – factories are
      more than able to produce the required goods, at an acceptable cost.
      However, the issue is that all these produced goods are stuck in ports due
      to a number of factors:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Higher demand for goods as the world comes out of
          lockdown and begins spending again.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Limited cargo capacity – there is a limit to the number
          of ships available and the quantity of goods they can carry. This
          leads to delays at ports, and increased costs per ton since shipping
          is in high demand.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Workforce shortage – COVID lockdowns prevent workers from
          going to work, in addition to companies laying off workers due to
          reduced demand during the global lockdowns.
        </ListItemText>
      </ListItem>
    </List>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/supply-chain-issues.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Gone are the days of empty shelves in supermarkets during lockdown - those
      shelves have been replenished, but at what cost? A cost that is increasing
      every week, and until the supply chain issue is resolved or at least
      mitigated, it is unlikely we see any slowdown in inflation from this
      source.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Historical Precedent
    </Typography>
    <Typography sx={styles.regular}>
      This is not the only time in history that there has been a huge disruption
      to the global economy. Do we have a point in time that the current climate
      is comparable to? We certainly do!{' '}
      <Typography sx={styles.boldText} component="span">
        The Nixon Shock
      </Typography>
      .
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/nixon-shock.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Before we get into the Nixon Shock, it’s important to understand the
      historical context. From around 1958 the global financial system was
      governed by the Bretton Woods system which was agreed upon by 44 countries
      towards the end of World War II. Here are the key points:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}All countries within the Bretton Woods system agreed to a
          fixed peg against the US dollar, essentially setting USD as the global
          reserve currency. This was achieved by each country using their
          currency to buy/sell USD to maintain the peg.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}This improved international trade relations because it
          reduced currency volatility, making it easier for companies to set
          prices and costs for goods.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The World Bank and the International Monetary Fund (IMF)
          were set up as a direct consequence, with the purpose of identifying
          countries that required financial support in the aftermath of the war.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}At this time the US dollar was directly convertible to
          gold.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      However, the Bretton Woods system began to unravel in the early 1970s as
      faith in the system in many large economies, such as France, waivered. In
      1965, France announced its intention to exchange all of its USD reserves
      to Gold at the official exchange rate. What happened next was essentially
      the bank run of all bank runs.
    </Typography>
    <Typography sx={styles.regular}>
      In 1966, external (non-US) central banks held $14 billion in USD, whereas
      the US only had $13.2 billion in gold reserves - only $3.2 billion of
      these reserves were available for redemption, the rest was reserved for
      domestic holdings. Many countries around the world began exchanging their
      USD for gold - but there wasn’t enough. The US attempted to devalue its
      currency to increase the value of its gold reserves - catastrophic for all
      other currencies as they were, for all intents and purposes, pegged to the
      USD. This was unacceptable, and (quite rightly) countries began leaving
      the Bretton Woods system.
    </Typography>
    <Typography sx={styles.regular}>
      At the same time, there was an ongoing energy crisis launched by Arab
      members of OPEC embargoing oil exports to the US for their support of
      Israel during the Yom Kippur War.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/oil1970s.PNG.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      The US at the beginning of the 1970s and throughout had an inflation rate
      of around 6% and unemployment around 6% as well. Due to the on-going
      pressure on the USD, the energy crisis, and inflation, President Richard
      Nixon met with his advisors and came up with a plan:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The suspension of convertibility of USD to gold.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}This improved international trade relations because it
          reduced currency volatility, making it easier for companies to set
          prices and costs for goods.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}A 90-day freeze on wages and prices to counter inflation.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}An import charge of 10% to ensure that products made in
          the US would not be at a disadvantage due to volatile exchange rates.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      The main point of this was that currencies around the world became
      free-floating, or fiat currencies. In addition, it proved the governments
      willingness to “change the rules” in the face of adversity. The Nixon
      Shock was one of the largest changes in the financial system ever, and the
      creation of fiat currencies backed by nothing has directly or indirectly
      caused a lot of the monetary issues we have faced in the last 3 decades.
    </Typography>
    <Typography sx={styles.regular}>
      From this point on, monetary policy was largely handed to central banks -
      the creation of new money was no longer dictated by the amount of gold
      available, but rather by central banks purchasing financial assets of
      lending money to institutions. In turn, these institutions repurpose this
      money by offering credit to customers - mortgages, business/personal
      loans, etc.
    </Typography>
    <Typography sx={styles.regular}>
      When we say that the Federal Reserve is printing money, they are literally
      creating money out of thin air - we’re not just saying it as an
      exaggeration.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Now, we’ve covered inflation and how fiat currencies came about - what
      tools do central banks use to control inflation that is out of hand, in
      the absence of anything backing the currency?
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Interest Rates
    </Typography>
    <Typography sx={styles.regular}>
      Controlling inflation is done by reducing the availability of money. The
      accessibility of money is largely dictated by interest rates - if money is
      too expensive to borrow people are less likely to spend. Similar to the
      point made above about deflation, increasing interest rates reduces the
      willingness of people and organisations to spend. This reduces demand for
      goods and services. In turn, businesses reduce the prices of goods and
      services to try and attract spending. This is called Quantitative
      Tightening (QT).
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Interest-Rates.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Revenues drop, profit margins become tighter, supply outweighs demand, and
      overall, the economy cools down. The unfortunate consequence of this is
      that some companies will have to lay people off due to the reduced demand.
      What central banks try to do when implementing QT is reduce inflation by
      reducing demand and prices, but at the same time, avoid mass unemployment
      and a general recession.
    </Typography>
    <Typography sx={styles.regular}>
      The last time the Fed attempted QT was in 2017. From the Great Recession
      in 2008, interest rates were kept close to 0% - 7 straight years of
      printing essentially. The QT program of 2017 was cut short in 2019 due to
      the negative effects on the economy. QT has never been done before on a
      large scale and its effects are unknown because there is no historical
      precedent.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/inflation.PNG.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      CPI (Consumer Price Index) is a measure of the change in consumer prices
      over time. M2 money supply is the supply of easily convertible money. As
      can be seen from the chart above, the dramatic increase in the M2 money
      supply because of the COVID Quantitative Easing has never been seen
      before. Subsequently, this policy of QE has been one of the key factors of
      inflationary pressure over and above the pressures outlined above.
    </Typography>
    <Typography sx={styles.regular}>
      Overall, we believe that the Fed’s hand has been forced into aggressively
      raising interest rates - largely as a result of its own actions. We
      believe it is highly unlikely that any sort of risk-on environment will
      return for at least the next 6-12 months - inflation is simply too high.
      The Fed has stated on multiple occasions now that tackling inflation is
      its number one priority - for now it doesn’t look like they are concerned
      about the outcome in other areas of the economy, such as employment.
    </Typography>
    <Typography sx={styles.regular}>
      Fighting the Fed in this scenario is impossible and so for the remainder
      of this year into 2023, we will continue evaluating the Feds position and
      inflation numbers. Ultimately, the US Federal Reserve is in charge of the
      direction of markets - for now.
    </Typography>
  </>
);

export default withPresence({ title, description })(Inflation);
