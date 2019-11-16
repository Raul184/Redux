import React , { useEffect } from 'react'
import LogItem from './LogItem';
import Loader from '../layout/Loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//actions
import { getLogs } from '../../actions/logActions';

const Logs = ({ log : { logs , loading } , getLogs}) => {
  useEffect( () => {
    getLogs();
  },
  [getLogs]);

  if(loading) {return <Loader />}

  return (
    <ul className="collection with-header">
        <h4 className="center">System Logs</h4>
      { 
      !loading && logs.length === 0 ? 
        <p>No logs to show..</p>
      :
        logs.map(el => <LogItem key={el.id} info={el}/>)
      }
    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}

//State 
const mapStateToProps = state => ({
  log: state.log
})

export default connect(
  mapStateToProps ,
  {getLogs}
)(Logs);

