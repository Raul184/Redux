import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { FaEraser } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteLogs } from '../../actions/logActions';
//Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

function LogItem({info , deleteLogs}) {
  const handleClick = () => {
    deleteLogs(info.id);
    M.toast({ html: 'Deletion completed'})
  }
  return (
    <li className="collection-item">
      <a href="#edit-log-modal" 
      className={`modal-trigger 
      ${info.attention ? 'red-text' : 'blue-text'}`}
      style={{ 'display': 'block'}}
      >
        {info.message}
      </a>   
      <span className="grey-text">
        <span className="black-text">ID #{info.id} </span>last updated by
        <span className="black-text"> {info.tech} </span> 
        on <Moment format="Do MMMM YYYY , h:m:ss a">{info.date}</Moment>
      </span>
      <a href="#!" className="secondary-content" onClick={handleClick}>
        {<FaEraser />}
      </a>
    </li>
  )
}
LogItem.propTypes = {
  info: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
}

export default connect(null, { deleteLogs })(LogItem);
