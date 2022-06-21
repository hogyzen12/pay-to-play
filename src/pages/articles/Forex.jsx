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
import forex from 'assets/image/articles/forex.png';

const { title, description } = staticContent.meta.forex;

const Forex = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={forex} component="img" />
    <Typography sx={styles.regular}>
      The time has come! We’re finally at the end of the cross-chain
      communications series. We’ve covered the most feasible methods of closing
      the gaps that exist between chains – but how can one gain exposure to this
      upside? We got you covered!
    </Typography>
    <Typography sx={styles.regular}>
      In this journal, we will go through the protocols that we believe have a
      good chance of capturing substantial growth and the most market share
      within the sector. We often compare the cross-chain sector as comparable
      to FOREX - instead of fiat being exchanged, it’s crypto. Although the
      FOREX market trades on average $6 trillion in volume per day, it would be
      unrealistic for us to target that kind of volume.
    </Typography>
    <Typography sx={styles.regular}>
      However, the premise is the same, and we believe the market{' '}
      <Typography sx={styles.boldText} component="span">
        will
      </Typography>{' '}
      value this sector highly in the coming years.
    </Typography>
    <Typography sx={styles.regular}>
      We’ll cover the “who’s”, the “why’s”, and the “wen’s”, as well as provide
      a brief update on the projects we have already covered previously! It
      doesn’t matter what the market looks like; these teams are always{' '}
      <Typography sx={styles.boldText} component="span">
        BUILDING
      </Typography>
      .
    </Typography>
    <Typography sx={styles.regular}>As the saying goes:</Typography>
    <Typography sx={Object.assign({}, styles.regular, styles.italicText)}>
      “Build and ye shall receive”
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText, mb: '32px' }}>
      Disclaimer: This is not investment nor investment advice. Only you are
      responsible for any capital-related decisions you make and only you are
      accountable for the results.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      The Winning Solution?
    </Typography>
    <Typography sx={styles.regular}>
      We have covered the methods that protocols are using to connect the
      liquidity and information that would otherwise be segregated on each
      chain. To recap, the solutions are as follows:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/research/30x-alive-and-well/"
            target="_blank"
          >
            Liquidity Pools
          </Link>{' '}
          - using an Automated Market Maker infrastructure with an intermediate
          chain that registers any transactions on both the sending and
          receiving chains.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/research/simply-teleport-your-coins/"
            target="_blank"
          >
            Synthetic Assets
          </Link>{' '}
          - using synths and a database protocol to allow the minting on synths
          on one chain, and the burning on another, to move wealth between
          chains.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/research/the-bridge-to-crypto-wealth/"
            target="_blank"
          >
            Bridges
          </Link>{' '}
          - using a combination of wrapped assets and liquidity pools to allow
          users to move assets from chain to chain.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/research/sliding-into-cross-chain-dms/"
            target="_blank"
          >
            Layer 0 Protocols
          </Link>{' '}
          - uses a communication infrastructure to validate information or
          assets sent from one chain to another.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      These are all valid solutions, and all are being used to move millions of
      dollars worth of assets daily. However, they each have their positives and
      negatives - there is no “perfect” solution to the interoperability problem
      (at least, not yet). So, which one takes the cake?
    </Typography>
    <Typography sx={styles.regular}>
      Honest answer? <em>None of them.</em>
    </Typography>
    <Typography sx={styles.regular}>
      The real answer depends on what is trying to be achieved. The best
      solution is the one that allows users to seamlessly move wealth and
      information between chains without a second thought. Unfortunately, the
      hard reality is that there is no solution that is <em>that</em> good –
      when we find one, CPro will be the first to hear about it!
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The solutions we have mentioned are widely used and are often
      interoperable with each other. When two or more of these solutions are
      used by a protocol in tandem, we end up with a versatile and highly
      reliable product, and so we value this over choosing one “winning”
      solution.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Stating the Obvious
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      We have scoured many projects that utilise cross-chain liquidity pools as
      the method of moving wealth chain-to-chain. However, we would{' '}
      <Typography sx={styles.italicText} component="span">
        still
      </Typography>{' '}
      put our money on the THORChain/THORSwap ecosystem being the best in this
      category.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      THORChain Ecosystem (RUNE &amp; THOR)
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/THORChain-volume.PNG.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Throughout 2022 we have seen an explosion in{' '}
      <Link
        sx={styles.link}
        href="https://app.thorswap.finance/dashboard"
        target="_blank"
      >
        volume on the THORChain network
      </Link>{' '}
      . This has largely been driven by the launch of synths, which have made
      using THORSwap cheaper and more user friendly.
    </Typography>
    <Typography sx={styles.regular}>
      We have covered this ecosystem pretty extensively already, so we won’t go
      into too much detail. For more information, check out the{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/30x/"
        target="_blank"
      >
        THORChain
      </Link>{' '}
      and{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/alpha-dao-proposal-9/"
        target="_blank"
      >
        THORSwap
      </Link>{' '}
      journals.
    </Typography>
    <Typography sx={styles.regular}>The targets still stand:</Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      $90 for RUNE
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      $1 Billion Market Cap for THOR
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>Up next….</Typography>
    <Typography sx={styles.title} variant="h3">
      Unexpected X-Chain Participant (SNX)
    </Typography>
    <Typography sx={styles.regular}>
      Other than THORChain, we believe that another one of our projects has the
      best chance of success within the synthetic asset sector, none other than:
      Synthetix. When we first started looking into Synthetix the protocol was
      purely for minting synthetic assets and facilitating the trade of these
      derivatives. With the implementation of cross-chain synths, in our opinion
      the value of Synthetix as a platform will increase significantly due to
      increased volume. This in turn should lead to more revenue generation, and
      subsequently a positive reaction by the token price.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Target for SNX: $60
    </Typography>
    <Typography sx={styles.regular}>
      Again, we have covered Synthetix extensively{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/staking-solution-for-20x/"
        target="_blank"
      >
        here
      </Link>{' '}
      so we will save some valuable word count for some <em>new</em> protocols.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The market recently has provided another opportunity to deploy capital -
      but where?
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Synapse Protocol (SYN)
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/synapse.png"
      sx={{ mb: '24px' }}
      alt="cross-chain"
      component="img"
    />
    <Typography sx={styles.regular}>
      Labelling itself as a “Universal Cross-Chain Liquidity Protocol”, Synapse
      utilises a combination of{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/30x-alive-and-well/"
        target="_blank"
      >
        liquidity pools
      </Link>
      ,{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/sliding-into-cross-chain-dms/"
        target="_blank"
      >
        communications infrastructure
      </Link>{' '}
      and{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/the-bridge-to-crypto-wealth/"
        target="_blank"
      >
        bridges
      </Link>{' '}
      to create a comprehensive cross-chain solution for EVM compatible chains.
      Synapse’s user experience is great, and there is ample liquidity available
      so slippage when swapping/bridging is minimal for the average DeFi user.
      Where it falls short is that it only supports EVM compatible chains and
      L2s.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      SYN is a multi-chain token that exists on a few chains and is the utility
      and governance token for Synapse Protocol, distributed as follows:
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/syndistribution.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The max supply is 250 million tokens, with emissions of around 260,000
      tokens per week (between 5-9% inflation per year). The token does not have
      any direct value capture in the same way that RUNE or SNX has; however,
      the demand for the token comes from its use in validation, providing
      liquidity and, of course, there is a large speculative element.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/txcountsynapse.PNG.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Despite the general state of the crypto market since the protocol launched
      in September 2021, Synapse has seen a relatively steady increase in
      transactions. We believe that despite the lack of direct value capture,
      the gradual reduction in emissions since launch coupled with increasing
      usage and past performance during market rallies, it is reasonable to
      assume that Synapse will perform well in the future.
    </Typography>
    <Typography sx={styles.regular}>
      We would compare Synapse to THORChain if we were to compare it to
      anything, just with limited scope and less value accrual. As such, we
      believe it is reasonable that Synapse would be able to reach the THORChain
      market cap during the most recent rally (RUNE at $13, which puts the
      market cap at $3.9 billion).
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      With a circulating supply of 184.38 million and a target market cap of
      $3.9 billion, this would put SYN at a token price of around{' '}
      <Typography sx={styles.boldText} component="span">
        $21
      </Typography>
      .
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Stargate Finance (STG)
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Stargate-Finance-atinge-suporte-vital-768x377-3777738027.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Built as a proof-of-concept for the LayerZero protocol (mentioned{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/sliding-into-cross-chain-dms/"
        target="_blank"
      >
        here
      </Link>
      ), and built{' '}
      <Typography sx={styles.italicText} component="span">
        by
      </Typography>{' '}
      the LayerZero team, Stargate Finance is a cross-chain “unified liquidity”
      bridge that will facilitate the transfer of assets between any chains that
      have LayerZero endpoints. LayerZero carries the messages; Stargate carries
      the assets.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      STG is the utility and governance token of Stargate Finance, and is
      distributed as follows:
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/stgdistribution.jpg"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Unlike SYN, STG{' '}
      <Typography sx={styles.italicText} component="span">
        does
      </Typography>{' '}
      have direct value capture since a portion of the fees generated by the
      protocol is distributed to STG stakers. Thus, higher volumes on the bridge
      = more revenue for stakers, which means organic growth for the token in
      addition to any speculation. It is important to note that this feature
      hasn’t been implemented yet; however, we expect that it will go live over
      the next few months.
    </Typography>
    <Typography sx={styles.regular}>
      STG launched in March 2022 with several large backers, represented in the
      investor allocation above - 35% of the tokens are allocated between early
      investors and the team. This is quite high; however, the rest of the
      tokens are largely distributed to the public through various incentive
      programs.
    </Typography>
    <Typography sx={styles.regular}>
      We could not find a circulating supply for the token, so it is difficult
      to provide a target. Considering the launch in March 2022, and the tokens
      sold at the IDO, we believe there are around 150-170million STG currently
      circulating. With a TVL of around $780 million at the time of writing and
      a not-yet functioning product, we believe the token is vastly underpriced
      ($0.61 at present).
    </Typography>
    <Typography sx={styles.regular}>
      Due to the LayerZero protocol’s potential reach and cooperation with many
      more chains than Synapse, and the addition of revenue through staking, we
      believe that Stargate Finance can achieve a valuation at least 1.5x higher
      than the target for Synapse.
    </Typography>
    <Typography sx={styles.regular}>
      Assuming a circulating supply of 170 million STG and a target market cap
      of ~$6 billion, that puts the target for STG at around{' '}
      <Typography sx={styles.boldText} component="span">
        $35.30.
      </Typography>
    </Typography>
    <Typography sx={styles.regular}>
      Synapse and Stargate both use a combination of 3 out of the 4 solutions we
      have highlighted - bridging, elements of Layer 0 communications, and
      liquidity pools. Thus, we believe they are worthy additions to our “assets
      of interest”.
    </Typography>
  </>
);

export default withPresence({ title, description })(Forex);
