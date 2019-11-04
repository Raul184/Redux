import React, { Component } from 'react'
import { PubSubContext } from '../pubsub';
//Action Obj
import { newMessage } from '../Actions/messages';
import { connect } from 'react-redux';

// const pubsub = pubSubContext.pubsub;
class PublishMessage extends Component {
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
    const {userName} = this.props;
    this.context.pubsub.publish(newMessage( {text , userName}));
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

const mapStateToProps = ({ userName }) => ({ userName })

export default connect(mapStateToProps)(PublishMessage);