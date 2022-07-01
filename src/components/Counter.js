import React, { Component } from 'react';
import counterReducer from '../redux/reducers/counterReducer';
import counter from '../redux/reducers/index';

import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {counter: state.counterReducer}
}

export default connect(mapStateToProps)(Counter)
