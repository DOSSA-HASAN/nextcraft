'use client'
import React, { useState } from 'react'


function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Current click count: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
