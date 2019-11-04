import React from 'react'
import { connect } from 'react-redux';
import { setUserName } from '../Actions/users';

function UserName({ setUserName }) {
  return (
    <>
      <h2>Username</h2>
      <input onChange={setUserName}/>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setUserName: e => dispatch(setUserName(e.target.value))
  }
}
export default connect( null, mapDispatchToProps )(UserName);