import React, { useState } from 'react';

function NumberPrinter() {
  const [number, setNumber] = useState();

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(<p key={i}>{i}</p>);
  }

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} style={{margin: 15}} placeholder="Enter a number"/>
      <div>{numbers}</div>
    </div>
  );
}

export default NumberPrinter;
