import { useEffect, useState, useRef } from 'react';

const useCountdown = (targetDate, targetTime) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    setDate();
    counter();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDate = () => {
    const todaysDate = new Date().getTime();
    const countDownDate = new Date(targetDate + ' ' + targetTime).getTime();
    const distance = countDownDate - todaysDate;

    if (distance < 0) {
      clearInterval(intervalRef.current);
      setIsExpired(true);
    } else {
      const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutesLeft = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60),
      );
      const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
      setIsExpired(false);
    }
  };

  const counter = () => {
    intervalRef.current = setInterval(() => setDate(), 1000);
  };

  return { days, hours, minutes, seconds, isExpired };
};

export default useCountdown;
