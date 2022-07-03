import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseCounter } from '../redux/actions/counterActions';

const DecreaseCounter = () => {

  const dispatch = useDispatch();



  return (
    <div>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease Counter</button>
    </div>
  )

}

export default DecreaseCounter;
