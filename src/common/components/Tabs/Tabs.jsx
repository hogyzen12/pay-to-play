import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Answer } from 'common/components';
import staticContent from 'common/static/content.json';
import { styles } from './Tabs.styles';

const BasicTabs = ({ customStyles = {}, initialResults }) => {
  const [value, setValue] = useState(0);
  const { across, down } = staticContent.pages.crossword.submitModal;

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.controls}>
        <Tabs
          indicatorColor="primary"
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#4AAF47',
            },
          }}
          sx={styles.tabs}
          value={value}
          onChange={handleChange}
        >
          <Tab
            sx={styles.tab}
            label={<Typography variant="h3">{across}</Typography>}
          />
          <Tab
            sx={styles.tab}
            label={<Typography variant="h3">{down}</Typography>}
          />
        </Tabs>
      </Box>

      {value === 0 && (
        <Box>
          {initialResults.across.map((result, index) => (
            <Answer
              key={index}
              number={result.number}
              question={result.clue}
              answer={result.answer}
            />
          ))}
        </Box>
      )}
      {value === 1 && (
        <Box>
          {initialResults.down.map(result => (
            <Answer
              key={result.number}
              number={result.number}
              question={result.clue}
              answer={result.answer}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BasicTabs;
