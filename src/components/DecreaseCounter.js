import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../redux/actions/actionTypes'

const DecreaseCounter = () => {

  const counters = useSelector(state => state);
  const dispatch = useDispatch();



  return (
    <div>
      <button onClick={() => dispatch({type: actionTypes.DECREASE_COUNTER, payload: 1 })}>Decrease Counter</button>
    </div>
  )

}

export default DecreaseCounter;
