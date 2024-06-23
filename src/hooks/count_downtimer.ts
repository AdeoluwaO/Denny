import {useEffect, useState} from 'react';

const useCountdownTimer = (timeInSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState(timeInSeconds);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  const resetTimeLeft = (value: number) => setTimeLeft(value);

  const minutes = parseInt(String(timeLeft / 60), 10);
  const seconds = parseInt(String(timeLeft % 60), 10);

  return {
    formattedTime:
      timeLeft < 60
        ? `${seconds}s`
        : `${minutes}m:${seconds < 10 ? `0${seconds}` : seconds}s`,
    timeLeft,
    resetTimeLeft,
  };
};

export default useCountdownTimer;
