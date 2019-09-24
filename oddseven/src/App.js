import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { startGame, cancelGame } from './actions/actions';

class App extends Component {
  startGame = () => this.props.dispatch(startGame());
  cancelGame = () => this.props.dispatch(cancelGame());
  render() {
    console.log(this)
    return (
      <div className="App">
        <h2><span>🎰</span> Even or Odds <span>🎰</span></h2>
        {
          this.props.state.gameStarted ? (
            <div>
              <h3>The game is on! <span>🃏</span></h3>
              <br/>
              <button onClick={this.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits <span>🃏</span></h3>
              <br/>
              <button onClick={this.startGame}>Start Game</button>
            </div>
          )
        }
    </div>
    )
  }
}

//Redux special one
const mapStateToProps = state => {
  console.log('state on APP' ,state)
  return { state }
}
//Connection between Redux Store and App.
//mapStateToProps is just a futher way to customize the connect with redux store from our App
const connector = connect(mapStateToProps);

export default connector(App);
