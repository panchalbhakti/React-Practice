import React from 'react';
import Parent from './Parent';
import CounterButton from './CounterButton';
import Button from './Button';
import FunctionalComp from './FunctionalComp';
import NumberPrinter from './NumberPrinter';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallBack from './UseCallBack';
import UseEffect2 from './UseEffect2';

const App = () => {
  return (
    <div>
      <Parent /> {/* Props */}
      <CounterButton /> {/* State */} 
      <Button /> {/* React Event Handling */}
      <FunctionalComp /> {/* Functional Component */}
      <div className='container' style={{
          backgroundColor: 'beige', 
          width:300, 
          padding: 20,
          height:'fit-content', 
          display:'flex', 
          justifyContent: 'center', 
          alignItems:'center',
          flexDirection:'column',
          borderRadius: 20
        }}>
        <h1>Number Printer</h1>
        <NumberPrinter />
        </div>
        <UseEffect />
        <UseMemo />
        <UseCallBack />
        <UseEffect2 />
    </div>
  );
};

export default App;


// Functional components are simpler and just JavaScript functions. They receive props as arguments.
//Hooks: Functional components use Hooks like useState to manage state and useEffect to handle side effects.
// useEffect: useEffect is a hook in React that lets you perform side effects in functional components.