import React from 'react';
import './App.css';
import { connect } from 'react-redux';


function App(props) {  
  return (
    <div className="App">
      hello world
    </div>
  );
}

const mapStateToProps = state => console.log('state' ,state)
const connector = connect(mapStateToProps);

export default connector(App);
