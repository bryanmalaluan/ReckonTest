import React from 'react';

/** hooks for interval polling */
const useInterval = () => {
  const [count, setCount] = React.useState<number>(0);
  const intervalRef = React.useRef<any>(null);

  React.useEffect(() => {
    startInterval();

    return () => {
      stopInterval();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCount(prevState => prevState + 1);
    }, 2000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return {count, startInterval, stopInterval};
};

export default useInterval;
