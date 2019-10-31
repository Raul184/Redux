import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {startGame , cancelGame , processNueDeck} from './actions/actions';
import Instructions from './components/instructions';
class App extends React.Component {
  //Just using MapStateToProps
  // <button onClick={this.handleCancel}>Cancel Game</button>
  // handleCancel = () => this.props.dispatch(cancelGame());
  startGame = async () => {
    //UI reducer
    this.props.startGame();
    this.props.processNueDeck();
  }

  render(){
    console.log(this);
    if(this.props.notGrab === false){
      return (
        <>
          <p>Please try reloading the app. An error occurred</p>
          <p>{this.props.error}</p>
        </>
      )
    }
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
              <button onClick={this.startGame}>Start Game</button>
              <hr />
              <Instructions />
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
  cancelGame,
  processNueDeck
});

// export default App;
export default compConnector(App);
