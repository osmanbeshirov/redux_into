import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseCounter } from '../redux/actions/counterActions';


const IncreaseCounter = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increaseCounter())}>Increase Counter</button>
    </div>
  )

}



export default IncreaseCounter;