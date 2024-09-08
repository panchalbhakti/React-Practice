import React, { useState, useEffect } from 'react';

const Example = () => {
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

//useEffect is a tool in React that lets you run extra code after your component has done something, like showing on the screen. This extra code is called a side effect and can include things like: getting data from the internet.