import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { FaEraser } from 'react-icons/fa';

export default function LogItem({info}) {
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
      <a href="#!" className="secondary-content">{<FaEraser />}</a>
    </li>
  )
}
LogItem.propTypes = {
  info: PropTypes.object.isRequired,
}