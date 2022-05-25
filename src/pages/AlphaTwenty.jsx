import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CardMedia,
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';
import dao20 from 'assets/image/cards/dao20.png';

const { title, description } = staticContent.meta.alphaTwenty;

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
  listItem: { padding: '0 0 0 16px' },
};

const AlphaTwenty = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer size="md">
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{ userSelect: 'none' }}
        >
          <CardMedia sx={{ mb: '24px' }} src={dao20} component="img" />
          <Typography sx={styles.regular}>
            Alpha-DAO is a new Decentralized Autonomous Organization created by
            seasoned crypto researchers.
          </Typography>
          <Typography sx={styles.regular}>
            <strong>
              Disclaimer: This is not investment nor investment advice. Only you
              are responsible for any capital-related decisions you make and
              only you are accountable for the results.
            </strong>
          </Typography>
          <Typography sx={styles.regular}>
            The information made available in this report is{' '}
            <strong>NOT</strong> for replication. The purpose is to share the
            thought process behind the DAO’s decision making – additionally,
            this is a <strong>HIGH RISK</strong> journey for the DAO which means
            capital has also been allocated in accordance with this. Once again,{' '}
            <strong>DO NOT REPLICATE</strong>. &nbsp;
            <span className="notion-enable-hover" data-token-index="0">
              Asset
            </span>
            Friktion Airdrop and Lightning OG NFT
          </Typography>

          <Typography sx={styles.title} variant="h3">
            Description
          </Typography>
          <Typography sx={styles.regular}>
            Friktion has an airdrop coming up, when they release their token. We
            have solid ideas around how we can qualify for this. Getting
            involved in Volts (their structured products), using Entropy, and
            owning a Lightning OG NFT are all involved.
          </Typography>
          <Link
            sx={styles.link}
            href="https://www.cryptonary.com/research/friktion-deep-dive/"
            target="_blank"
          >
            See Friktion deep dive article for full details on the platfrom.
          </Link>

          <Typography sx={styles.title} variant="h3">
            Proposal
          </Typography>
          <Typography sx={styles.regular}>
            Use Phantom wallets to qualify for Friktion airdrop by using the
            platform, buying the NFT and testing Entropy exchange. I propose a 7
            SOL limit on the purchase price of each Lightning OG NFT (was 5, 7
            due to price action recently).
          </Typography>

          <Typography sx={styles.title} variant="h3">
            Airdrop
          </Typography>

          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/05/A-DAO-1.png"
            component="img"
            data-block-id="f1948b97-09ba-4ee5-9cc7-4e31a5764444"
          />
          <CardMedia
            sx={{ mb: '24px' }}
            src="https://www.cryptonary.com/wp-content/uploads/2022/05/A-DAO-2.png"
            component="img"
            data-block-id="14dbe401-bc65-4c2f-a16c-90215e689865"
          />

          <Typography sx={styles.title} variant="h3">
            Strategy and Execution
          </Typography>

          <Typography sx={styles.regular}>
            If we have access/ability to use multiple addresses, this would be
            preferred. I would ideally like to use 5 Phantom wallets for the
            airdrop farming, although I’m not sure of the logistical set up of
            the Alpha DAO wallets.
          </Typography>

          <Typography sx={styles.title} variant="h3">
            Steps
          </Typography>

          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Load each wallet with 10 SOL
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Buy 1 Lightning OG NFT (for each wallet)
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Swap 0.25 SOL to USDC and use this to play around
                with Entropy exchange.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}This is not a necessary steps but a nice add on as
                it may be a multiplying factor.
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Swap 3/4 of the remaining SOL for USDC
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Use the remaining SOL in the SOL call option Volt
                (low voltage, meaning low risk).
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Split USDC 1/3 between Volts 2 (puts Volt), 3 (crab
                strategy), and 4 (targets delta neutral).
              </ListItemText>
            </ListItem>
          </List>

          <Typography sx={styles.regular}>
            {' '}
            If we don’t use 5 wallets, I propose we buy 5 Lightning OG NFTs
            anyway (potential to up this number to 10 if we agree on it).
          </Typography>
          <Typography sx={styles.regular}>
            {' '}
            Either way, for the NFTs I propose selling 40% at a 2x, and holding
            the remaining 60% with a view of evaluating their position when more
            is known about the airdrop.
          </Typography>
          <Typography sx={styles.regular}>
            For the Volt positions, I propose we leave the funds in there until
            we hear more about the airdrop, potentially moving them around
            depending on market movements and Volt performance, but I will keep
            an eye on this.
          </Typography>

          <Typography sx={styles.title} variant="h3">
            Exit Strategy and Notes
          </Typography>
          <Typography sx={styles.regular}>
            If we don’t use 5 wallets, I propose we buy 5 Lightning OG NFTs
            anyway (potential to up this number to 10 if we agree on it).
          </Typography>
          <Typography sx={styles.regular}>
            Either way, for the NFTs I propose selling 40% at a 2x, and holding
            the remaining 60% with a view of evaluating their position when more
            is known about the airdrop.
          </Typography>
          <Typography sx={styles.regular}>
            {' '}
            For the Volt positions, I propose we leave the funds in there until
            we hear more about the airdrop, potentially moving them around
            depending on market movements and Volt performance, but I will keep
            an eye on this.
          </Typography>

          <Typography sx={styles.title} variant="h3">
            Proposal 20 has been executed
          </Typography>

          <CardMedia
            sx={{ mb: '24px' }}
            src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/2705@2x.png"
            component="img"
          />
          <Typography sx={styles.regular}></Typography>
          <Typography sx={styles.regular}></Typography>

          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Swapped 3,500 USDC for ~50 SOL
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Kept 10 SOL in main wallet and sent 40 SOL to 4
                wallets
              </ListItemText>
            </ListItem>
          </List>

          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}HVGHY5kUKC6i67GZW1ERbPK3MhpjLv9r2whxTKFP2r5n{' '}
                <i data-stringify-type="italic">Karim’s Alpha-DAO address</i>
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}HDskPhzeAbAhTmzQawoj7HFPAZXVEgFQW9F9wqY16m5o{' '}
                <i data-stringify-type="italic">Alpha-DAO 2</i>
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}GnpT5ktV3ENpuhr8CZTtquUuJ7oArE1LYSRKCayzpSry{' '}
                <i data-stringify-type="italic">Friktion Airdrop 1</i>
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}8WJg1SNrMtqX18entSkfPjfNcK7tXum72tspzQJL8iW4{' '}
                <i data-stringify-type="italic">Friktion Airdrop 2</i>
              </ListItemText>
            </ListItem>
          </List>

          <List
            sx={{
              mb: '32px',
            }}
          >
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Bought <b>1 Lightning OG NFT</b> from each wallet
                (Total Paid: 34.88 SOL)
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Swapped 0.25 SOL to USDC in each address and used
                Entropy Markets (1 BTC-PERP Trade)
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Put 0.3 SOL from each address in the SOL call
                option Volt
              </ListItemText>
            </ListItem>
            <ListItem sx={styles.listItem}>
              <ListItemText>
                &#9679;{'  '}Swapped 2.4 SOL to USDC in each address and used
                0.8 SOL in 3 strategies (Volts 2, 3, 4)
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default AlphaTwenty;
