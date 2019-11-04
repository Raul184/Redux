import React, { Component , useState} from 'react'
import { PubSubContext } from '../pubsub';
//Action Obj
import { newMessage } from '../Actions/messages';

// const pubsub = pubSubContext.pubsub;

export default class PublishMessage extends Component {
  state = {
    text: ''
  }
  //on Enter 
  handlePress = (e) => e.key === 'Enter' && this.publish();

  //Collect User Input
  updateTxt = (e) => {
    this.setState({
      [e.target.name ] : e.target.value 
    })
  }
  //Publish into the channel
  publish = () => {
    const { text } = this.state;
    this.context.pubsub.publish(newMessage(text));
  }
  render() {
    return (
      <>
        <h3>Got something to say</h3>
        <input name='text' onChange={this.updateTxt} onKeyPress={this.handlePress}/>
        <button onClick={this.publish}>Publish it</button>
      </>
    )
  }
  static contextType = PubSubContext;
}
// Type 
// PublishMessage.contextType = PubSubContext;