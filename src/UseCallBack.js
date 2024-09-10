import React, {useCallback, useState} from "react";

const useCallBack = () => {
    const[count, setCount] = useState([]);

    const handleClick = useCallback(()=> {
        console.log("Button was clicked!");
    }, [count]);

    return(
        <div className="container">
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Counts</button>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default useCallBack;

//useCallback in React helps you save a function so it doesn’t get recreated every time your component re-renders. 