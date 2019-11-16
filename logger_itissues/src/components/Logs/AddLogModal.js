import React , {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const AddLogModal = ({ addLogs }) => {
  const [ message , setMessage ] = useState('');
  const [ attention , setAttention ] = useState(false);
  const [ tech , setTech ] = useState('');

const onSubmit = () => {
  if(message === '' || tech === ''){
    M.toast({
      html: 'Please enter a message and select a technician'
    })
  }else 
  {  
    const data = {message , attention , tech , date: new Date()}
    addLogs(data);

    //UI
    M.toast({ html: `Log added by ${tech}`});
    setMessage('');
    setAttention(false);
    setTech('');
  }
}
  return (
    <div id="add-log-modal" className="modal" style={styles}>
      <div className="modal-content">
        <h4>Logs Register</h4>
          <div className="input-field">
            <input 
              type="text" 
              name="message" 
              value={message} 
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className='active'>
              log message
            </label>
        </div>
          <div className="input-field">
            <select 
              name="tech" 
              className="browser-default" 
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>Select</option>
              <option value="1">Jhon</option>  
            </select>
          </div>
          <div className="input-field">
            <p>
            <label>
              <input 
                type="checkbox" 
                className='filled-in' 
                checked={attention} 
                value={attention}
                onChange={ e => setAttention(!attention)}
              />
              <span>Priority</span>
            </label>
            </p>
          </div>
      </div>
      <div className="modal-footer">
        <a 
          href="#!" 
          onClick={onSubmit} 
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

const styles = {
  height: "75%" ,
  width: "75%"
}

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired,
}

export default connect(null, {addLogs})(AddLogModal);


