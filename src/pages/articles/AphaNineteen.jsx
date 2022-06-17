import React from 'react';
import {
  CardMedia,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import withPresence from 'common/hoc/withPresence';
import dao19 from 'assets/image/articles/dao19.png';

const { title, description } = staticContent.meta.forex;

const AphaNineteen = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={dao19} component="img" />
    <Typography sx={styles.regular}>
      Alpha-DAO is a new Decentralized Autonomous Organization created by
      seasoned crypto researchers.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Disclaimer: This is not investment nor investment advice. Only you are
      responsible for any capital-related decisions you make and only you are
      accountable for the results.
    </Typography>
    <Typography sx={styles.regular}>
      The information made available in this report is{' '}
      <Box sx={styles.boldText} component="span">
        NOT
      </Box>{' '}
      for replication. The purpose is to share the thought process behind the
      DAO’s decision making - additionally, this is a{' '}
      <Box sx={styles.boldText} component="span">
        HIGH RISK
      </Box>{' '}
      journey for the DAO which means capital has also been allocated in
      accordance with this. Once again,{' '}
      <Box sx={styles.boldText} component="span">
        DO NOT REPLICATE
      </Box>
      .
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Asset:
      </Typography>{' '}
      PREMIA
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Description:{' '}
      </Typography>
      Market hasn’t priced in upcoming events, and the protocol is undervalued
      (even before considering what’s coming) at $18m mcap and $167m FDV.
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Proposal:
      </Typography>{' '}
      Sell HEGIC for PREMIA.
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Reason:
      </Typography>
    </Typography>
    <Typography sx={styles.regular}>
      HEGIC is being delisted from Binance, as of now we don’t know the reason,
      likely simply liquidity, however, this shows a lack of demand for HEGIC.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      This, combined with the consistently dropping liquidity and lack of
      marketing, leads me to believe the speculative market for HEGIC isn’t
      there. I believe this capital is better placed elsewhere, and I’m
      confident with where we should put it…
    </Typography>
    <Typography sx={styles.title} variant="h3">
      PREMIA
    </Typography>
    <Typography sx={styles.regular}>
      Premia have been hard at work, and have a mass of big announcements and
      improvements coming in the next 6 months. Now is a perfect time to get in
      before the news becomes widely known.
    </Typography>
    <Typography sx={styles.regular}>
      <Typography
        sx={{ ...styles.boldText, ...styles.italicText }}
        component="span"
      >
        These include:
      </Typography>
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText>
          &#9679;{'  '}Launching on Fantom (coming days)
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText>&#9679;{'  '}vePREMIA (1-2 months)</ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText>
          &#9679;{'  '}DOVs building on top of Premia launch (2-3 months)
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText>&#9679;{'  '}V3 released (4-5 months)</ListItemText>
      </ListItem>
    </List>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      vePREMIA
    </Typography>
    <Typography sx={styles.regular}>
      vePREMIA would require all stakers to lock their PREMIA, earning protocol
      revenue and voting rights in exchange (Premia is also considering any
      other ways they can add value, full details on vePREMIA are coming in the
      next week or so). The longer tokens are locked for, the higher the rewards
      multiplier.
    </Typography>
    <Typography sx={styles.regular}>
      The voting rights will be used to allocate the PREMIA emissions to pools.
      They are hoping to inspire a curve wars type situation. I’m not an expert
      on ve-tokenomics voting, in fact, I’m quite sceptical of them when it
      comes to smaller protocols, but I can certainly see the potential and
      looking forward to seeing it play out.
    </Typography>
    <Typography sx={styles.regular}>
      Even completely disregarding the voting on emissions distribution, the
      rewards multiplier should be plenty to get people to lock for longer.
      Locked PREMIA = less supply on exchanges = higher price.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      DOV funding
    </Typography>
    <Typography sx={styles.regular}>
      Liquidity is an issue that plagues DeFi option protocols, Hegics’ has been
      steadily dropping, Dopex has masses but can’t find demand to put it to
      use.
    </Typography>
    <Typography sx={styles.regular}>
      The Premia community has voted and is funding 2 DOVs building on top of
      Premia.
    </Typography>
    <Typography sx={styles.regular}>
      <strong>Vaults.Pro </strong>were granted 235,000 Euros to build an
      actively managed vault protocol, where anyone can design a strategy for
      others to deposit into. This democratises access to complicated and often
      high yielding strategies.
    </Typography>
    <Link
      sx={{
        ...styles.link,
        mb: '24px',
        display: 'block',
        maxWidth: { xs: '280px', md: '680px' },
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      href="https://gov.premia.finance/#/proposal/0x671986784d3d842884e0ca5cabefcc0773c16f686ebc0aaed78ed0f32ea03b00"
      target="_blank"
    >
      https://gov.premia.finance/#/proposal/0x671986784d3d842884e0ca5cabefcc0773c16f686ebc0aaed78ed0f32ea03b00
    </Link>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Fort Knox Vaults{' '}
      </Typography>
      will receive $250,000 and 50,000 PREMIA to build a passive vault DOV
      protocol, similar to traditional DOVs such as Ribbon and Friktion. We
      expect to see the first version of Fort Knox Vaults live in around 2
      months, and as far as I’m aware, it will be the 1<sup>st</sup> DOV
      protocol on Arbitrum.
    </Typography>
    <Typography sx={styles.regular}>
      Fort Knox Vaults will also distribute 20% of revenue back to Premia
      treasury (and there is discussion of having this going directly to PREMIA
      stakers).
    </Typography>

    <Link
      sx={{
        ...styles.link,
        mb: '24px',
        display: 'block',
        maxWidth: { xs: '280px', md: '680px' },
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      href="https://gov.premia.finance/#/proposal/0xb33da0562b7715e583a11eae33da1b20dbd149171f32da1356284d329ba8c6a2"
      target="_blank"
    >
      https://gov.premia.finance/#/proposal/0xb33da0562b7715e583a11eae33da1b20dbd149171f32da1356284d329ba8c6a2
    </Link>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      As part of the agreement, both teams will be open-sourcing code needed for
      other protocols to easily build on top of Premia.{' '}
    </Typography>
    <Typography sx={styles.regular}>
      This is an absolute game-changer in my opinion, it unlocks massive
      potential, and secures Premia a spot in the future of DeFi, provided all
      goes to plan.
    </Typography>
    <Typography sx={styles.regular}>
      Also, the protocols built on top of Premia could one day decide to release
      tokens. If they do, there could be an opportunity/benefit there…
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      V3
    </Typography>
    <Typography sx={styles.regular}>
      This is the big daddy of what’s coming up for Premia.
    </Typography>
    <Typography sx={styles.regular}>
      There will be additional yield-bearing pools, that will use the collateral
      deposited to the pool to earn additional yield (it normally sits there
      until options are exercised).
    </Typography>
    <Typography sx={styles.regular}>
      LPs will be able to select the strike price and duration of options they
      would like to underwrite (there will still be an option to have this done
      automatically for you).
    </Typography>
    <Typography sx={styles.regular}>
      Options buyers will have a range of tools, likely including stop, limit
      and take profit orders (and more). Something we haven’t seen in DeFi
      options before.
    </Typography>
    <Typography sx={styles.regular}>
      The user experience will be improved throughout, including a dashboard
      detailing all updates since you last visited the platform (tied to your
      wallet).
    </Typography>
    <Typography sx={styles.regular}>
      Premia vaults will be released, one of which we expect to have some form
      of delta-hedging, the other will look to take advantage of arbitrage
      opportunities. The form the vaults will take is unknown, as they have yet
      to share details.
    </Typography>
    <Typography sx={styles.regular}>
      Full details of what is coming in V3 will be covered in an article Premia
      are posting in the coming weeks!
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      Updated fees
    </Typography>
    <Typography sx={styles.regular}>
      The 3% fee on options purchase remains, but the 3% exercise fee on profits
      has been scrapped.
    </Typography>
    <Typography sx={styles.regular}>
      Instead, they have introduced a 2.5% annualised utilisation fee, which
      will be paid by LPs. This works out at around 0.2% per month the capital
      is being used, FAR less than the LP earns, and considerably lower than
      competing vaults charge.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      Assets coming
    </Typography>
    <Typography sx={styles.regular}>
      MAGIC and GMX are expected soon, and the team are in talks with other
      protocols about listings.
    </Typography>
    <Typography sx={styles.regular}>
      As protocols can provide the options liquidity themselves, through
      Premia’s Protocol Owned Options Liquidity (POOL) initiative, it is likely
      we see many more added. POOL is also a form of treasury management for
      protocols.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      More chains
    </Typography>
    <Typography sx={styles.regular}>
      The team will go wherever there is demand, and encourage users to put
      forward proposals, through their governance page, if they’d like to see a
      specific asset or chain supported! The level of community involvement and
      encouragement in Premia is refreshing!
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      Additional notes
    </Typography>
    <Typography sx={styles.regular}>
      The community is currently discussing a potential token burn, team fully
      supports this and will go with whatever the community decides best. Whilst
      we certainly can’t count on this, if it does happen, it is an immediate
      value add.
    </Typography>
    <Typography sx={styles.regular}>
      Protocol built from the ground up to support upgradability and
      flexibility, DeFi’s ‘money-lego’ ethos and fully decentralised and
      automated functioning. Fully upgradeable contracts mean the protocol can
      improve and adapt to anything that may be required. This means Premia can
      slot perfectly into the future of structured products, and much more,
      coming in DeFi.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Open and transparent in all aspects. From the governance process to their
      impressively comprehensive and honest{' '}
      <Typography sx={styles.boldText} component="span">
        analytics page (
        <Link
          sx={styles.link}
          href="https://app.premia.finance/analytics"
          target="_blank"
        >
          https://app.premia.finance/analytics
        </Link>
        )
      </Typography>
      .
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Considerations – The Devil’s Advocate
    </Typography>
    <Typography sx={styles.title} variant="h3">
      <em>High FDV vs Circulating Supply</em>
    </Typography>
    <Typography sx={styles.regular}>
      Fully diluted value is around 10x the circulating supply. However,
      emissions will last for over 10 years. The current inflation sitting at
      around 35% a year, which will be diluted as tokens are released, as
      emissions remain constant.
    </Typography>
    <Typography sx={styles.regular}>
      48% of the total supply is reserved for protocol development (not
      emissions). What is done with these tokens will be decided by the
      community, and there are discussions at the moment about a potential burn
      (likely of a portion of the 48%). The team has said they support a burn if
      that’s what the community decides.
    </Typography>
    <Typography sx={styles.regular}>
      I don’t consider the fully diluted value an issue, due to the low market
      cap, huge growth potential, transparent emission and community governance.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      Team Tokens
    </Typography>
    <Typography sx={styles.regular}>
      One consideration is the team tokens, which are 10% of the total supply,
      and equal to the current circulating supply, and are due to unlock next
      year.
    </Typography>
    <Typography sx={styles.regular}>
      I’m aware of discussions about potentially delaying this in some way. This
      is something to keep an eye out for, and should the delay not happen, we
      would need to consider our position closer to the time.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      DOVs
    </Typography>
    <Typography sx={styles.regular}>
      Until V3 is released, Fort Knox and Vaults.Pro won’t be able to add
      liquidity or buy options from Premia.
    </Typography>
    <Typography sx={styles.regular}>
      This is solved by V3, which is due in around 4 months, but I must add a
      cautionary note before we get too excited.
    </Typography>
    <Typography sx={styles.regular}>
      Fort Knox Vaults gives Premia exclusivity for 3 months, after which
      ‘strategies will become more complex and thus additional protocols will
      need to be utilised’. Vaults.Pro does not have an exclusivity clause.
    </Typography>
    <Typography sx={styles.regular}>
      I know the teams of both protocols are in close contact with Premia, and
      fully expect them to utilise Premia when V3 is released.
    </Typography>
    <Typography
      sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
    >
      C-Value and Volatility Oracle Pricing
    </Typography>
    <Typography sx={styles.regular}>
      Premia options pricing is calculated fully on-chain (removing
      centralisation that we see among many competitors), using the ‘C-value’, a
      supply and demand-based pricing model, alongside Premia’s Volatility
      Surface Oracle.
    </Typography>
    <Typography sx={styles.regular}>
      Essentially, what this means, is that Premia’s option prices flex with the
      supply and demand on the platform. If people are depositing into the
      pools, but no one is buying the options, the options prices drop. The same
      is true the other way around, prices increase if demand outweighs supply.
    </Typography>
    <Typography sx={styles.regular}>
      As more capital flows into the pools, there is a need for more buy-side
      demand. This is one area where the pricing model may come into its own, as
      the lower than market priced options would likely attract more buyers.
    </Typography>
    <Typography sx={styles.regular}>
      We have yet to see Premia’s unique options pricing model used on a large
      scale, or with DOVs involved.
    </Typography>
    <Typography sx={styles.regular}>
      We don’t know how this model will affect pool utilisation (the % of
      capital in the pools that is being used to underwrite options), as whilst
      independent to a certain extent, when utilisation holds above 50-60%, it
      is likely that Premia’s options will be priced higher than the rest of the
      market. In some markets, this won’t be an issue, as Premia is the only
      protocol selling those options, but in BTC and ETH markets, high pool
      utilisation (and therefore prices) may drive buyers elsewhere.
    </Typography>
    <Typography sx={styles.regular}>
      This gives us a bit of a catch 22 situation, where we want high pool
      utilisation, but having high utilisation would bring the C-value up,
      increasing option prices and potentially driving buyers elsewhere.
    </Typography>
    <Typography sx={styles.regular}>
      To an extent, this is by design, as it means there shouldn’t be excess
      demand the platform can’t cope with (disincentivising purchasing options
      when liquidity is low by increasing price), or excess liquidity sitting
      idle in the pools (incentivising purchasing options when liquidity is high
      by lowering prices).
    </Typography>
    <Typography sx={styles.regular}>
      As this pricing model hasn’t been battle-tested, it is vital we keep a
      close eye on how it affects supply and demand on the protocol. For
      example, one thing we will be looking at is where pool utilisation
      naturally settles (the point at which buyers and sellers are matched). If
      that happens to be around 70% (for argument’s sake), how would that affect
      LPs capital efficiency? Is Premia a better option than competitors for LP
      returns? Are buyers happy with price at this level? That all needs to be
      taken into account.
    </Typography>
    <Typography sx={styles.regular}>
      I will be keeping a close eye on Premia post Fort Knox and Vaults.Pro
      launch. Should the pricing model stand the test, this would give other
      protocols the green light to build atop Premia, and could open the flood
      gates <em>(maybe time to double down).</em>
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      If this goes pear-shaped, and issues arise (for example excess DOV
      liquidity isn’t matched by buy-side demand, and LPs on the protocols earn
      minimal returns for a sustained period of time), we will have to see how
      Premia address the issues.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Conclusion
    </Typography>
    <Typography sx={styles.regular}>
      There is a succession of value-adding events, and the market hasn’t priced
      them in yet in my opinion. This is an opportunity for us to get in before
      the upgrades happen, and should they succeed, ride the bull.
    </Typography>
    <Typography sx={styles.regular}>
      <Typography sx={styles.boldText} component="span">
        Strategy &amp; Execution
      </Typography>
    </Typography>
    <Typography sx={styles.regular}>
      I’m open to suggestions from the team here, but I propose TPs at:
    </Typography>
    <Typography sx={styles.regular}>25% at 2x buy-in price.</Typography>
    <Typography sx={styles.regular}>25% at 3x buy-in price.</Typography>
    <Typography sx={styles.regular}>
      Let the rest run, with constant evaluation.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      <Typography sx={styles.boldText} component="span">
        Execution
      </Typography>{' '}
      I will leave with Karim, as he is the execution wizard. Possible to buy on
      Ethereum on Arbitrum through Sushiswap, staking is currently only
      available on Ethereum, however as it stands I would not recommend staking
      our PREMIA, so would suggest buying on whichever chain is more liquid.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Proposal 19 has been executed
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          320,000+ HEGIC swapped for 4,783 PREMIA, at an average entry price of
          $1.845
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          See the transaction{' '}
          <Link
            sx={styles.link}
            href="https://etherscan.io/tx/0x1b0e9c7c2bf0c1c919abc865240e8fd9225c5b53e4f8cb23623c5637063b48f6"
            target="_blank"
          >
            here
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  </>
);

export default withPresence({ title, description })(AphaNineteen);
