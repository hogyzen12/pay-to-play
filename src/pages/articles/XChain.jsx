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
import xchain from 'assets/image/cards/xchain.png';

const { title, description } = staticContent.meta.xchain;

const XChain = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={xchain} component="img" />
    <Typography sx={styles.regular}>
      Up till this point we have covered a few of the cross-chain solutions that
      allow for the transfer of wealth between chains. However, there is one
      area that we have yet to cover - cross-chain messaging.
    </Typography>
    <Typography sx={styles.regular}>
      We have been talking about{' '}
      <Link
        sx={styles.link}
        href="https://www.cryptonary.com/cryptoschool/simply-explained-polkadot-parachains/"
        target="_blank"
      >
        Polkadot
      </Link>{' '}
      for a while and the usefulness of interoperability between the Layer 1
      Parachains built on it. However, Polkadot is just one project that
      classifies itself as a “Layer 0” protocol. So, what does Layer 0 mean in
      this context, and how useful is cross-chain messaging when it comes to
      solving the interoperability dilemma?
    </Typography>
    <Typography
      sx={{
        ...styles.regular,
        ...styles.italicText,
        ...styles.boldText,
        mb: '32px',
      }}
    >
      Disclaimer: This is not investment nor investment advice. Only you are
      responsible for any capital-related decisions you make and only you are
      accountable for the results.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      TLDR
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Layer 0 ecosystems such as Polkadot and Cosmos partly
          resolve the interoperability issue.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Polkadot’s XCM and the Cosmos IBC allow for messages to
          be passed between chains built using their infrastructure, but this is
          limited to their respective ecosystems.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}LayerZero allows for messages to be passed between chains
          that are completely unrelated.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The Polkadot XCM should go live any day now which will
          allow Parachains to communicate with each other (finally).
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.title} variant="h3">
      What is a Layer 0?
    </Typography>
    <Typography sx={styles.regular}>
      Layer 1 blockchains allow decentralised applications to be built on top of
      them, like the relationship between Ethereum and SushiSwap. However, Layer
      0 protocols allow Layer 1 blockchains to be built on top of them. But why
      would anyone do this? Why would you build an entire blockchain on top of
      another infrastructure?
    </Typography>
    <Typography sx={styles.regular}>
      The main reason is that Layer 1 blockchains have limitations, and the idea
      is that Layer 0 protocols fix these limitations.
    </Typography>
    <Typography sx={styles.regular}>
      Since most Layer 1 blockchains are built to be useful in a general sense,
      developers building dApps on top of these chains usually must make
      compromises in their application design to fit the limitations of the
      underlying blockchain infrastructure. The key point is that these chains
      are not optimised for every single use case, but rather as many use cases
      as possible. This leads to a few problems:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Scalability
          </Typography>{' '}
          - one limitation is that dApps and developers are constantly in
          competition for the L1s resources leading to slow and expensive
          transactions**.** We have seen this on Ethereum since the explosion of
          DeFi.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Usability
          </Typography>{' '}
          - application developers on L1s are essentially stuck with the
          limitations of the underlying blockchain because upgrading the network
          requires a hard fork which is often an absolute nightmare for both
          public relations and the health of a community.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          <Typography sx={styles.boldText} component="span">
            Control
          </Typography>{' '}
          - dApps built on a pure Layer 1 are pretty much under the governance
          of the community of that chain. dApps are fully dependent on the Layer
          1 they are built on, and if there are bugs on that Layer 1 then the
          dApps will just have to deal with that until the L1 governance does
          something.{' '}
          <Typography sx={styles.boldText} component="span">
            CAN THE DEVS PLEASE DO SOMETHING?
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/drowning-high-five.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      Layer 0 protocols solve these issues because:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Each Layer 1 chain can be built for each use case,
          meaning that the developers are no longer limited by what they can and
          can’t do - they can just build a chain that suits their specific
          needs.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          The workload is now spread across multiple Layer 1 chains, rather than
          everyone competing for space on a congested chain. This frees up
          network resources as DEXs, lending protocols, etc, are no longer
          competing for resources against other sectors.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}
          The motivations and incentives for the developers using these chains
          are aligned, usually by sector – there can be a chain for lending, one
          for decentralised exchanges, etc. For the most part this means that
          any changes to the chain that would benefit one specific dApp will
          usually benefit them all and can be actioned faster, with less
          friction between all parties.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      There is another added benefit for blockchains and dApps built within a
      Layer 0 ecosystem - cross-chain communications.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Communications
    </Typography>
    <Typography sx={styles.regular}>
      Some proponents of Layer 0 protocols argue that pure L1s are outdated and
      that Layer 0 networks are the way forward. Why?{' '}
      <Typography
        sx={{
          ...styles.italicText,
          ...styles.boldText,
        }}
        component="span"
      >
        Interoperability.
      </Typography>
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/Interoperability-Node.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      Although the Layer 0 format is excellent for developers, it is also
      massively beneficial for the end-user because any asset can be used on any
      of the Layer 1 blockchains built within that ecosystem. This removes the
      need for processes like bridging because the infrastructure is already
      there.
    </Typography>
    <Typography sx={styles.regular}>
      There are a couple of contemporary examples of this kind of
      interoperability - for example, Polkadot and Cosmos:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The Polkadot XCM (Cross-Consensus Message Format) allows
          Parachains and their respective dApps to communicate with each other
          and transfer tokens/assets.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The Cosmos IBC (Inter-Blockchain Communication) basically
          allows tokens to be transferred between Cosmos chains (think
          THORChain, Osmosis, etc) creating an interconnected network.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      It should be noted that although these innovations allow for
      interoperability between chains built on Polkadot/Cosmos, the rest of the
      blockchains like Ethereum and Solana are still segregated. They cannot use
      these communications networks.
    </Typography>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      Is there anything else worth mentioning? There certainly is!
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Closing the Gap
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/LayerZero.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      LayerZero is an infrastructure that allows for the passing of messages
      between multiple chains that are not related to each other. Designated as
      an “Omni-Chain Interoperability Protocol”, the sole purpose of the
      infrastructure is to verify a message sent from one chain and validate it
      on another. At the highest level, LayerZero is a smart contract endpoint
      where applications can seamlessly connect to and utilise as a sort of
      postal service that carries messages between chains. Here’s an overview:
    </Typography>
    <CardMedia
      src="https://www.cryptonary.com/wp-content/uploads/2022/05/LayerZero-Architecture.png"
      sx={{ mb: '24px' }}
      component="img"
    />
    <Typography sx={styles.regular}>
      There are 3 important components that facilitate the transmission of
      messages - the endpoints, the Oracle, and the Relayer. When a message is
      sent by an application (dApp):
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The message is transmitted through the first endpoint on
          Chain A, which tells the Oracle and the Relayer what the message is
          and its destination chain.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The Oracle forwards the block header (basically an
          identification of the block the message was signed on) to the endpoint
          on Chain B.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}The Relayer submits a proof of the transaction to the
          endpoint on Chain B. This proof is validated on Chain B, and the
          message is sent to the relevant destination address.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={styles.regular}>
      This has several advantages over other forms of cross-chain
      communications:
    </Typography>
    <List sx={{ mb: '32px' }}>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}For there to be a security breach, both the Relayer{' '}
          <Typography sx={styles.boldText} component="span">
            and
          </Typography>{' '}
          the Oracle must be colluding or compromised.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}Arguably the biggest advantage of this method is state
          sharing. This means that a project operating on multiple chains would
          be able to prove transactions across all chains they are active on.
          For example, an operation such as taking a loan can be verifiable on
          any chain that the lending protocol is connected to through LayerZero,
          which would theoretically allow for collateral to be posted on one
          chain and the loan taken on another.
        </ListItemText>
      </ListItem>
      <ListItem sx={{ padding: '0 0 0 16px' }}>
        <ListItemText sx={styles.italicText}>
          &#9679;{'  '}On-chain governance could be carried out no matter what
          chain the voters were on since votes can be verified using the
          LayerZero messaging infrastructure.
        </ListItemText>
      </ListItem>
    </List>
    <Typography sx={{ ...styles.regular, mb: '32px' }}>
      These are just a few examples of the utility of LayerZero, and ultimately
      the goal of the project is that no one will actually know that it is
      LayerZero carrying out the cross-chain messaging. This is generally the
      end goal for all cross-chain comms - you don’t question how your bank
      changes your currency when you buy something from another country, it just
      works.
    </Typography>
    <Typography sx={styles.title} variant="h3">
      Problem Solved?
    </Typography>
    <Typography sx={styles.regular}>
      To summarise, Layer 0 ecosystems are generally a step in the right
      direction for interoperability and indeed Polkadot and Cosmos were some of
      the very first protocols to consider this an issue. However, their limited
      reach means that they only solve part of the problem. Unrelated chains are
      still isolated and so to reach them requires the use of other means of
      cross-chain communications.
    </Typography>
    <Typography sx={styles.regular}>
      LayerZero has taken this interoperability a step further by allowing
      messages to be passed between multiple chains, not just those on one
      ecosystem. This essentially opens a similar method of communications
      comparable to the XCM and IBC but on a much larger scale. It is important
      to note, however, that LayerZero is still in the relatively early stages
      of development and has not been battle-tested yet.
    </Typography>
    <Typography sx={styles.regular}>
      At this point, it should be clear that there is no one-size-fits-all
      solution to the multi-chain thesis. There are still a couple of solutions
      we are yet to cover – so stay tuned!
    </Typography>
  </>
);

export default withPresence({ title, description })(XChain);
