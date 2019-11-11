import React from 'react'
import { FaPlus , FaUser , FaUserPlus} from 'react-icons/fa';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a 
       href="#add-log-modal" 
       className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <FaPlus/>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" className="btn-floating green modal-trigger">
            <FaUser/> 
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <FaUserPlus/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddBtn;