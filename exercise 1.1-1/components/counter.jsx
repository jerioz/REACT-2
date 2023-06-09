import React from 'react'
import { useState } from 'react';

const Counter = (props) => {
   const [counter, setCounter] = useState(props.initialValue) 
   const increment = () => {
        setCounter(counter + 1)
   }
   const decrement = () => {
        setCounter(counter - 1)
   }
    
  return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}


export default Counter