import React from 'react'
import { useState } from 'react';
function Wrapper(props) {

    const[counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter +  1);
    }

  return (
    <div>
        {props.render(counter, handleIncrement)}
    </div>
  )
}

export default Wrapper