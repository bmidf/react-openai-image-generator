import React, { useState, useEffect } from 'react';

function PeopleCounter() {
  const [count, setCount] = useState(() => {
    const initialCount = localStorage.getItem('count');
    return initialCount ? Number(initialCount) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return <>{count}</>;
}

export default PeopleCounter;