import React from 'react'
import { useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actions/actionTypes'

const IncreaseByTwoCounter = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({type: actionTypes.INCREASE_BY_TWO_COUNTER, payload: 2})}>Increase by 2</button>
    </div>
  )

}

export default IncreaseByTwoCounter;
