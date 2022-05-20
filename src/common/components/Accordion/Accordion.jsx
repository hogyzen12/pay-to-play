import { useState } from 'react';
import {
  Box,
  Link,
  Typography,
  Accordion as AccordionItem,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { styles } from './Accordion.styles';

const Accordion = ({ id, title, archive, description }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = itemID => {
    expanded === itemID ? setExpanded(0) : setExpanded(itemID);
  };

  return (
    <AccordionItem sx={styles.item} onChange={() => handleChange(id)}>
      <AccordionSummary
        expandIcon={
          expanded === id ? (
            <RemoveIcon width={20} sx={styles.icon} />
          ) : (
            <AddIcon sx={styles.icon} />
          )
        }
      >
        <Typography variant="body1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={expanded === id ? styles.detailsExpanded : styles.details}
      >
        {description && (
          <Typography sx={styles.description} variant="body2" component="p">
            {description}
          </Typography>
        )}

        {archive && (
          <Box component="ul">
            {archive.map(({ text, link, id }) => (
              <Box key={id} component="li">
                {text && (
                  <Typography
                    sx={{ ...styles.text, display: link ? 'inline' : 'block' }}
                    component="span"
                  >
                    {text}
                  </Typography>
                )}{' '}
                {link && (
                  <Link sx={styles.link} href={link} target="_blank">
                    open
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        )}
      </AccordionDetails>
    </AccordionItem>
  );
};

export default Accordion;
