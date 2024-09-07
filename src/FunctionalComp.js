import React, { useState } from 'react'

const FunctionalComp = () => {
    const[count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default FunctionalComp
