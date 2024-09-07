import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Using useEffect to update the document title after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);  // Runs only when `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
