import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { staticContent } from 'common/static/content';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.atricles;

const Articles = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>
        <Typography>
          If you wanted to make money in 2021 you would have bought SOL or LUNA,
          both of which ran up over 100x. What about 2022?
        </Typography>
        <Typography>
          Disclaimer: Not financial nor investment advice. Any capital-related
          decisions you make is your full responsibility.
        </Typography>
        <Typography>Crypto&apos;s Growth Path</Typography>
        <Typography>
          If you haven&apos;t found out what “The Sauce” is in crypto yet then
          start off with this thread first
        </Typography>
        <Typography>The Crypto Sauce</Typography>
        <Typography>
          “Understand how this market is built and you will understand where
          it&apos;s going”
        </Typography>
        <Typography>This recipe is the base to all of our research</Typography>
        <Typography>A thread</Typography>
        <Typography>— Cryptonary (@cryptonary) February 12, 2022</Typography>
        <Typography>
          If you prefer delving into the details without a primer via a Tweet
          Thread then read the full research report here.
        </Typography>
        <Typography>
          Now that you&apos;ve read and understood the path crypto is on, then
          you logically see why Layer-1s such as Solana and Terra really boomed
          in 2021. What&apos;s next?
        </Typography>
        <Typography>Sector Hype | 2022</Typography>
        <Typography>
          Maybe calling it “hype” is uncalled for because some of these sectors
          are due for outperformance given the natural state of growth of this
          market. In other words, they are the solution to the most prominent
          problems faced today (not 5 years from now) in crypto.
        </Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </AppContainer>
    </>
  );
};

export default Articles;
