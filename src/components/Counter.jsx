import React, { useState } from 'react';

const Counter = function() {
    let [count, setCount] = useState(0)

    function increment() {
        setCount((prevCount) => prevCount + 1)
    }

    function decrement() {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
        </div>
    )
}

export default Counter;