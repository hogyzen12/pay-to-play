import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Answer } from 'common/components';
import { styles } from './Tabs.styles';
import staticContent from 'common/static/content.json';

const { across, down } = staticContent.pages.crossword.submitModal;

const BasicTabs = ({ customStyles = {}, initialResults }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
          value={activeTab}
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

      {activeTab === 0 && (
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
      {activeTab === 1 && (
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
