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
import g1 from 'assets/image/alpha/1.png';
import g2 from 'assets/image/alpha/2.png';
import g3 from 'assets/image/alpha/3.png';

const { title, description } = staticContent.meta.alpha;

const styles = {
  title: {
    fontSize: { md: '32px' },
    fontWeight: 600,
    mb: '24px',
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

const Alpha = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="md">
        <CardMedia sx={{ mb: '24px' }} component="img" src={g1} />
        <Typography sx={styles.regular}>
          Alpha-DAO is a new Decentralized Autonomous Organization created by
          seasoned crypto researchers.
        </Typography>
        <Typography sx={{ mb: '32px' }}>
          Disclaimer: This is not investment nor investment advice. Only you are
          responsible for any capital-related decisions you make and only you
          are accountable for the results.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          The information made available in this report is NOT for replication.
          The purpose is to share the thought process behind the DAO&apos;s
          decision making - additionally, this is a HIGH RISK journey for the
          DAO which means capital has also been allocated in accordance with
          this. Once again, DO NOT REPLICATE.
        </Typography>
        <Typography sx={styles.regular}>
          This report outlines new information that has come to light. This
          proposal looks to take advantage of this knowledge before it becomes
          widely known and subsequently take advantage of the market momentum
          coming from it.
        </Typography>
        <Typography sx={styles.regular}>Asset: Shadow (SHDW)</Typography>
        <Typography sx={styles.regular}>
          Description: Solana and data storage Infrastructure Play
        </Typography>
        <Typography sx={styles.regular}>
          Valuation & Risk Management:
        </Typography>
        <Typography sx={styles.regular}>
          I propose an allocation of 5% of the AlphaDAO funds (5,000 USDC) to
          spot purchase SHDW at the current price of around 0.85 USDC. The take
          profit point for this would be at a price points of 1.2 and 1.5 USDC,
          with 50% of the position closed when those targets are hit. The stop
          loss here would also be tight, at the 0.7 USDC level, as either the
          mechanism and SHDW drive work as anticipated which should be reflected
          in the price. Any other outcome should trigger the Stop Loss. The
          timeline for this development in price is the next 4-8 weeks and if
          that is not met the position should be exited to ensure capital
          efficiency, especially as there is an existing hefty allocation via
          previous proposals.
        </Typography>
        <Typography sx={styles.regular}>Implementation Plan:</Typography>
        <Typography sx={styles.regular}>
          The purchase can be made across Raydium, Orca and Aldrin Exchange, all
          of which are DEXs on Solana.
        </Typography>
        <Typography sx={styles.regular}>
          Proposal 18 | Status | Executed
        </Typography>
        <Typography sx={styles.regular}>
          5,000UST withdrawn from Anchor
        </Typography>
        <Typography sx={styles.regular}>
          5,000UST sent to Alpha-DAO.SOL via Wormhole/Portal
        </Typography>
        <Typography sx={styles.regular}>
          5,000UST exchanged for 5,000USDC via Jupiter
        </Typography>
        <Typography sx={styles.regular}>
          5,000USDC exchanged for 5,312 SHDW via Jupiter
        </Typography>
        <Typography sx={styles.regular}>
          Average entry: 0.94$ per SHDW
        </Typography>
        <Typography sx={styles.regular}>
          Take profit @ 1.2 and 1.5 USDC, with 50% of the position closed on
          each target achieved.
        </Typography>
        <Typography sx={styles.regular}>
          Stop Loss at the 0.7 USDC (33% daily sells if 0.70 is hit). The full
          position is exited if the price is below 0.70 USDC over 3 days.
        </Typography>
        <Typography sx={styles.regular}>Thesis:</Typography>
        <Typography sx={styles.regular}>
          The below report is collated from a Q&A session from the GenesysGo
          discord, hours of reading discussions between Frank (co founder of
          GenGo), the dev team and questions from external developers and SHDW
          holders. It condenses the key issues and questions which currently
          exist around the SHDW drive and allows us to better predict what the
          project is aiming to do. We will cover core investment updates and the
          direction of the projects before presenting my interpretation of the
          discussions regarding the tokenomics and what they mean for holders of
          SHDW.
        </Typography>
        <Typography sx={styles.regular}>
          The SHDW drive looks to be a comprehensive storage solution. The goal
          is to initially manage to index and store all of the solana blockchain
          data, a significantly better solution than the current Google Big
          Table solution Solana implements. To explain it in simpler terms -
          Solana data will be easily and quickly accessible to anyone - via SHDW
          drive. Once native Solana storage is taken care of the team will look
          to expand to as many blockchains as they can. In general the approach
          being taken is to build the SHDW drive with future scalability in
          mind. The answer to most common questions such as, will it support
          different data types?, will it host multiple chains&apos; data? will
          there be a UI ? is YES. The team has realised that for their product
          to perform they will have to match at least the current solutions
          usability and feature space. Basically SHDW drive will have to be as
          good as existing solutions to have a chance at being successful so
          most accepted features are planned to be included. You can see some
          more in-depth questions and Franks&apos; responses at the end of this
          report - which should give you a good sense of the direction that the
          project is taking and their approach.
        </Typography>
        <Typography sx={styles.regular}>
          Now let&apos;s dive into the juicy alpha - the hints and what my
          intuition is saying regarding the tokenomics.
        </Typography>
        <Typography sx={styles.regular}>
          This concept is key for someone to understand the innovation that
          GenGo is planning. SHDW drive aims to offer two different types of
          storage - this is the feature that will differentiate them from the
          competitors. The two types of storage are mutable and immutable
          storage. Simply put - when mutable you can delete or update something
          - whilst when immutable you can&apos;t edit anything, it&apos;s meant
          to stay there forever unaltered.
        </Typography>
        <Typography sx={styles.regular}>
          So far we have not seen a robust solution to this problem by any
          competitors (Filecoin, Arweave etc..). Competitors and their current
          offerings and shortcomings have been covered in previous reports, and
          if you&apos;re reading this, i expect you to already understand the
          general thesis behind SHDW.
        </Typography>
        <Typography sx={styles.regular}>
          Anyways - why is this important Bill ? Well, SHDW is what enables
          GenGo to solve the above problem of both permanent and non-permanent
          storage. As far as i understand SHDW holders will be able to
          stake/lock up their SHDW tokens to gain access to storage on the SHDW
          drive. The amount of SHDW will determine how much storage space the
          user will be able to use. As long as the SHDW is staked/locked the
          user will have their data stored. If they wish to unlock their SHDW
          they will also relinquish their storage space on the SHDW drive. This
          takes care of the &apos;mutable&apos; storage part.
        </Typography>
        <Typography sx={styles.regular}>
          But what about the &apos;immutable&apos; storage ? Well those
          staked/locked tokens can burned in order to make the files stored
          permanent. Yes that is burnt which means SHDW will effectively be
          deflationary as it&apos;s usage and the amount of files stored
          immutably on the SHDW drive grows.
        </Typography>
        <Typography sx={styles.regular}>
          To quote word for word from Frank himself:
        </Typography>
        <Typography sx={styles.regular}>
          The whole point is that when you stake SHDW into the SHDW Drive users
          are staking their claim for ownership of piece of the storage map. We
          make sure it&apos;s all on-chain and always available. If you
          don&apos;t need the data stored forever you unstake, give up your
          piece of storage real estate, but still have your SHDW tokens.
          We&apos;re building a flag so you can forfeit your staked SHDW in
          exchange for permanent immutable storage
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={g1} />
        <Typography sx={styles.regular}>
          From the above diagram you can see how the SHDW token has deflationary
          potential. But let&apos;s explore some more factors. Firstly it is
          important to remember that a large % of tokens is still locked up with
          SSC staking. Indeed 65% of all SHDW tokens are locked to the SSC NFTs.
          The SHDW drive should launch approximately halfway through the year. A
          rough estimate the SSCs will have 25% of the circulating supply
          unlocked by then. An another 15% from the IDO pool bring us to roughly
          40% of the tokens being available on the circulating market when the
          SHDW drive goes live. This is around 80,000,000 SHDW tokens.
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={g1} />
        <Typography sx={styles.regular}>
          Some of these tokens will have to be staked by SHDW drive operators
          (the people who will run the computers to store the data), and they
          will receive emissions as shown above. We still do not know the exact
          details regarding how operating a SHDW node will work.
        </Typography>
        <Typography sx={styles.regular}>
          Aside from the tokens being staked by the operators, users will have
          to stake tokens in order to access the storage. In turn many users
          will also have to burn their SHDW in order to make their data
          permanent. This should lead to a sudden supply shock to the available
          SHDW once the drive goes live - with the combination of staking from
          operators and users looking to reserve storage along with the burning
          of SHDW from users looking to have permanent storage. In contrast to
          all this usage - the only new supply of SHDW tokens on the market will
          be from SSC emissions and the SHDW operator emissions.
        </Typography>
        <Typography sx={styles.regular}>
          Simply put - if the usage of SHDW drive is enough SHDW will become a
          deflationary token. What makes this particularly interesting is that
          although the full supply of SHDW is fixed and can only decline via
          burning - the amount of storage can increase as more operators join
          the network and as more resources are allocated. We currently
          don&apos;t have any details about how this could operate but a logical
          assumption is that the inflation of the storage space available
          reflects back to the staked/burned SHDW. Regardless having the token
          be deflationary and the utility inflationary is an extremely novel
          combination which I expect to perform admirably.
        </Typography>
        <Typography sx={styles.regular}>
          To put the above in simpler terms, the number of available SHDW tokens
          will decrease as the value offered by them also increases.
        </Typography>
        <Typography sx={styles.regular}>
          One last thing i will add here which is rampant speculation by myself
          - but it truly is something i believe we might see. Solana is
          currently storing their historical data with Google Big Table. This is
          an extremely expensive method and i currently costing the Solana
          Foundation around 50K USD a month just for the server costs.
          Additionally due to the throughput of Solana - Google Big Table
          struggles to keep up with writing the data - as a result sections of
          the Solana blockchain are not recorded correctly. To combat this,
          Solana have two engineers whose main role is to ensure that the
          history is being written correctly. As you can clearly see this is a
          massive waste of resources? Why? Well the problem is not being solved
          - it is simply being dealt with as it appears and is not scalable.
        </Typography>
        <Typography sx={styles.regular}>
          As the SHDW drive is purpose built to keep up with the throughput off
          Solana - it will not require the same expenditure of resources and
          babysitting that their current solution with Google Big Table does.
          The Solana ledger sits at above 50TB of data - which is a hefty amount
          of data to store - and this will need to be permanently stored. I
          expect at some point either the Solana Foundation of Anatoly to
          announce mass purchase of SHDW tokens in order to initially store the
          Solana ledger and also to be able to store the new data which is
          generated as Solana runs.
        </Typography>
        <Typography sx={styles.regular}>
          Lastly let&apos;s look at a key checklist to make sure only high
          quality opportunities are being pursued. The checklist is made up of
          three key elements:
        </Typography>
        <Typography sx={styles.regular}>
          Current market sentiment - the market is generally bullish and in an
          upswing. SHDW is also seeing some momentum. Overall market conditions
          are favourable.
        </Typography>
        <Typography sx={styles.regular}>
          Strong fundamentals - The reason SHDW is even being discussed is due
          to its fundamentals, use case and team.
        </Typography>
        <Typography sx={styles.regular}>
          Technical Analysis - does the chart coincide with the above outlook
          and is it primed for entry? The information divulged above from the
          GenGo channels is not common knowledge, and in general should not be
          reflected in the current price action. The TA will also offer us a
          take profit target, looking to take advantage of momentum in the
          market as the above knowledge regarding staking and burning of SHDW
          becomes public knowledge along with the SHDW drive becoming
          operational.
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={g3} />
        <Typography sx={styles.regular}>
          The TA above comes from Eugene.
        </Typography>
        <Typography sx={styles.regular}>
          The blue level is the area to watch, due to the low liquidity/MCap big
          buys/sells cause those wicks but overall it&apos;s been trading around
          there for like 2 months. Any moves above have been on pretty low
          volume (on Raydium at least). It has been setting higher lows over the
          last week or so, would be looking for volume to step in here and if
          there&apos;s a catalyst for that (which we know there is) then the
          probability of further upside is high IMO. Near-term upside target
          would most likely be $1.50 for SHDW.
        </Typography>
        <Typography sx={styles.regular}>Core investment update:</Typography>
        <Typography sx={styles.regular}>
          Are there any limitations on the type of data the SHDW drive will be
          capable of storing? (file size, type, formats etc.)
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Nope! We&apos;re building the drive to be able to
          store data of any type. Low key, we are planning to come after
          Filecoin and their goal to &quot;store the internet&quot;. (edited)
        </Typography>
        <Typography sx={styles.regular}>
          Do you have a feel for required system specs for SHDW drive node
          operators? Will they be similar to RPC server/validator specs at first
          (i.e. preeeetty pretty beefy)? Or will a less kickass system be
          sufficient as long as it has a fat pipe and a boatload of drive space?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Starting off, we&apos;ll stick with beefy systems.
          However, I may or may not (but definitely did) drop a version of
          storage onto my laptop and watched as our system pushed data to it for
          storage.
        </Typography>
        <Typography sx={styles.regular}>
          Is there any reason why SHDW Drive can&apos;t also provide storage
          services to other chains (like ETH), such that limiting $SHDW price
          estimates to solana-only models is an incorrect approach ?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Shadow Drive will definitely end up providing
          storage to any and all chains. Solana is just the beginning...
        </Typography>
        <Typography sx={styles.regular}>
          There&apos;s a trend in software development of having the Cloud dev
          environments where the codebase lives on a server. The devs connect
          with whatever hardware they have and the code runs on the beefy
          server. Like JetBrains Space or Fleet. Would it be possible to host
          such a thing on Shadow Drive?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — I don&apos;t see why not? Metadata can be stored
          in multiple places. The NFT projects would simply need to change a few
          lines of code to point requests at SHDW Drive instead of Arweave
        </Typography>
        <Typography sx={styles.regular}>
          What would be the shape of the shadow drive? at least initially, a cli
          program to upload files or a UI or both?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — CLI uploads and commands will be the start. UI
          will come later. Both will run together
        </Typography>
        <Typography sx={styles.regular}>
          Hey guys, for work I am asked by the task force for municipalities of
          the Netherlands to explore blockchain solutions. Most of it is cringe
          stuff (guys don&apos;t even know why they should/should not opt for a
          chain), but here to ask how easy will it be to port data over to the
          future Shadow drive? Data that needs to be stored is basically a JSON
          object per registration. Naturally, an indication, if it could be done
          this year or help with a PoC, will be much appreciated.
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — If it&apos;s not easy to upload a file and store
          data with us then we&apos;re not doing a very good job imo. I see you
          being able to test and use our storage solution in the next few weeks
        </Typography>
        <Typography sx={styles.regular}>
          Will it be possible to only provide resources for Shadow Drive and not
          RPC resources? So that a desktop computer could be used for Shadow
          Drive instead of the beefy servers needed to provide Solana RPC
          services.
        </Typography>
        <Typography sx={styles.regular}>Frank | GenesysGo — Yes</Typography>
        <Typography sx={styles.regular}>
          You&apos;ve said operating a shadow node will involve operators
          staking SHDW tokens. Do you have any indication of how many SHDW
          tokens will be needed to operate a node, or a target number of third
          party nodes?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — $10k worth is the current amount we&apos;re
          targeting. We&apos;re tracking a USD amount of $SHDW bc we really like
          thinking ahead about scale and don&apos;t want to price out operators
          in the future as $SHDW grows in value. One thing I do disagree with
          Solana on is their &quot;1 SOL = 1 SOL&quot; approach. The reality is
          that running nodes (whether it&apos;s Solana or Shadow) has real world
          USD costs. A &quot;1 SHDW = 1 SHDW&quot; approach would impact our
          ability to onboard new Shadow Operators and stay true to our belief
          that being a Shadow Operator
        </Typography>
        <Typography sx={styles.regular}>
          Are there plans for Shadow Drive to support video storage and
          streaming?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Definitely.
        </Typography>
        <Typography sx={styles.regular}>
          I&apos;m not sure what the storage risks would be or how the storage
          quite works, but will you do tiered storage safety? Like, more copies
          of your data are distributed/stored with &quot;Shadow Storage
          Gold&quot; vs &quot;Shadow Storage Silver&quot;? I think it would also
          be cool if there&apos;s a streamlined way to store certain blockchain
          data locally as well (i.e. nft/transaction data from Phantom). I need
          to read more about what proper cataloging of blockchain
          history/storage actually consists of though... with merkle trees,
          accounts, etc..
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — I think there is a risky tendency by blockchain
          devs to rly overcomplicate things due to a very loose definition of
          what constitutes &quot;web3&quot;. There&apos;s an infinite number of
          rabbit holes blockchain builders rush down in order to reinvent the
          wheel and slap a &quot;web3&quot; label on it. I&apos;ve found it
          helpful to think about &quot;web3&quot; not from a tech lens but more
          from a philosophical one.
        </Typography>
        <Typography sx={styles.regular}>
          Without entering into too technical aspects, is there a mechanism in
          shadow drive guaranteeing no data loss ? If data is replicated in
          several shadow drive operators but they suddenly stop their servers,
          how can you guarantee that the data will not be lost ? Is there a sort
          of nakamoto coefficient that would ensure that no data would be loss
          above this threshold ?
        </Typography>
        <Typography sx={styles.regular}>Frank | GenesysGo — Yes</Typography>
        <Typography sx={styles.regular}>Project direction</Typography>
        <Typography sx={styles.regular}>
          Why don&apos;t we utilize SHDW token utility for the shadow network
          (RPC servers)? I understand why you decided to offer the RPC services
          for free but I would think overtime, that value gets diminished quite
          substantially. Why not implement at least a &quot;mini-utility&quot;
          with SHDW for RPC servers?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — There are additional RPC elements and improvements
          we have planned (which are only possible bc of Shadow Drive storing
          all on-chain data directly) that we&apos;re discussing as additional
          use cases for $SHDW, however... I would strongly caution against
          underestimating just how big data storage actually is. We also
          strongly believe in upholding the commitment we made to the ecosystem
          around the free RPC network. We raised a ton of money during the
          IDO... that is years and years of RPC support for the entire
          ecosystem. Why is that important? Because, like it or not... if Solana
          doesn&apos;t grow then SHDW doesn&apos;t grow and vice versa.
        </Typography>
        <Typography sx={styles.regular}>
          If the storage will be on the chain, does Solana Labs / Foundation /
          Anatoly, validators have to buy in to the architecture before it
          becomes part of Solana? I wonder how the approval process works in the
          decentralized world.
        </Typography>
        <Typography sx={styles.regular}>
          If the storage becomes part of the chain and storage is provided by
          all the validators as part of them maintaining the chain, can
          ShadowDrive ask the users to pay for what&apos;s already part of the
          chain? What will be a good example for a service charging for
          what&apos;s on chain?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — We&apos;re in conversations with Solana about
          this. They understand that we&apos;re not doing this purely bc
          we&apos;re nice guys. They also get that there&apos;s a full community
          of supporters behind us (and them) on this and so I have zero worries
          around this. That said, this is probably the one area where we&apos;re
          going to be continually opaque. That&apos;s bc releasing details of
          those convos/answering this question right now would be me speaking on
          behalf of both Solana and GenGo. I can speak on behalf of GenGo but
          these convos aren&apos;t GenGo only
        </Typography>
        <Typography sx={styles.regular}>
          Can solana validators / foundation keep up with SHDW drive
          development? As in, can they scale to accommodate you, given problems
          with slowdowns over the past few months? I know long term plans are
          for SHDW to offer services to ETH and EVM chains, but obviously that
          will place a huge load on the solana network.
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Assume the best, plan for the worst. We&apos;re
          building with the thought in mind that the problems with
          slowdown/scale will continue. This isn&apos;t bc we think Solana will
          continue to have problems (quite the opposite)... it&apos;s bc if we
          build thinking the problems will continue then our ability to scale
          won&apos;t be affected. If the problems disappear then our ability to
          scale also isn&apos;t affected.
        </Typography>
        <Typography sx={styles.regular}>Technical Details</Typography>
        <Typography sx={styles.regular}>
          What&apos;s the most challenging thing you&apos;re working on right
          now?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — The most challenging thing is creating
          trustlessness. There are plenty of storage solutions out there as data
          storage is by no means a new thing and we have no intention of
          reinventing the wheel here. Trustlessness though... that&apos;s what
          matters. How do you verify someone is storing your data and being a
          &quot;good actor&quot; about it? To accomplish this we&apos;re
          building a series of smart contracts that pass hashed (encrypted) keys
          between those who provide storage to the network. These keys are
          generated via $SHDW and are passed via a standard Solana transaction.
          So, the txn of payment takes place on chain, the creation of the
          hashed public/private key pairs take place and are visible on chain
          (not the keys themselves, just the fact that the keys were created and
          the parties involved were in good standing). This is the very high
          level TL;DR version and it&apos;s the part of SHDW drive that we think
          is the most important to get right. Fortunately, we&apos;re feeling
          very very good about this and are very excited
        </Typography>
        <Typography sx={styles.regular}>
          Can we build a distributed Postgres DB on SHDW drive?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — This question was rly interesting to the team. The
          short answer is, yes... absolutely. There are many many things which
          could be built on top of Shadow Drive. We&apos;ve got a list and this
          got added.
        </Typography>
        <Typography sx={styles.regular}>
          What architecture choices will be made to speed up the storage and
          storage retrieval processes? Are there aspects of Solana&apos;s
          general design principles -- parallelism, etc that will be
          incorporated as well? Also, will th dev side be complimentary to the
          current Solana dev environment? I.e. usage of Rust and what not? Or be
          pretty different?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — We&apos;re huge fans of Rust since it&apos;s
          programming language which is very close to the machine level. If we
          wanted to get closer we&apos;d need to start looking into C. So, the
          environment should be very complimentary to the current Solana dev
          environment.
        </Typography>
        <Typography sx={styles.regular}>
          Are there any security concerns? Is there a possibility of virus being
          stored and replicated? Is there a need to scan for virus?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Existing storage solutions have been tackling this
          for years. I would say that our security concerns are no more than
          that of any storage provider (which is to say that they are many). The
          good news is there are many many battle tested ways to protect users
          and address security concerns.
        </Typography>
        <Typography sx={styles.regular}>
          If Shadow Drive is used to replace Google Bigtable as the primary
          method for long-term storage of the full solana historical record, is
          there a single canonical history stored on shadow drive that all
          validators will reference or is each validator required to separately
          store and pay for their own version? If there&apos;s a single
          canonical version, who pays for that to be stored?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo — Validators don&apos;t reference the history ever.
          Proof of History is purely a point in time consensus mechanism.
          Validators reaching consensus on current blocks aren&apos;t affected
          at all by the entire validator network instantly forgetting that
          block. It&apos;s everyone else that cares. So, the single canonical
          history is what matters and it matters for builders, users, auditors,
          etc and it is served by RPC servers to those users.
        </Typography>
        <Typography sx={styles.regular}>
          Can the digital ledger for solana since genesis block be stored in a
          decentralised way without compromising security? (ie. breaking a map
          into parts would ease storage but bad actors could forge a fake) And
          what&apos;s the bare minimum of mirrors for these ledgers to be
          secured, and fidelity increases with every mirror but will it be
          capped to keep the economic model profitable?
        </Typography>
        <Typography sx={styles.regular}>
          Frank | GenesysGo —Sure it can. The concept of a network having to
          reach consensus in order to allow for an action to happen (data to be
          stored or a request to be served) is nothing new.
        </Typography>
      </AppContainer>
    </>
  );
};

export default Alpha;
