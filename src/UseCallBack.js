import React, {useCallback, useState} from "react";

const useCallback = () => {
    const[count, setCount] = useState(0);

    const handleClick = useCallback(()=> {
        console.log("Button was clicked!");
    }, [count]);

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default useCallback;