import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {startGame , cancelGame} from './actions/actions';
class App extends React.Component {

  //Just using MapStateToProps
  // <button onClick={this.handleCancel}>Cancel Game</button>
  // handleCancel = () => this.props.dispatch(cancelGame());

  render(){
    console.log(this);
    return (
      <div className="App">
        <h1>
          <span>♥ ♠</span> Evens - Odds <span>♣ ♦</span>
        </h1>
        {
          this.props.gameStarted ? (
            <>
              <h3>The game is on!</h3>
              <br/>
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </>
          ):
          (
            <>
              <h3>A new game awaits</h3>
              <br/>
              <button onClick={this.props.startGame}>Start Game</button>
            </>
          )
        }
      </div>
    );
  }
}

//Map Store's state keys to become attached to App comp.
const mapStateToProps = state => {
  return state
}

//Map Store's methods to become attached to App comp.
// const mapDispatchToProps = dispatch => {
//   return{
//     startGame: () => dispatch(startGame())
//     // cancelGame: () => dispatch(cancelGame())
//   }
// }

const compConnector = connect(mapStateToProps , {
  startGame,
  cancelGame
});

// export default App;
export default compConnector(App);
