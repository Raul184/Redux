import React , { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {searchLogs} from '../../actions/logActions';

const Nav = ({ searchLogs }) => {
  const text = useRef('');
  const handleChange = () => {
    console.log(text);
    searchLogs(text.current.value);
  }
  return (
  <nav style={{ marginBottom: '40px'}} className="blue">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" 
            type="search" 
            required
            placeholder="Search logs.."
            ref={text}
            onChange={handleChange}
          />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}
Nav.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}
export default connect(null , { searchLogs })(Nav);