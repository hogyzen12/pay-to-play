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
import graph from 'assets/image/graph1.png';
import graphSecond from 'assets/image/graph2.png';

const { title, description } = staticContent.meta.atricles;

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
        <Typography sx={styles.regular}>
          If you wanted to make money in 2021 you would have bought SOL or LUNA,
          both of which ran up over 100x. What about 2022?
        </Typography>
        <CardMedia sx={{ mb: '24px' }} component="img" src={graph} />
        <Typography sx={{ mb: '32px' }}>
          Disclaimer: Not financial nor investment advice. Any capital-related
          decisions you make is your full responsibility.
        </Typography>
        <Typography sx={styles.title} variant="h3">
          Crypto&apos;s Growth Path
        </Typography>
        <Typography sx={styles.regular}>
          If you haven&apos;t found out what “The Sauce” is in crypto yet then
          start off with this thread first
        </Typography>
        <Typography sx={styles.regular}>The Crypto Sauce</Typography>
        <Typography sx={styles.regular}>
          “Understand how this market is built and you will understand where
          it&apos;s going”
        </Typography>
        <Typography sx={styles.regular}>
          This recipe is the base to all of our research
        </Typography>
        <Typography sx={styles.regular}>A thread</Typography>
        <Typography sx={styles.regular}>
          — Cryptonary (
          <Box sx={styles.italicText} component="span">
            @
          </Box>
          cryptonary){' '}
          <Link
            href="https://twitter.com/cryptonary/status/1492343561127448577?ref_src=twsrc%5Etfw"
            sx={styles.link}
          >
            February 12, 2022
          </Link>
        </Typography>
      </AppContainer>
    </>
  );
};

export default Alpha;
