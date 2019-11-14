import React , { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//Needs To Be Initialized
import M from 'materialize-css/dist/js/materialize.min.js';
import Nav from './components/layout/Nav';
import Logs from './components/Logs/Logs.js';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
  useEffect( () => {
    //Init materializeJS
    M.AutoInit();
  })
  return (
    <>
      <Nav />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />  
      </div>
    </>
  );
}

export default App;
