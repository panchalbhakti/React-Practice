import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
};

export default CounterButton;