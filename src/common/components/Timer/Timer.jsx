import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { Box, Typography } from '@mui/material';
import { useModal } from 'common/hooks';
import { expiryTimestamp, timeAmount } from 'common/static/constants';
import { modalOpened } from 'redux/modal/modalSlice';
import { routes, articlesRoutes } from 'routes';
import { styles } from './Timer.styles';

expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeAmount);

const Timer = () => {
  const [isArticle, setIsArticle] = useState(false);
  const { isModalOpen } = useModal();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hours, minutes, seconds, restart, pause, isRunning } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => navigate(routes.home),
  });

  useEffect(() => {
    if (isArticle) dispatch(modalOpened('confirm'));
  }, [isArticle, dispatch]);

  useEffect(() => {
    articlesRoutes.forEach(route => {
      if (pathname.includes(route.path)) {
        setIsArticle(true);
        return;
      }
    });
  }, [pathname]);

  useEffect(() => {
    !isModalOpen && isArticle ? resetTimer() : pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10799);
    restart(time);
  };

  return (
    <Box sx={styles.timer}>
      {isRunning && (
        <Typography
          sx={minutes === 0 && seconds <= 10 ? styles.timeEnd : styles.time}
          variant="h3"
        >
          {hours < 10 ? `0${hours}` : hours} :{' '}
          {minutes < 10 ? `0${minutes}` : minutes} :{' '}
          {seconds < 10 ? `0${seconds}` : seconds}
        </Typography>
      )}
    </Box>
  );
};

export default Timer;
