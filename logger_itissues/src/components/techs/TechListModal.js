import React , { useEffect } from 'react';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techsActions';


const TechListModal = ({ tech: { techList , loading } , getTechs }) => {
  useEffect(()=> {
    getTechs();
  }, 
  // eslint-disable-next-line
  []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techList.map( el => (
              <TechItem key={el.id} info={el} />
            )) 
          }
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => state 


export default connect(mapStateToProps , { getTechs } )(TechListModal)
