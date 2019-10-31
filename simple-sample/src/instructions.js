import React from 'react';
import {connect} from 'react-redux';
import { expandInstructions , cancelInstructions} from './actions/actions';

const Instructions = props => {
  const {cancelInstructions , expandInstructions} = props;
  if(props.instructionsExpanded){
    return (
      <div>
        <h3>Instructions</h3>
        <p>Welcome to evens or odds. The game goes like this</p>
        <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
        <p>Make a choice on every draw, and see how many you get right!</p>
        <p>(Face cards don't count)</p>
        <br/>
        <button onClick={cancelInstructions}>Show Less</button>
      </div>
    )
  }
  return (
      <div>
        <h3>Instructions</h3>
          <p>Welcome to evens or odds. The game goes like this...</p>
          <button onClick={expandInstructions}>Read More</button>
      </div>
  )
}

const mapStateToProps = state => {
  return {instructionsExpanded: state.instructionsExpanded}
}

const mapDispatchToProps = dispatch => {
  return {
    expandInstructions: () => dispatch(expandInstructions()),
    cancelInstructions: () => dispatch(cancelInstructions())
  }
}

const compConnector = connect(mapStateToProps , mapDispatchToProps);

export default compConnector(Instructions);