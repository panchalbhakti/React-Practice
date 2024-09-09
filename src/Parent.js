import React from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <div className='container'>
      <h1 style={{ color: 'purple'}}>This is the Parent Component</h1>
      <Child message="Hello from Parent Component!" />
    </div>
  );
};

export default Parent;

