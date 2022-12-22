import React, { useState, useEffect } from 'react';

function ImagesCounter() {
  const [count, setCount] = useState(() => {
    const initialCount = localStorage.getItem('count2');
    return initialCount ? Number(initialCount) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('count2', count);
  }, [count]);

  return <>{count}</>;
}

export default ImagesCounter;