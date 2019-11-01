import React from 'react';
import { connect } from 'react-redux';
import { drawACard } from '../actions/actions';

const DrawCard = ({ deck_id , drawACard }) => {
  return (
    <>
      <button onClick={() => drawACard(deck_id)}>Draw next card!</button>
    </>
  )
}

export default connect(
  ({deck_id}) => ({ deck_id }),
  {
    drawACard
  }
)(DrawCard);