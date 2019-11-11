import React , { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//Needs To Be Initialized
import M from 'materialize-css/dist/js/materialize.min.js';
import Nav from './components/layout/Nav';
import Logs from './components/Logs/Logs.js';

function App() {
  useEffect( () => {
    M.AutoInit();
  })
  return (
    <>
      <Nav />
      <Logs />
    </>
  );
}

export default App;
