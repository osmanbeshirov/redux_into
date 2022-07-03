import React from 'react'
import { useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actions/actionTypes'


const IncreaseCounter = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: actionTypes.INCREASE_COUNTER, payload: 1 })}>Increase Counter</button>
    </div>
  )

}



export default IncreaseCounter;