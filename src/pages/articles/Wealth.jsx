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
import wealth from 'assets/image/articles/wealth.png';

const { title, description } = staticContent.meta.wealth;

const Wealth = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={wealth} component="img" />
    <Typography sx={styles.regular}>
      We are rapidly approaching the end of the cross-chain communications
      series. Up till now, we have covered; the thesis, Liquidity Pools,
      Synthetic Assets, and Layer 0 protocols.
    </Typography>
    <Typography sx={styles.regular}>
      However, there is one solution that we have not covered - bridges.
      Cross-chain bridges are the most commonly used method of moving assets
      between chains. But why have we left them till last?
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Well, bridges come in many forms - and a few of the bridges out there also
      utilize concepts covered in the previous journals. So, without further
      ado, let’s dive into the expansive (and sometimes controversial) world of
      cross-chain bridges!
    </Typography>
    <Typography sx={styles.title} variant="h3">
      TLDR
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Bridges allow users to port assets from one chain to
          another.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Bridges are easy to use – deposit on one chain, and
          redeem on the destination chain.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '} A wrapped token allows native tokens to be represented
          and used on chains with different token standards.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The minting and burning of wrapped assets, as well as the
          custody of the underlying asset, is (for the most part) highly
          centralized.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}This represents a security risk for most bridges.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      The Basics
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      A bridge, within the context of blockchain, is an infrastructure that
      allows users to port their assets from one chain to another. However, in
      most cases, assets can only exist on their native chain as defined by the
      token standard. This means there must be a way to represent the bridged
      asset on the destination chain. Most bridges achieve this by depositing
      the native asset on one side and then minting a wrapped asset on the
      other. “What is a wrapped asset?” I hear you ask.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Wrap Battle
    </Typography>
    <Typography sx={styles.regular}>
      In the simplest terms, a wrapped token is a representation of another
      token that cannot exist on the chain it is intended to be used on. It has
      the same value as the underlying token because it is backed exactly 1:1 by
      the underlying asset on its native chain. One of the most well-known
      examples is WBTC (Wrapped BTC). Native BTC cannot be used on Ethereum
      because it cannot <em>exist</em> on Ethereum. To get around this, WBTC was
      created as a solution - a representation of Bitcoin on the Ethereum
      network. It is an ERC-20 token, and to mint WBTC, native BTC must be held
      “somewhere” in order to maintain 1:1 value and ensure that WBTC can always
      be redeemed for BTC.
    </Typography>
    <Typography sx={styles.regular}>
      The same is true for any wrapped asset – they are merely representations,
      not the real thing. For most intents and purposes, however, they are
      effectively an I.O.U. receipt. Remember when traditional currency was
      redeemable for gold or other precious metals? Me neither, but apparently,
      it was the standard:
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/I-promise-to-pay.jpg"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      That’s essentially what a wrapped asset is – WBTC is a banknote, BTC is
      the gold.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      So, how is this done? There are a few methods depending on the bridging
      protocol, the chains involved, and the asset being bridged – let’s have a
      look!
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Smart Contracts
    </Typography>
    <Typography sx={styles.regular}>
      With this method of bridging, when the user deposits the desired asset
      into a smart contract on Chain A:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The protocol registers the deposit as valid and then
          mints an equal amount of the wrapped token on Chain B.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}When the user wishes to bridge back from Chain B to Chain
          A, they deposit their wrapped assets into the smart contract on Chain
          B.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The wrapped asset is burned, and the protocol validates
          the burning of the assets, and passes along this validation to the
          smart contract on Chain A, which then releases the user’s initial
          native asset deposit.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      Here is an example of the Wormhole Bridge architecture for bridging ERC-20
      tokens between Ethereum and Solana:
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/solana-eth-2388836594.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      One of the main issues with this is that the system is not completely
      trustless. Most protocols using this method have “in-between” validators
      that run a full node on each chain on each side of the bridge. Generally,
      these validators are only a few individual entities (in the case of
      Wormhole, only 19 “Guardians”). Locked assets are also in the custody of
      the bridging protocol until redeemed.
    </Typography>
    <Typography sx={styles.regular}>
      This brings into question the level of decentralization of the bridge and
      the trust placed in the bridging protocol – what happens if a majority of
      these validators decide to act maliciously? Or a majority of validators
      are compromised in a hack or exploit? Someone manages to send false
      information to one or both sides of the bridge? Nothing good, to say the
      least.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      With billions of dollars worth of native assets locked on one side of a
      bridge, and the ability to technically mint unlimited wrapped assets on
      the other, security is of major concern for bridges, and indeed the
      largest DeFi exploits have mostly come from bridge exploits. The main
      point of weakness is the part “in-between” the chains.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Liquidity Pools
    </Typography>
    <Typography sx={styles.regular}>
      Another method of bridging is using liquidity pools. Before you ask – no,
      not the same as the liquidity pool model we outlined in{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/research/30x-alive-and-well/"
        target="_blank"
      >
        this
      </Link>{' '}
      journal. This method can be used for bridging assets that exist on
      multiple networks, just with different token standards, as well as wrapped
      assets. For example, USDT, USDC, wETH, etc. It’s quite simple:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The user deposits their asset into a liquidity pool on
          Chain A.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The protocol registers the deposit and releases an equal
          quantity of the token on Chain B.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Liquidity providers earn a yield based on the fees paid
          by people using their pooled liquidity.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      This is technically a form of cross-chain Automated Market Maker. For
      example, the pool for bridging USDC from Ethereum to Solana would be a
      USDC(ERC-20)/USDC(SPL) pool. Using this method is generally more secure
      than the use of wrapped assets since there are fewer attack vectors for
      hackers to use in an exploit – no minting is required, all the liquidity
      is already present, etc.
    </Typography>
    <Typography sx={styles.regular}>
      Still, there is the weak point of the “in-between” part, whereby a lot of
      trust is placed in a few validators. Additionally, since base layer assets
      such as Solana (SOL) cannot exist anywhere other than on the Solana
      blockchain, there is still the necessity for wrapped assets if the user
      wishes to keep exposure to/use the base assets on other chains.
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/ETH-pools.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      The above is an example of a few Synapse Protocols ETH pools – the
      protocol has created a derivative nETH that is backed by ETH locked by
      users. By using nETH as the common denominator between various chains,
      they can establish a network of liquidity between these pools without the
      user having to bridge back to the Ethereum network before moving to their
      chosen destination chain.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Future of Bridges
    </Typography>
    <Typography sx={styles.regular}>
      Cross-chain bridges were one of the first solutions for interoperability
      to appear. They are also by far the most utilized out of all the solutions
      we have covered up till now. The user experience going from one chain to
      another is fairly simple - deposit on one side, receive assets on the
      other. Where they fall short, however, is mostly down to security.
    </Typography>
    <Typography sx={styles.regular}>
      One of the main security concerns is the use of wrapped assets, which has
      been a major pain point for cross-chain comms. The trust placed in the
      protocols that these wrapped assets is huge and there are no guarantees
      that they won’t lose user funds locked in their vaults. Additionally, the
      minting process is largely a centralized ordeal - remember the I.O.U
      example we used earlier? Again, there’s no guarantee that wrapped assets
      will be redeemable for the underlying asset – only a “trust me bro” from
      the protocol or organization that minted them (for the most part).
    </Typography>
    <Typography sx={styles.regular}>
      Still, wrapped assets are still a necessity. But as we’ve seen in the past
      with the many bridge exploits involving wrapped assets, the infrastructure
      for managing those processes could be more refined, trustless, and
      decentralized. There’s always room for improvement.
    </Typography>
  </>
);

export default withPresence({ title, description })(Wealth);
