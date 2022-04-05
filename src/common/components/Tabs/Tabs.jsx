import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Answer } from 'common/components';
import { staticContent } from 'common/static/content';
import { styles } from './Tabs.styles';

const BasicTabs = () => {
  const [value, setValue] = useState(0);
  const { across, down } = staticContent.pages.crossword.submitModal;

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={styles.wrapper}>
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
          <Answer number="1" question="Dui adipiscing vitae dui" />
          <Answer number="2" question="Dui adipiscing vitae dui" />
          <Answer number="3" question="Dui adipiscing vitae dui" />
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Answer number="4" question="Malesuada venenatis commodo duis" />
          <Answer number="5" question="Malesuada venenatis commodo duis" />
          <Answer number="6" question="Malesuada venenatis commodo duis" />
        </Box>
      )}
    </Box>
  );
};

export default BasicTabs;
