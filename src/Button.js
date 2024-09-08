import React, { useState } from 'react';

const ButtonClick = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
};

export default ButtonClick;