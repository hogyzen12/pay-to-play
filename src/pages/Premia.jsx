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
import premia from 'assets/image/premia.jpg';
import g1 from 'assets/image/premia/1.jpeg';
import g2 from 'assets/image/premia/2.jpeg';
import g4 from 'assets/image/premia/4.jpeg';
import g5 from 'assets/image/premia/5.jpeg';
import g6 from 'assets/image/premia/6.jpeg';
import g9 from 'assets/image/premia/9.jpeg';
import g3 from 'assets/image/premia/3.jpg';
import g10 from 'assets/image/premia/10.jpg';
import g8 from 'assets/image/premia/8.png';
import g16 from 'assets/image/premia/16.png';

const { title, description } = staticContent.meta.premia;

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

const Premia = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="md">
        <CardMedia sx={{ mb: '24px' }} component="img" src={premia} />
        <Typography sx={styles.regular}>
          Ladies and gentlemen, the time has come.
        </Typography>
        <Typography sx={styles.regular}>
          Over the coming weeks, we will be diving deep into the most promising
          DeFi derivative protocols, considering their potential, investability
          and future.
        </Typography>
        <Typography sx={styles.regular}>
          I{"'"}m no sorcerer, but after months of deep research, I{"'"}m
          confident I can leave the crystal ball at home, and still give you
          some grade-A alpha.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          These reports are really exciting to us. We cover every aspect of the
          protocol, giving you an outline of what we{"'"}re excited about, any
          concerns we have, and whether we personally would invest. Then,
          perhaps most importantly, we{"'"}ll cover what we want to see going
          forward - what would make us change our view, or reinforce it and see
          us double down.
        </Typography>

        <Typography sx={{ ...styles.title, mb: '24px' }} variant="h3">
          TLDR
        </Typography>
        <List sx={{ mb: '32px' }}>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Premia has a LOAD of value-add events in the coming
              months.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Serious alpha leaks contained in this report,
              gathered from talks with the community and team members, and
              in-depth research.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Need I say more? Let{"'"}s dig in… months.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.title} variant="h3">
          What is Premia?
        </Typography>

        <Typography sx={styles.regular}>
          Now, you{"'"}ve all read our 5-part series on derivatives in crypto -
          haven{"'"}t you?
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Well, if, for some reason, you haven{"'"}t…
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={g1} />
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Before going any further, read{' '}
          <Link
            href="https://www.cryptonary.com/research/going-to-the-moon-2022/"
            sx={styles.link}
          >
            Is This Sector Going to the Moon in 2022?
          </Link>
          ,{' '}
          <Link
            href="https://www.cryptonary.com/research/dont-lose-the-option/"
            sx={styles.link}
          >
            Don{"'"}t Lose The Option
          </Link>
          ,{' '}
          <Link
            href="https://www.cryptonary.com/research/structured-sustainable-yield/"
            sx={styles.link}
          >
            80% APY!? Is It Sustainable?
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.cryptonary.com/research/the-1-quadrillion-bet/"
            sx={styles.link}
          >
            The $1 Quadrillion Bet
          </Link>
          .
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g2} />

        <Typography sx={styles.regular}>
          Now that we{"'"}ve dealt with the slackers, let{"'"}s get to the good
          stuff.
        </Typography>
        <Typography sx={styles.regular}>
          Premia, as you know, is a DeFi option protocol. It allows users to
          provide liquidity to, or buy options from, a liquidity pool.
          Essentially, the platform performs as a mix between Deribit and
          Ribbon, except we think it does it all better.
        </Typography>
        <Typography sx={styles.regular}>
          In{' '}
          <Link
            href="https://www.cryptonary.com/research/the-1-quadrillion-bet/"
            sx={styles.link}
          >
            The $1 Quadrillion Bet.
          </Link>
          , we discuss the battle between Dopex and Premia. Now, I haven{"'"}t
          delved into the depths of Dopex yet (that is the next report),
          however, I can say with some confidence that we have a winner.
        </Typography>
        <Typography sx={{ ...styles.regular, ...styles.italicText }}>
          Pssst, it{"'"}s Premia.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          This is not set in stone, as you never know what you will uncover when
          diving deep, but I{"'"}ve discovered masses of alpha on Premia, and
          see no way Dopex could steal the crown.
        </Typography>
        <Typography sx={{ ...styles.title, mb: '32px' }} variant="h3">
          Premia Bull Case
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g3} />

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          Community governed and decentralisation focused. Community first
          approach.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Community put forward proposals and vote on all
              aspects of the protocol.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          Protocol built from the ground up to support upgradability and
          flexibility, DeFi{"'"}s &quot;money-lego&quot; ethos, and fully
          decentralised and automated functioning.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Fully upgradeable contracts mean the protocol can
              improve and adapt to anything that may be required.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}All of this means Premia can slot perfectly into the
              future of structured products, and much more, coming in DeFi.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}If you don{"'"}t know what this is such a massive
              deal, read our Why Is DeFi So Damn Impressive? crypto school
              article.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          Open and transparent in all aspects.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}From the governance process, to their impressively
              comprehensive and honest analytics page.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          Funding has been granted for 2 DOV protocols to build on top of
          Premia.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}They are going to open-source all code needed for
              others to build on Premia, opening the door for many more to use
              Premia as their base layer.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          Unrivalled user experience.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Premia offers a range of strike prices and expiry
              dates (unlike competitors) in an impressive and simple dApp, with
              much more coming in V3.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          V3.
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}It will include huge upgrades, Premia team state that
              it will &quot;bring Premia in line with centralised
              exchanges&quot; - I would argue it could make Premia better.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Full details of what it will include have not yet
              been released, but stop, limit and take-profit orders are
              expected, alongside Premia vaults, and LPs being able to choose
              the strike price and duration they wish to underwrite (and much
              more).
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.regular, ...styles.boldText }}>
          HUGE things coming up:
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}vePREMIA coming in the next 1-2 months.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}2 DOVs going live in the next few months.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}V3 coming soon, date yet to be released.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Launching on Fantom very Other chains to follow where
              there is demand.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Supporting more assets. GMX and MAGIC soon.
            </ListItemText>
          </ListItem>
        </List>

        <Typography
          sx={{ ...styles.regular, ...styles.italicText, ...styles.boldText }}
        >
          So, as you can see, there is a lot to be bullish about when it comes
          to Premia! I{"'"}m going to break down the information above…
        </Typography>

        <CardMedia sx={{ mb: '32px' }} component="img" src={g4} />

        <Typography sx={{ ...styles.title, mb: '24px' }} variant="h3">
          vePREMIA
        </Typography>
        <Typography sx={styles.regular}>
          First on the list of upgrades to Premia is vePREMIA, due to come out
          in the next couple of months.
        </Typography>
        <Typography sx={styles.regular}>
          Some of you may be familiar with ve-tokenomics, but for those that
          aren{"'"}t, here is a super-simplified explanation of how it will
          work:
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}vePREMIA is the staked version of PREMIA. vePREMIA is
              locked for a period of time, decided by the staker. The longer
              they lock their PREMIA, the more fees, voting rights and other
              rewards they earn.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}vePREMIA gives the holder voting rights. These will
              allow holders to vote on which pools the PREMIA token emissions
              will go to. You can vote to have the pool you are in receive
              additional PREMIA rewards. This hopes to inspire a Curve wars type
              situation.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}TL:DR - Premia tokens locked up, bullish for price
              action.
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          Right, let me clear something up. The details of this are being
          released in the coming days. What I have said above is an educated
          guess (from conversations with the team) on the very basics of what it
          will involve.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          I don{"'"}t want anyone turning up at my house saying “that{"'"}s not
          how it worked” or “you missed this out”. I will update you guys when
          they have released the details, and include a link here.
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g5} />

        <Typography sx={styles.regular}>
          Got it? Good. Let{"'"}s be friends again…
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.italicText, mb: '32px' }}
        >
          Side note - Dopex are also doing a ve-tokenomics model. It will be
          interesting to see how these play out between both platforms.
        </Typography>

        <Typography sx={styles.title} variant="h3">
          Coming Soon to V2
        </Typography>

        <Typography sx={styles.regular}>
          In preparation for V3, Premia are upgrading aspects of V2 where
          possible.
        </Typography>
        <Typography sx={styles.regular}>
          There will be yield-bearing pools that will use the collateral
          deposited to the pool to earn additional yield (it normally sits there
          until options are exercised). Starting by integrating yearn vaults for
          stablecoin collateral (used to underwrite puts) and a couple of
          different versions of staked ETH. The team are working on the
          contracts for this at the moment, and they are expected to be ready
          very soon.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          The user experience will be improved throughout, including a dashboard
          detailing all updates since you last visited the platform (tied to
          your wallet). This is expected in the next few weeks.
        </Typography>
        <Typography sx={{ ...styles.title, mb: '24px' }} variant="h3">
          V3
        </Typography>
        <Typography sx={styles.regular}>
          This is the big daddy of what{"'"}s coming up for Premia. Version 3 of
          the platform.
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g6} />

        <Typography sx={styles.regular}>
          LPs will be able to select the strike price and duration of options
          they would like to sell (there will still be an option to have this
          done automatically for you), which will allow the DOVs building on top
          of Premia to directly connect with Premia{"'"}s pool liquidity
          (providing extra liquidity) and purchase options on the platform (as
          some DOV strategies may require purchasing options).
        </Typography>
        <Typography sx={styles.regular}>
          Options buyers will have a range of tools, likely including stop,
          limit and take profit orders. This is something that we haven{"'"}t
          seen in DeFi options before.
        </Typography>
        <Typography sx={styles.regular}>
          Premia vaults will be released, one of which we expect to have some
          form of delta-hedging, the other will look to take advantage of
          arbitrage opportunities. The form the vaults will take is unknown, as
          they have yet to share details, but we are very excited. Delta-hedging
          is an issue we are yet to see addressed in DeFi, and we think it{"'"}s
          a vital part of the puzzle.
        </Typography>
        <Typography sx={styles.regular}>
          Full details of what is coming in V3 will be covered in an article
          Premia are posting in the coming weeks! We will link it here when
          released.
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          But Max, What Does This Mean?
        </Typography>
        <Typography sx={styles.regular}>
          The Premia team state that V3 will bring DeFi options on par with
          their centralised counterparts. The user experience on Premia is
          already vastly better than Deribit and DeFi competitors, now think
          about what is possible with these extra features…
        </Typography>
        <Typography sx={styles.regular}>
          In my opinion, this won{"'"}t bring Premia on par. This will make
          Premia better! For more details on why, check out our crypto school
          article{' '}
          <Link
            href="https://www.cryptonary.com/cryptoschool/guide-why-is-defi-so-damn-impressive/"
            sx={styles.link}
          >
            Why Is DeFi So Damn Impressive?
          </Link>
          , and our article on{' '}
          <Link
            href="https://www.cryptonary.com/research/structured-sustainable-yield/"
            sx={styles.link}
          >
            DeFi Options Vaults
          </Link>
          .
        </Typography>
        <Typography sx={styles.regular}>
          Remember this from &quot;
          <Link
            href="https://www.cryptonary.com/research/dont-lose-the-option/"
            sx={styles.link}
          >
            Don{"'"}t Lose The Option
          </Link>
          &quot; ?
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g8} />

        <Typography sx={{ ...styles.regular, ...styles.italicText }}>
          Currently, Deribit accounts for around 88% of BTC options volume
          (above, dark blue = Deribit), and 96% of ETH.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Now, imagine Premia taking even a small % of that market share!{' '}
          <Box sx={styles.boldText} component="span">
            MEGA BULLISH
          </Box>
          . This without considering the general shift we are seeing from CeFi
          to DeFi.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Expanding Chain and Asset Offering
        </Typography>
        <Typography sx={styles.boldText}>Current Chains:</Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}Ethereum</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}Arbitrum</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}Fantom very soon…</ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.boldText}>Current Assets:</Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Ethereum & Arbitrum:
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <List>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}ETH</ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}BTC</ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}YFI</ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}LINK</ListItemText>
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText sx={styles.italicText}>
              &#9679;{'  '}Ethereum only:
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <List>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}LUNA</ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}ALCX</ListItemText>
              </ListItem>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>&#9679;{'  '}alETH</ListItemText>
              </ListItem>
            </List>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          The team will go wherever there is demand, and encourage users to put
          forward proposals, through their governance page, if they{"'"}d like
          to see a specific asset or chain supported! The level of community
          involvement and encouragement in Premia is refreshing!
        </Typography>
        <Typography sx={styles.regular}>
          As a side note, Neon Labs are working on making Solana Ethereum
          Virtual Machine (EVM) compatible. If there is demand, and Neon Labs
          succeed, Premia wouldn{"'"}t have any issue adding Solana to their
          arsenal.
        </Typography>
        <Typography sx={styles.regular}>
          GMX and MAGIC support coming soon, and Premia are in talks with
          Tokemac and OHM. We can expect, as long as there is demand, constant
          progress when it comes to new assets.
        </Typography>
        <Typography>
          There is an incentive for protocols to approach Premia for listings,
          as their POOL (Protocol Owned Options Liquidity) can form part of the
          protocol{"'"}s treasury management, without them having to pay the
          fees that other vaults charge for the service.
        </Typography>

        <List sx={{ mb: '32px' }}>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Details on POOL at the end of{' '}
              <Link
                href="https://blog.premia.finance/self-repaying-option-pools-c7c55f26e591"
                sx={styles.link}
              >
                this article
              </Link>
              .
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={{ ...styles.title, mb: '32px' }} variant="h3">
          DOV Funding and Integration
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g9} />

        <Typography sx={styles.regular}>
          Liquidity is an issue that plagues DeFi option protocols, Hegic{"'"}s
          has been steadily dropping, Dopex has masses but can{"'"}t find demand
          to put it to use. Premia has kept relatively stable, but I couldn{"'"}
          t see how they were going to attract more liquidity, which will be
          needed when buyer demand comes knocking.
        </Typography>
        <Typography sx={styles.regular}>
          That was until I dug into V3 vaults, and found out they were funding
          not 1, but 2 DOV/structured product protocols, both building directly
          on top of Premia!
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.italicText, ...styles.boldText }}
        >
          I strongly recommend clicking the links below and reading the
          proposals!
        </Typography>
        <Typography sx={styles.regular}>
          <Link
            href="https://gov.premia.finance/#/proposal/0x671986784d3d842884e0ca5cabefcc0773c16f686ebc0aaed78ed0f32ea03b00"
            sx={styles.link}
          >
            Vaults.Pro
          </Link>{' '}
          were granted 235,000 Euros to build an actively managed vault
          protocol, where anyone can design a strategy for others to deposit
          into. This democratises access to complicated and often high yielding
          strategies. It{"'"}s something others are working on, but it{"'"}s yet
          to be seen in practice.
        </Typography>
        <Typography sx={styles.regular}>
          <Link href="https://www.argent.xyz/" sx={styles.link}>
            Fort Knox Vaults
          </Link>{' '}
          will receive $250,000 and 50,000 PREMIA to build a passive vault DOV
          protocol, similar to traditional DOVs such as Ribbon and Friktion. We
          expect to see the first version of Fort Knox Vaults live in around 2
          months, and as far as I{"'"}m aware, it will be the 1st DOV protocol
          on Arbitrum.
        </Typography>
        <Typography sx={styles.regular}>
          Fort Knox Vaults will also distribute 20% of revenue back to Premia
          treasury (and there is discussion of having this go directly to PREMIA
          stakers).
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.italicText, ...styles.boldText }}
        >
          As part of the agreement, both teams will be open-sourcing code needed
          for other protocols to easily build on top of Premia.
        </Typography>
        <Typography sx={styles.regular}>
          This is an absolute game-changer in my opinion, it unlocks massive
          potential, and secures Premia a spot in the future of DeFi, provided
          all goes to plan.
        </Typography>
        <Typography sx={styles.regular}>
          Oh, and of course, these protocols built on top of Premia could one
          day decide to release tokens. If they do, there could be an
          opportunity there…
        </Typography>
        <Typography
          sx={{
            ...styles.regular,
            ...styles.italicText,
            ...styles.boldText,
            mb: '32px',
          }}
        >
          It Not All Sunshine and Rainbows
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g10} />

        <Typography sx={styles.regular}>
          Yes, alas, I have to be a Debbie Downer (or Negative Nelly) for a
          moment.
        </Typography>
        <Typography sx={styles.regular}>
          Until V3 is released, these protocols won{"'"}t be able to add
          liquidity or buy options from Premia.
        </Typography>
        <Typography sx={styles.regular}>
          This is solved by V3, but I must add a cautionary note before we get
          too excited.
        </Typography>
        <Typography sx={styles.regular}>
          Fort Knox Vaults gives Premia exclusivity for 3 months, after which
          &quot;strategies will become more complex and thus additional
          protocols will need to be utilised&quot;.{' '}
          <Link href="https://www.vaults.pro/" sx={styles.link}>
            Vaults.Pro
          </Link>{' '}
          does not have an exclusivity clause.
        </Typography>
        <Typography sx={styles.regular}>
          I know the teams of both protocols are in close contact with Premia,
          and fully expect them to utilise Premia when V3 is released. However,
          we have yet to see Premia{"'"}s unique options pricing model used on a
          large scale, or with DOVs involved.
        </Typography>
        <Typography sx={styles.regular}>
          We will be keeping a close eye on Premia post Fort Knox and{' '}
          <Link href="https://www.vaults.pro/" sx={styles.link}>
            Vaults.Pro
          </Link>{' '}
          launch. Should the pricing model stand the test, this would give other
          protocols the green light to build atop Premia, and could open the
          flood gates.
        </Typography>
        <Typography sx={styles.regular}>
          If this goes pear-shaped, and issues arise (for example excess DOV
          liquidity isn{"'"}t matched by buy-side demand, and LPs on the
          protocols earn minimal returns for a sustained period of time), we
          will have to see how Premia address the issues.
        </Typography>
        <Typography sx={styles.regular}>
          If there are sustained issues, it is likely{' '}
          <Link href="https://www.vaults.pro/" sx={styles.link}>
            Vaults.Pro
          </Link>{' '}
          and Fort Knox would look to provide liquidity and buy options
          elsewhere.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          The Premia team is an incredibly strong unit, and we often see
          teething issues in protocol growth. If issues arise, I{"'"}m confident
          they will iterate and address them, but this is something we will be
          keeping an eye on.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Upgradeability
        </Typography>
        <Typography sx={styles.regular}>
          Below is a quote from the Premia docs:
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          “Option markets are hard to predict — indeed, the future is hard to
          predict. For this reason, the Premia contracts, including the
          liquidity pools, are fully upgradeable. New third-party integrations,
          gas optimizations resulting from new EVM features, and other
          unforeseen opportunities are all on the table. The upgrade process
          will be subject to extensive audit and approval by the Premia DAO.”
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Updated Fee Structure
        </Typography>
        <Typography sx={styles.regular}>
          The 3% fee on options purchase remains, but the 3% exercise fee on
          profits has been scrapped. This was a sticking point for us, as it
          made the platform more expensive than others. We{"'"}re crying no
          tears for its loss.
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Instead, they have introduced a 2.5% annualised utilisation fee, which
          will be paid by liquidity providers (LPs). This works out at around
          0.2% per month the capital is being used, FAR less than the LP earns,
          and considerably lower than competing vaults charge.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Options Trading
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Sell Back to Pool
        </Typography>
        <Typography sx={styles.regular}>
          An innovative addition, options buyers can now sell their options back
          to the pool, this allows them to benefit from the time value
          (extrinsic value - options worth more if expiry is further in the
          future), rather than just receiving the intrinsic value (asset current
          price -option strike price).
        </Typography>
        <Typography sx={styles.regular}>
          LPs can opt-in to this, which will allow them to buy back options from
          the pool, freeing their capital for use or reinvestment. Essentially,
          LPs will act as market makers if they opt-in.
        </Typography>
        <Typography sx={styles.regular}>
          As the buyback price is calculated with 70% of the extrinsic value,
          this allows LPs to earn a spread every time, generating additional
          yield.
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Auto Exercising - Protects LP Capital Efficiency
        </Typography>
        <Typography sx={styles.regular}>
          Options on Premia are automatically exercised 24 hours after expiry.
          This ensures options buyers get their returns, and LPs get their
          capital back so they can keep earning with it. A massive selling point
          vs Hegic, as if your options expire on Hegic without you exercising
          them, you lose any potential gains!
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Any Asset Purchasing
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Users are able to purchase options or provide liquidity with any
          asset, directly on the Premia dApp (as long as there is DEX
          liquidity). The protocol swaps assets for them, and purchases the
          option or deposits liquidity, bundling all transactions into 1, saving
          on gas fees and removing layers of complexity.
        </Typography>
        <Typography sx={{ ...styles.title, lineHeight: '32px' }} variant="h3">
          Pricing, Volatility Surface Oracles and Pool Utilisation
        </Typography>
        <Typography>
          Premia options pricing is calculated fully on-chain (removing
          centralisation that we see among many competitors), using the
          &quot;C-value&quot;, a supply and demand-based pricing model,
          alongside Premia{"'"}s Volatility Surface Oracle. These get quite
          complex and are out of the scope of this report, but if you{"'"}d like
          to find out more check out Premia{"'"}s docs:
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{' '}
              <Link
                href="https://docs.premia.finance/pricing/option-pricing/the-pricing-model"
                sx={styles.link}
              >
                https://docs.premia.finance/pricing/option-pricing/the-pricing-model
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}
              <Link
                href="https://docs.premia.finance/pricing/implied-volatility/volatility-surface-oracle"
                sx={styles.link}
              >
                https://docs.premia.finance/pricing/implied-volatility/volatility-surface-oracle
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}
              <Link
                href="https://docs.premia.finance/pricing/capital-pricing-initial-liquidity-not-an-issue"
                sx={styles.link}
              >
                https://docs.premia.finance/pricing/capital-pricing-initial-liquidity-not-an-issue
              </Link>
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          Essentially, what this means, is that Premia{"'"}s option prices flex
          with the supply and demand on the platform. If people are depositing
          into the pools, but no one is buying the options, the option prices
          drop. The same is true the other way around, prices increase if demand
          outweighs supply.
        </Typography>
        <Typography sx={{ ...styles.regular, ...styles.italicText }}>
          If you{"'"}d like more details on how this works, feel free to DM me
          or the Cryptonary account on Discord!
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Potential Issues
        </Typography>
        <Typography sx={styles.regular}>
          Oh look, Debbie Downer is back…
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography sx={styles.regular}>
          Like it or not, when assessing a protocol we have to play devil{"'"}s
          advocate and think about every possible situation. This is not a
          concern currently, but something to keep in mind.
        </Typography>
        <Typography sx={styles.regular}>
          As discussed earlier, we haven{"'"}t yet seen this pricing model
          tested on a large scale. We don{"'"}t know how it will behave when
          DOVs are integrated, or if a sustained spike in demand would drive
          customers elsewhere (due to high prices).
        </Typography>
        <Typography sx={styles.regular}>
          We also don{"'"}t know how this model will affect pool utilisation
          (the % of capital in the pools that is being used to underwrite
          options), as whilst independent to a certain extent, when utilisation
          holds above 50-60%, it is likely that Premia{"'"}s options will be
          priced higher than the rest of the market. In many markets, this won
          {"'"}t be an issue, as Premia is the only protocol selling those
          options, but in BTC and ETH markets, high pool utilisation may drive
          buyers elsewhere.
        </Typography>
        <Typography sx={styles.regular}>
          This gives us a bit of a catch 22 situation, where we want high pool
          utilisation as that benefits LPs (as the capital is used efficiently)
          which will bring more capital to the platform. But, having high
          utilisation would likely bring the C-value up, increasing option
          prices and potentially driving buyers elsewhere.
        </Typography>
        <Typography sx={styles.regular}>
          To an extent, this is by design, as it means there shouldn{"'"}t be
          excess demand the platform can{"'"}t cope with (disincentivising
          purchasing options when liquidity is low by increasing price), or
          excess liquidity sitting idle in the pools (incentivising purchasing
          options when liquidity is high by lowering prices).
        </Typography>
        <Typography sx={styles.regular}>
          Also, it allows buyers to get below-market priced options. With the
          new order styles in V3, users will be able to place orders that will
          be triggered when the option is priced below market. This is a great
          tool for buyers, allowing them to snatch up cheap options when
          available, and ensuring balanced supply and demand.
        </Typography>
        <Typography sx={styles.regular}>
          As this pricing model hasn{"'"}t been battle-tested, it is vital we
          keep a close eye on how it affects supply and demand on the protocol.
          For example, one thing we will be looking at is where pool utilisation
          naturally settles (the point at which buyers and sellers are matched).
          If that happens to be around 70% (for argument{"'"}s sake), how would
          that affect LPs capital efficiency? Is Premia a better option than
          competitors for LP returns? Are buyers happy with price at this level?
          That all needs to be taken into account.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Note, this is not a concern for us as it stands, and there are many
          tools that could be used to address issues if they arise, but it is
          important I run you through my logic.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Tokenomics / Vesting
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}30% Cross-Chain Liquidity Mining Fund
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}20% Development Fund</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}10% Safety / Insurance Module
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}10% Initial Distribution</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}10% Founder Allocation</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}10% Future Incentives Program
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}5% Marketing and Education Fund
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}5% Ecosystem Grants Fund</ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          Tokens are very evenly distributed, there are some big holders, but
          none of concerning size. You can check out the wallet holders on{' '}
          <Link
            href="https://etherscan.io/address/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70"
            sx={styles.link}
          >
            Ethereum here
          </Link>
          , and on{' '}
          <Link
            href="https://arbiscan.io/address/0x51fc0f6660482ea73330e414efd7808811a57fa2"
            sx={styles.link}
          >
            Arbitrum here
          </Link>
          .
        </Typography>
        <Typography sx={styles.regular}>
          One thing for us to bear in mind in team vesting, 10% of the total
          supply, equal to the entire circulating supply at the moment, is set
          aside for the team. This is due to be released in around 1 year,
          which, if sold, could flood the market.
        </Typography>
        <Typography sx={styles.regular}>
          This is not a concern at the moment, firstly the team are interested
          in the success of the protocol, not a payday. However, in crypto, we
          should never rely on trust!
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          The team are expected to delay their token unlock, which we will be
          keeping an eye out for. If this doesn{"'"}t happen, we{"'"}ll consider
          what implications this could have closer to the time, and potentially
          hedge against potential downside should there be selling pressure.
        </Typography>
        <Typography sx={{ ...styles.title, lineHeight: '32px' }} variant="h3">
          Current Market Cap vs Fully Diluted Value - Should We Worry?
        </Typography>
        <Typography sx={styles.regular}>
          PREMIA circulating supply sits at just over 10.5m at the time of
          writing (4th April 2022), out of a total supply of 100m.
        </Typography>
        <Typography sx={styles.regular}>
          I know that sounds scary, but don{"'"}t panic!
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography sx={styles.regular}>
          Inflation is low, at around 1.5 PREMIA per Ethereum block, which works
          out at around 9,969 PREMIA per day, or 3,638,769 PREMIA per year. The
          tokens will be released over more than 10 years, so we won{"'"}t see a
          flood of tokens.
        </Typography>
        <Typography sx={styles.regular}>
          At just over 3.5m PREMIA per year, that does give us an inflation rate
          of around 35%, not including team tokens or development grants/funds.
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Whilst this is a high inflation rate, the current market cap and
          growth potential leave us feeling pretty zen.
        </Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography sx={styles.regular}>
          In fact, there is a discussion amongst the community at the moment,
          considering the benefits of a token burn for excess supply. The team
          fully support this idea and will go with whatever the community
          decides.
        </Typography>
        <Typography>
          48m tokens are set aside for development purposes, split in the
          following way:
        </Typography>

        <List>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}~8M liquidity mining fund</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}20M development/growth fund
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}5M Marketing / Education fund
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>&#9679;{'  '}5M Ecosystem Grants fund</ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}10M Future incentives program
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.regular}>
          The decentralised manner of decision making means you don{"'"}t have
          to worry about what these will be used for; the community will vote on
          that. But perhaps there will be a proposal soon to burn some of that
          supply? 👀
        </Typography>
        <Typography sx={styles.regular}>
          If this doesn{"'"}t happen, we know those funds will go to good use
          improving the protocol, so it{"'"}s a win-win.
        </Typography>
        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          TL:DR of above - circulating supply vs fully diluted value (FDV) is
          not any major concern (despite FDV being around 10x current
          circulating supply). Low relative inflation rate and community
          decision making put our minds at ease.
        </Typography>

        <Typography sx={styles.title} variant="h3">
          What We{"'"}d Like To See
        </Typography>

        <List sx={{ mb: '32px' }}>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Word is starting to spread about the protocol. Over
              the coming months, we want to see Premia marketing step up and
              generate some serious hype to match the impressive offering Premia
              is crafting. We{"'"}d like to see V3 hit the ground running, and
              Premia grow consistently from there.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}vePREMIA details, and performance in practice. We
              know the theory behind it, tokens get locked up for additional
              rewards and voting power, meaning more PREMIA is locked and number
              goes up. But as with any big change, we would need to monitor how
              this works in practice.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}Pricing model battle testing.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}DOV successful integration.
            </ListItemText>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <List>
              <ListItem sx={{ padding: '0 0 0 16px' }}>
                <ListItemText>
                  &#9679;{'  '}Monitoring the impact the DOVs have will also be
                  vital.
                </ListItemText>
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ padding: '0 0 0 16px' }}>
            <ListItemText>
              &#9679;{'  '}V3 - we are yet to find out what will be involved,
              and the same as vePREMIA, we would want to see how this goes in
              practice
            </ListItemText>
          </ListItem>
        </List>

        <Typography sx={styles.title} variant="h3">
          Technical Analysis
        </Typography>
        <Typography
          sx={{ ...styles.regular, ...styles.boldText, ...styles.italicText }}
        >
          Before diving into the TA, note that we have looked at Premia{"'"}s
          fundamentals, and they are impressive. With a mid-long investment
          horizon, short term price action shouldn{"'"}t hold much weight.
        </Typography>
        <Typography sx={styles.regular}>PREMIA, 1D time frame</Typography>

        <CardMedia sx={{ mb: '24px' }} component="img" src={g16} />

        <Typography sx={{ ...styles.regular, mb: '32px' }}>
          Same as many other altcoins, PREMIA has experienced buying pressure
          due to BT{"'"}s recent run (from 37k up to 48k) but is now testing the
          $2.10 resistance level. The closest support is around $1, which can be
          considered a huge demand area for PREMIA. If PREMIA manages to break
          its previous high ($2.5) by a daily closure above it, then we would be
          looking at a possible reversal in market structure, from bearish to
          bullish. If that happens, then the next resistance area to look out
          for is around $3.5. Volume has been average for now, we want to see a
          strong break out above the $2.5 resistance, backed by high buying
          volume.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Conclusion
        </Typography>
        <Typography sx={styles.regular}>
          I{"'"}ve gone into a lot of detail above, so I{"'"}m going to keep
          this short and sweet…
        </Typography>
        <Typography sx={styles.regular}>
          There is a succession of value-adding events, and the market hasn{"'"}
          t priced them in yet in my opinion. Premia is relatively under the
          radar at the moment, and I believe vePREMIA, DOV integration (and
          open-sourcing code for future integrations) and V3 are a superpowered
          catalyst. Should these changes be successfully implemented, PREMIA is
          primed and loaded for a stratospheric run.
        </Typography>
      </AppContainer>
    </>
  );
};

export default Premia;
