import React from 'react'
import { connect } from 'react-redux';
import { userGuessEven , userGuessOdd } from '../actions/actions';

const Guess = ({ guess , userGuessEven , userGuessOdd }) => {
  return (
    <>
      <h3>Ever or Odd? Play and find out!</h3>
      <button onClick={ userGuessOdd } style={guess === 'odd' ? {border: '2px solid #43a047'}: null }>
        Odd
      </button>
      <button onClick={ userGuessEven } style={guess === 'even' ? {border: '2px solid #43a047'}: null}>
        Even
      </button>
    </>
  )
}

export default connect(
  ({ guess }) => ({ guess }),
  { userGuessEven , userGuessOdd }
)(Guess);