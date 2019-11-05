import React from 'react'
import { connect } from 'react-redux'
import CreateReaction from './CreateReaction';

const MessageReactions = (props) => {
  if(!props.messageReactions) return null;

  return (
    props.messageReactions.map( (reaction , index) => {
      return(
        <span key={reaction.id}>
          <em>{reaction.userName}:</em>
          {reaction.emoji}
          {index !== props.messageReactions.length -1 ? ',' : null}
        </span>
      )
    })
  )
}
function MessageBoard({messages , reactions}) {
  return (
    <div>
      {
        messages.items.map( item => {
          return (
            <div key={item.id}>
              <p>{item.text}</p>
              <h4>{new Date(item.timeStamp).toLocaleString()}</h4>
              <p>{item.userName}</p>
              <CreateReaction messageId={item.id} />
              <MessageReactions messageReactions={reactions[item.id]} />
              <hr/>
            </div>
          ) 
        })
      }
    </div>
  )
}

const mapStateToProps = ({ messages , reactions }) => ({ messages , reactions }) ;

export default connect(
  mapStateToProps
)(MessageBoard);