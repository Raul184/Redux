import React from 'react'
import PropTypes from 'prop-types'
import { FaEraser } from 'react-icons/fa';


const TechItem = ({info}) => {
  return (
    <li className="collection-item">
      {info.firstName} {info.lastName}
      <a href="#!" className="secondary-content">
        {<FaEraser/>}
      </a>
    </li>
  )
}

TechItem.propTypes = {
  info: PropTypes.object.isRequired,
}

export default TechItem
