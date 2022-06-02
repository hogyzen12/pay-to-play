import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { articlesRoutes } from 'routes';
import { Confirmation } from 'common/components';
import AppBar from './AppBar';
import AppWrapper from './AppWrapper';

const styles = {
  layout: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    width: '100%',
    gridTemplateAreas: `
			"AppBar"
			"AppWrapper"
		`,
  },
};

const ArticlesLayout = ({
  hours,
  minutes,
  seconds,
  openAgreement,
  setOpenAgreement,
}) => {
  const [isArticle, setIsArticle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isArticle) setOpenAgreement(true);
  }, [isArticle, setOpenAgreement]);

  useEffect(() => {
    articlesRoutes.forEach(route => {
      if (pathname.includes(route.path)) {
        setIsArticle(true);
        return;
      }
    });
  }, [pathname]);

  return (
    <>
      <Box sx={styles.layout}>
        <AppBar hours={hours} minutes={minutes} seconds={seconds} />

        <AppWrapper>
          <Outlet />
        </AppWrapper>
      </Box>

      {isArticle && (
        <Confirmation open={openAgreement} setOpen={setOpenAgreement} />
      )}
    </>
  );
};

export default ArticlesLayout;
