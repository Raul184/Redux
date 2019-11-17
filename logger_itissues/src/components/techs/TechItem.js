import React from 'react'
import PropTypes from 'prop-types'
import { FaEraser } from 'react-icons/fa';
import M from 'materialize-css/dist/js/materialize.min';
//redux
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techsActions';


const TechItem = ({info , deleteTech}) => {
  const handleClickDelete = () => {
    deleteTech(info.id);
    M.toast({ html: 'Deletion completed'})
  }
  return (
    <li className="collection-item">
      {info.firstName} {info.lastName}
      <a href="#!" className="secondary-content" onClick={handleClickDelete}>
        {<FaEraser/>}
      </a>
    </li>
  )
}

TechItem.propTypes = {
  info: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null , { deleteTech })(TechItem)
