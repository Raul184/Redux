import React , { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//Needs To Be Initialized
import M from 'materialize-css/dist/js/materialize.min.js';
import Nav from './components/layout/Nav';

function App() {
  useEffect( () => {
    M.AutoInit();
  })
  return (
    <>
      <Nav />
      <h1>Hello</h1>
    </>
  );
}

export default App;
