import React from 'react';
import PropTypes from 'prop-types';

class BioIcons extends React.Component {
  constructor(){
    super();

  }
  render (){
    return(
          <div className='col s12 m4'>
            <div className='icon-block'>
              <h2 className='center black-text'>
                <i className='medium material-icons'>{this.props.icon}</i>
              </h2>
              <h5 className='center'>{this.props.title}</h5>
              <p className='black-text'>{this.props.info}</p>
            </div>
          </div>
    )
  }
}

/*Bio.propTypes = {
  text: PropTypes.string.isRequired,
};*/

export default BioIcons;
