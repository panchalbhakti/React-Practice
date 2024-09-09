import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState();

  return (
    <div>
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
    </div>
  );
};

export default CounterButton;