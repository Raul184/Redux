import React from 'react';
import { connect } from 'react-redux';

const Card = ({cards}) => {

  if(!cards[0]) return null
  
  const { value , suit , image } = cards[0];
  return (
    <>
      <h3>{value} of {suit}</h3>
      <img src={image} alt='card'/>
    </>
  )
}

export default connect(({ cards }) => ({ cards }))(Card);