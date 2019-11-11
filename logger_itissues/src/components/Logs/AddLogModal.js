import React , {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModal = () => {
  const [ message , setMessage ] = useState('');
  const [ attention , setAttention ] = useState(false);
  const [ tech , setTech ] = useState('');

const onSubmit = () => {
  message === '' || tech === '' ?
    M.toast({
      html: 'Please enter a message and select a technician'
    })
  :
  console.log('submitted');

   //clear fields
   setMessage('');
   setAttention(false);
   setTech('');
   
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


export default AddLogModal;


