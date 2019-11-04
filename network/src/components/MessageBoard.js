import React from 'react'
import { connect } from 'react-redux'

function MessageBoard({messages}) {
  return (
    <div>
      {
        messages.items.map( item => {
          return (
            <div key={item.id}>
              <p>{item.text}</p>
              <h4>{new Date(item.timeStamp).toLocaleString()}</h4>
              <hr/>
            </div>
          ) 
        })
      }
    </div>
  )
}

const mapStateToProps = ({ messages }) => ({ messages }) ;

export default connect(
  mapStateToProps
)(MessageBoard);