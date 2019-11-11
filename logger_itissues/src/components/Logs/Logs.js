import React , { useState , useEffect } from 'react'
import LogItem from './LogItem';
import Loader from '../layout/Loader';

const Logs = () => {
  const [ logs , setLogs ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect( () => {
    getLogs();
  },
  []);

  //Get req
  const getLogs = async () => {
    //1
    setLoading(true);
    //2
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  }
  if(loading) {return <Loader />}

  return (
    <ul className="collection with-header">
      <li className="collection-header" >
        <h4 className="center">System Logs</h4>
      </li>
      { 
      !loading && logs.length === 0 ? 
        <p>No logs to show..</p>
      :
        logs.map(el => <LogItem key={el.id} info={el}/>)
      }
    </ul>
  )
}

export default Logs;