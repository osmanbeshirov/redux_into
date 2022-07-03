import React from 'react';
import {useSelector} from 'react-redux';

const Counter = () => {

  const counters = useSelector(state => state.counter);


  return (
    <div>
      <h1>{counters}</h1>
    </div>
  )

}

export default Counter;


