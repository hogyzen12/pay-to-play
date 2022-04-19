import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Tabs, Answer } from 'common/components';
import { ReactComponent as AcrossIcon } from 'assets/icons/across.svg';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import staticContent from 'common/static/content.json';
import { styles } from './Hints.styles';

const Hints = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { hints } = staticContent.pages.crossword;
  const { across, down } = staticContent.pages.crossword.submitModal;

  return (
    <Box sx={styles.hints}>
      <Typography sx={styles.title} variant="h3">
        {hints}
      </Typography>

      {matches ? (
        <Box sx={styles.axisWrapper}>
          <Box sx={styles.axis}>
            <Box sx={styles.axisHeading}>
              <Typography sx={styles.axisTitle} variant="h3">
                {across}
              </Typography>
              <AcrossIcon />
            </Box>
            <Box sx={styles.questionList} component="ul">
              <Box sx={styles.questionItem} component="li">
                <Typography sx={styles.questionNumber} component="span">
                  1.
                </Typography>
                <Typography sx={styles.question} component="span">
                  Bibendum a, fringilla et
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.axis}>
            <Box sx={styles.axisHeading}>
              <Typography sx={styles.axisTitle} variant="h3">
                {down}
              </Typography>
              <DownIcon />
            </Box>
            <Box sx={styles.questionList} component="ul">
              <Box sx={styles.questionItem} component="li">
                <Typography sx={styles.questionNumber} component="span">
                  1.
                </Typography>
                <Typography sx={styles.question} component="span">
                  Bibendum a, fringilla et
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Tabs customStyles={{ padding: '16px' }} />
      )}
    </Box>
  );
};

export default Hints;
