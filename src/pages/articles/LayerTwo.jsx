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

const { title, description } = staticContent.meta.layer;

const LayerTwo = ({ styles }) => (
  <>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Layer-2-Ecosystem-Update.png"
      component="img"
    />

    <Typography sx={styles.regular}>Yes, you heard it correctly!</Typography>
    <Typography sx={styles.regular}>
      All the Layer-2 Alpha in one simple report.
    </Typography>
    <Typography sx={styles.regular}>
      Major activities, outlooks, and updates that are bound to happen
      throughout the year in the L2 ecosystem can be found in this report. Pure
      Alpha regarding Arbitrum, Optimism, StarkWare ecosystem, and zkSync.
    </Typography>
    <Typography sx={styles.regular}>
      This report will serve as the foundation for all future updates. The
      report will be updated whenever Alpha is about to drop in the market. To
      avoid missing out, keep your Discord notifications turned on, whenever we
      post an update in the{' '}
      <Typography sx={styles.boldText} component="span">
        Pro Channel
      </Typography>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Let’s get started!
    </Typography>
    <Typography sx={styles.title} variant="h3">
      TLDR
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}We speculate that Arbitrum will soon drop their native
          token.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Arbitrum Odyssey
          </Typography>{' '}
          will open up big exposure to everyone for the airdrop. Free NFTs in
          exchange for usage.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}There are many dApps in the Arbitrum ecosystem that are
          token-less (airdrop?)
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Optimism’s native token (OP) is currently trading live.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}20 million OP tokens were hacked & stolen, but 17 million
          of those tokens have been restored.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          StarkGate: the Ethereum{'<>'}StarkNet bridge is live
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}StarkNet & zkSync ecosystems have exceeded 100 projects.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Airdrop Alpha below!
          </Typography>{' '}
          🪂 👀
        </ListItemText>
      </ListItem>
    </List>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Arbitrum-Ecosystem.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Arbitrum is the most popular Ethereum scaling solution with the highest
      network activity. Arbitrum works perfectly fine with a fantastic user
      experience. But, Arbitrum does not have a native token{' '}
      <Typography sx={styles.boldText} component="span">
        yet
      </Typography>
      .
    </Typography>
    <Typography sx={styles.regular}>
      With Arbitrum’s ongoing development and the launch of Optimism’s native
      token (OP), we believe that these events will persuade Arbitrum to drop
      its native token very soon. Very likely in the upcoming months. With token
      launches, airdrops have become the go-to standard.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      So, how do we qualify for the Arbitrum airdrop? let’s dive 👇
    </Typography>
    <Typography sx={styles.title} variant="h3">
      The Arbitrum Odyssey
    </Typography>
    <Typography sx={styles.regular}>
      The Arbitrum Odyssey is an 8-week event that allows users to try out and
      use apps in the Arbitrum ecosystem, for a chance to win 17
      Arbitrum-exclusive free-mint NFTs.{' '}
      <Typography sx={styles.boldText} component="span">
        We anticipate that these NFTs will factor in the airdrop qualification
        process - try out the dApps, get free Arbitrum NFTs, and increase your
        odds to be eligible for an airdrop
      </Typography>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The NFT artists are{' '}
      <Link
        sx={styles.link}
        href="https://twitter.com/ratwell0x"
        target="_blank"
      >
        Ratwell
      </Link>{' '}
      &{' '}
      <Link
        sx={styles.link}
        href="https://twitter.com/sugoiNFT"
        target="_blank"
      >
        Sugoi
      </Link>
      .
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Timeline
    </Typography>
    <Typography sx={styles.regular}>
      The event will officially start on Tuesday, June 21st, 2022 at 1 pm EST.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Arbitrum-Odyssey-2.png"
      component="img"
    />
    <Typography sx={styles.title} variant="h3">
      The Whole Journey
    </Typography>
    <Typography sx={styles.regular}>
      There are 15 dApps included in the event that has been selected via
      snapshot votes by the community.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/dApps-in-Arbitrum.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Week 1 of the event will involve transferring ETH to Arbitrum via the
      Arbitrum bridge, centralised exchanges, or fiat-on-ramps, to begin the
      onboarding process.
    </Typography>
    <Typography sx={styles.regular}>
      Exchanges & fiat-on-ramps that support Arbitrum:
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/CEXs-in-Arbitrum-Odyssey.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Users who use the most popular decentralised bridge that everyone else
      uses will receive a bonus NFT. Bridge usage is judged by volume.
    </Typography>
    <Typography sx={styles.regular}>
      Decentralised bridges that support Arbitrum:
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Decentralised-bridges-on-Arbitrum.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Once onboarding week is over, the journey will begin from week 2 until
      week 8.
    </Typography>
    <Typography sx={styles.regular}>
      2 projects will task their users to complete an on-chain task, specific to
      their protocol - i.e. lending, borrowing, providing liquidity, or buying
      an NFT.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      This is what the entire event will look like during the 8 weeks:
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 1: Bridge Week and{' '}
      <Link sx={styles.link} href="https://www.hashflow.com/" target="_blank">
        Hashflow
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 2:{' '}
      <Link sx={styles.link} href="https://yieldprotocol.com/" target="_blank">
        Yield Protocol
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 3:{' '}
      <Link sx={styles.link} href="https://aboard.exchange/" target="_blank">
        Aboard Exchange
      </Link>
      ,{' '}
      <Link sx={styles.link} href="https://tofunft.com/" target="_blank">
        TofuNFT
      </Link>
      &{' '}
      <Link sx={styles.link} href="https://gmx.io/" target="_blank">
        GMX
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 4:{' '}
      <Link sx={styles.link} href="https://uniswap.org/" target="_blank">
        Uniswap
      </Link>
      and{' '}
      <Link
        sx={styles.link}
        href="https://app.apex.exchange/trade"
        target="_blank"
      >
        Apex
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 5:{' '}
      <Link sx={styles.link} href="https://app.1inch.io/" target="_blank">
        1inch
      </Link>
      and{' '}
      <Link sx={styles.link} href="https://izumi.finance/home" target="_blank">
        Izumi/ Yin Finance
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 6:{' '}
      <Link
        sx={styles.link}
        href="https://app.dodoex.io/?from=ETH&to=USDC"
        target="_blank"
      >
        Dodo
      </Link>
      and{' '}
      <Link sx={styles.link} href="https://swapr.eth.link/#/" target="_blank">
        Swapr
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 7:{' '}
      <Link sx={styles.link} href="https://treasure.lol/" target="_blank">
        TreasureDAO
      </Link>
      and{' '}
      <Link sx={styles.link} href="https://www.battlefly.game/" target="_blank">
        Battlefly
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Week 8:{' '}
      <Link sx={styles.link} href="https://ideamarket.io/" target="_blank">
        Ideamarket
      </Link>
      and{' '}
      <Link sx={styles.link} href="https://sushi.com/" target="_blank">
        Sushi
      </Link>
      .
    </Typography>
    <Typography sx={styles.regular}>
      Users will claim Arbi-verse NFTs for completion of every task,
      representing their involvement. Claims will take place on Project Galaxy’s
      website here, after the end of each week. The mints will be completely
      free, but you will need ETH on Arbitrum to pay the transaction fee to
      claim the free NFT.
    </Typography>
    <Typography sx={styles.regular}>
      If a user collects at least 12 of the 15 NFTs along the way, they will
      receive a final prize NFT, indicating that their journey into the
      Arbi-verse is complete.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText, mb: '32px' }}>
      Participating in the event for 8 weeks should increase your chances of
      qualifying for an airdrop. However, it will cost at least $100 to do so.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      More Airdrops 🪂
    </Typography>
    <Typography sx={styles.regular}>
      Many dApps in the Arbitrum ecosystem are token-less, and can be used to
      get an airdrop from the protocol itself:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://across.to/"
          target="_blank"
        >
          {'  '} Across.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://www.riskharbor.com/"
          target="_blank"
        >
          Risk Harbor.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://www.cozy.finance/"
          target="_blank"
        >
          Cozy Finance.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://zapper.fi/dashboard"
          target="_blank"
        >
          Zapper.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://zerion.io/"
          target="_blank"
        >
          Zerion.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://app.slingshot.finance/"
          target="_blank"
        >
          Slingshot.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://gnosis-safe.io/"
          target="_blank"
        >
          Gnosis Safe.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://app.hashflow.com/"
          target="_blank"
        >
          Hashflow.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://app.volmex.finance/mint"
          target="_blank"
        >
          Volmex.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://www.orbiter.finance/"
          target="_blank"
        >
          Orbiter Finance.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://www.predy.finance/"
          target="_blank"
        >
          Preddy Finance.
        </Link>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        &#9679;{'  '}
        <Link
          sx={{ ...styles.link, paddingLeft: '8px' }}
          href="https://twistercash.xyz/"
          target="_blank"
        >
          Twister Cash.
        </Link>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      These dApps haven’t announced if they are releasing tokens, but trying
      them out on Arbitrum L2 is worth a shot. More L2 activity, more chance of
      receiving an Arbitrum token, and a token from each dApp.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText, mb: '32px' }}>
      These dApps are still in their early stages of development, so experiment
      with small amounts first.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Arbitrum Nitro
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Arbitrum-Nitro.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Arbitrum Nitro is a network upgrade that will update the current Arbitrum
      mainnet – Arbitrum One.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Nitro will eventually migrate with Arbitrum One. Currently, this upgrade
      is in its initial stage. When the migration happens, the only things users
      will notice are reduced fees and an overall faster experience.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      XDEFI Wallet Integration
    </Typography>
    <Typography sx={styles.regular}>
      XDEFI is a non-custodial wallet that allows you to store, swap, and send,
      Crypto assets and NFTs across 12 different blockchains – multichain.
    </Typography>
    <Typography sx={styles.regular}>
      Arbitrum is now integrated into XDEFI wallet. Users can now send and
      receive any Arbitrum token on any L2 dApp, that is supported by XDEFI.
    </Typography>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/XDEFI-Wallet-on-Arbitrum.png"
      component="img"
    />
    <Typography sx={styles.regular}>
      Try out XDEFI Wallet{' '}
      <Link
        sx={styles.link}
        href="https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf?hl=en"
        target="_blank"
      >
        here
      </Link>
      .
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText, mb: '32px' }}>
      Whether a token drops or not, it is great to dive into the ecosystem to
      explore new products, and potentially be awarded an airdrop.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Optimism (OP)
    </Typography>
    <Typography sx={styles.regular}>
      Optimism is the second largest Ethereum scaling solution, and they have
      recently made big progress in its development.
    </Typography>
    <Typography sx={styles.regular}>
      On April 6th, Optimism announced its native token (OP) for governance. OP
      entered the market on May 31st and is trading on major CEXs and DEXs.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Optimism-OP-price.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      However, it was not the most spectacular launch in history. Hours before
      the official launch and airdrop claim announcement, some people snuck in
      and claimed their OP airdrop early, and dumped them in the market, causing
      the price of OP to plummet.
    </Typography>
    <Typography sx={styles.regular}>
      Furthermore, on June 9th, a hacker stole 20 million OP tokens. The hacker
      sold 1 million OP tokens, further depressing the price. Fortunately, 17
      million OP were restored on June 10th. The hacker returned the 17 million
      OP while keeping the other 2 million OP for himself.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Only 56.09% of users claimed their OP airdrop tokens.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Integrations
    </Typography>
    <Typography sx={styles.regular}>
      Optimism’s ecosystem now includes Balancer X, Beethoven X, and Sushi.
      These dApps are now usable on Optimism Layer-2.
    </Typography>
    <Typography sx={styles.regular}>
      The Optimistic network is now supported by Binance, Bitget, Huobi, KuCoin,
      and MEXC Global. Optimism users can deposit and withdraw using centralised
      exchanges.
    </Typography>
    <Typography sx={styles.regular}>
      Many exchanges and protocols now support the Optimistic network, resulting
      in more network activity and usage by users, which impacts the price of
      OP.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/OP-impact-on-TVL.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      We will delve deeper into Optimism and OP in a separate report. Stay tuned
      for an announcement.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      StarkWare Ecosystem
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/StarkWare.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      StarkWare is a company that utilizes 2 scaling solutions, StarkEx &
      StarkNet.
    </Typography>
    <Typography sx={styles.regular}>
      StarkWare is extremely valued high at $8B! with no token, and activity is
      only StarkEx (90% from dYdX).
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      StarkNet has been building so much in this bear market with very huge
      potential.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      StarkNet
    </Typography>
    <Typography sx={styles.regular}>
      StarkNet has more potential than StarkEx, because it is versatile. On
      StarkNet, you can create a wide range of dApps, such as a DEX, bridges,
      games, and virtually any other type of application. Because of its
      architecture, StarkEx does not support this ability.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/StarkNet-Ecosystem-1536x700.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The ecosystem is vast, but no dApps are live. They are still in
      development and testing.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      StarkGate
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/StarkGate.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      StarkGate was officially launched on May 5th, and over 300 ETH have been
      bridged over so far.
    </Typography>
    <Typography sx={styles.regular}>
      Try out the bridge{' '}
      <Link
        sx={styles.link}
        href="https://starkgate.starknet.io/"
        target="_blank"
      >
        here
      </Link>
      . However, you do need an Argent wallet. Argent supports StarkNet on PC
      only, but not smartphones.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Try out Argent wallet{' '}
      <Link sx={styles.link} href="https://www.argent.xyz/" target="_blank">
        here
      </Link>
      . Recommended for a fantastic user experience. Argent does not have a
      token, and its usage has increased dramatically with L2 development.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Integrations
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      Maker
    </Typography>
    <Typography sx={styles.regular}>
      MakerDAO recently integrated with Starknet. The StarkNet DAI bridge is now
      operational on StarkGate, and over 74K DAI are deployed on StarkNet.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      LayerSwap
    </Typography>
    <Typography sx={styles.regular}>
      LayerSwap allows users to bridge ETH directly from a CEX over to StarkNet,
      through gasless transfers.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/LayerSwap.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      LayerSwap supports every major CEX, Binance, FTX, Coinbase, Bittrex
      Global, KuCoin, Crypto.com, Huobi, Okex, Bitfinex and Kraken.
    </Typography>
    <Typography sx={styles.regular}>
      LayerSwap also supports Arbitrum, Optimism & zkSync.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      LayerSwap is token-less.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Immutable X
    </Typography>
    <Typography sx={styles.regular}>
      Immutable X is an NFT marketplace live on StarkEx.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Immutable-X-bridges.png"
      sx={{ mb: '24px' }}
      component="img"
      alt=""
    />
    <Typography sx={styles.regular}>
      Immutable X now supports multiple ZK-Rollups including StarkEx and
      StarkNet.
    </Typography>
    <Typography sx={styles.regular}>
      This is the first-ever bridge between 2 different L2s.
    </Typography>
    <Typography sx={styles.regular}>
      Some projects may want to deploy parts of their projects to StarkNet, and
      parts to StarkEx.
    </Typography>
    <Typography sx={styles.regular}>
      Additionally, a portion of fees from every trade across either Rollup
      (StarkNet or StarkEx), as long as it’s processed through the Immutable X
      sequencer, will be shared with the IMX staking rewards pool.
    </Typography>
    <Typography sx={styles.regular}>
      With StarkNet, Layer-1 dApp games can be ported to Immutable X quickly.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText, mb: '32px' }}>
      The StarkNet ecosystem is rapidly expanding. We believe that once a
      StarkNet token is issued, this ecosystem will outperform. However,
      launching a token is still relatively early for StarkNet, because the
      ecosystem is not yet fully developed.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      ZkSync
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/ZkSync.png"
      sx={{ mb: '24px' }}
      alt="cross-chain"
      component="img"
    />
    <Typography sx={styles.regular}>
      Another ZK-Rollup scaling solution for Ethereum is in its early stages.
    </Typography>
    <Typography sx={styles.regular}>
      ZkSync 1.0 (current mainnet) has no smart contracts. ZigZag, a DEX on
      zkSync 1.0, managed to be built without smart contracts. However, this was
      a limitation prohibiting further development in the project.
    </Typography>
    <Typography sx={styles.regular}>
      ZkSync 2.0, which is currently live on testnet, is the first
      EVM-compatible ZK-Rollup that includes Solidity smart contracts. ZkSync
      2.0 will enable massive building and development across the ecosystem,
      unleashing zkSync’s full potential.
    </Typography>
    <Typography sx={styles.regular}>
      SyncSwap is now live on zkSync 2.0 - a DEX on zkSync.
    </Typography>
    <Typography sx={styles.regular}>
      Aside from that, not much development or major updates have occurred,
      except for integrating dApps on L2.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/ZkSync-Ecosystem.png"
      sx={{ mb: '24px' }}
      alt="cross-chain"
      component="img"
    />
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      ZkSync follows the same thesis as StarkNet. Outperforming once a token is
      launched. However, that is still far away, as there is a lot of work and
      building that needs to be done.
    </Typography>
    <Typography sx={{ ...styles.regular, ...styles.boldText }}>
      ZkSync officially confirmed a token on their website, on the tokenomics{' '}
      <Link
        sx={styles.link}
        href="https://docs.zksync.io/userdocs/tokenomics/#will-zksync-have-a-native-token"
        target="_blank"
      >
        page
      </Link>
      .
    </Typography>
  </>
);

export default withPresence({ title, description })(LayerTwo);
