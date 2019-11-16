import React , {useState , useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logActions';


const EditLogModal = ({ current , updateLogs }) => {
  const [ message , setMessage ] = useState('');
  const [ attention , setAttention ] = useState(false);
  const [ tech , setTech ] = useState('');

  useEffect(() => {
    if(current){
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if(message === '' || tech === ''){
      M.toast({
        html: 'Please enter a message and select a technician'
      })
    }
  else {
    const data = { 
      id: current.id , 
      message , 
      attention , 
      tech ,
      date: new Date() 
    };

    updateLogs(data);
    M.toast({
      html: 'Log updated'
    });

    setMessage('');
    setAttention(false);
    setTech('');
  }  
}

  return (
    <div id="edit-log-modal" className="modal" style={styles}>
      <div className="modal-content">
        <h4>Logs Edit</h4>
          <div className="input-field">
            <input 
              type="text" 
              name="message" 
              value={message} 
              onChange={e => setMessage(e.target.value)}
            />
            {/* <label htmlFor="message" className='active'>
              log message
            </label> */}
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
//Styles
const styles = {
  height: "75%" ,
  width: "75%"
}

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLogs : PropTypes.func.isRequired,
}
//Redux
const mapStateToProps = state => (
  {
    current: state.log.current
  }
)
export default connect( mapStateToProps , { updateLogs })(EditLogModal);


