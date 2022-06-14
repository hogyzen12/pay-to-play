import { useEffect, useRef } from 'react';
import { CardMedia } from '@mui/material';
import styles from './EmbeddedVideo.styles';

const EmbeddedVideo = ({
  videoLink,
  customStyles = {},
  fullScreen = true,
  videoTitle = 'embedded video',
  videoExpanded,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoExpanded && videoRef.current) {
      videoRef.current.src = videoLink;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoExpanded, videoLink]);

  return (
    <CardMedia
      sx={{ ...styles.default, ...customStyles }}
      allowFullScreen={fullScreen}
      title={videoTitle}
      src={videoLink}
      ref={videoRef}
      frameBorder={0}
      loading="lazy"
      component="iframe"
    />
  );
};

export default EmbeddedVideo;
