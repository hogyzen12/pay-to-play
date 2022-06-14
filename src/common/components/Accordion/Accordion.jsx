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
import { EmbeddedVideo } from 'common/components';
import { styles } from './Accordion.styles';

const Accordion = ({ id, title, archive, video, description }) => {
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
        {typeof description === 'string' ? (
          <Typography sx={styles.description} variant="body2" component="p">
            {description}
          </Typography>
        ) : (
          description.map(({ question, answer }, index) => (
            <Box
              sx={{
                pb: '8px',
                mb: '16px',
                borderBottom: '1px solid #A2A2A2',
              }}
              key={index}
            >
              <Typography sx={{ mb: '6px' }} variant="h3">
                {index + 1}.{question}:
              </Typography>
              <Typography variant="body2">{answer}</Typography>
            </Box>
          ))
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

        {video && (
          <EmbeddedVideo
            videoLink={video.link}
            videoTitle={video.title}
            videoExpanded={Boolean(expanded)}
          />
        )}
      </AccordionDetails>
    </AccordionItem>
  );
};

export default Accordion;
