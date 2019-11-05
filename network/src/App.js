import React from 'react';
import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard';
import UserName from './components/UserName';

function App() {
  return (
    <div className="App">
      <h2>Reactions</h2>
      <UserName />
      <PublishMessage />
      <MessageBoard />
    </div>
  );
}

export default App;
