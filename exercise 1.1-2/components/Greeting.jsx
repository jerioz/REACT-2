import React from 'react'
import { useState, useEffect } from 'react'

const Greeting = (props) => {
      const [greetingName ,setGreetingName] = useState(props.name)
      useEffect(() => {
        setTimeout(() => {
        setGreetingName('Alfonsina');
        }, 3000);
        }, []);
    
  return (
    <div>
        <p>Hola {greetingName}</p>
    </div>
  )
}

export default Greeting