import React, { Component } from 'react';
import { REACTION_OBJECTS } from '../Actions/types';  
import { createReaction } from '../Actions/reactions';
import { PubSubContext } from '../pubsub';
import { connect } from 'react-redux';

class CreateReaction extends Component {
  publishReaction = ({ type , emoji }) => () => {
    const {userName , messageId} = this.props;
    console.log(this.props)
    console.log(this);
    this.context.pubsub.publish(createReaction({ type , emoji , userName , messageId }));
  }
  render() {
    return (
      <>
        {
          REACTION_OBJECTS.map( emo => {
            const {type , emoji } = emo;
            return (
              <span key={type} className="emoji" onClick={this.publishReaction({type,emoji})}>{emoji}</span>
            ) 
          })
        }
      </>
    )
  }
}
CreateReaction.contextType = PubSubContext;

export default connect(
  (({userName}) => ({userName}))
)(CreateReaction);