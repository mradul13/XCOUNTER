import {React, useState} from 'react';

const Counter = ()=>{
    const [count, setCounter] = useState(0);

    // const incrementCounter = ()=>{
    //     setCounter((prev)=>prev+1);
    // }

    // const decrementCounter = ()=>{
    //     setCounter((prev)=>prev-1)
    // }

    return (
        <>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={()=>{setCounter((prev)=>prev+1)}}>Increment</button>
            <button onClick={()=>{setCounter((prev)=>prev-1)}}>Decrement</button>
        </>
    )
}

export default Counter;