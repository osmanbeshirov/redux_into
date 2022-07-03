import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';

const IncreaseByTwoCounter = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increaseByTwoCounter())}>Increase by 2</button>
    </div>
  )

}

export default IncreaseByTwoCounter;
