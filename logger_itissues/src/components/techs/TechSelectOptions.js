import React , { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techsActions';


const TechSelectOptions = ({ getTechs , tech:{ techList , loading } }) => {
  useEffect( () => {
    getTechs();
  },
  // eslint-disable-next-line 
  []);

  return (
    !loading && techList !== null && techList.map( el => 
      <option key={el.id} value={`${el.firstName} ${el.lastName}`}>
        {el.firstName} {el.lastName}
      </option>
    )
  )
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect( mapStateToProps , { getTechs })(TechSelectOptions);
