import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

class Portfolio extends React.Component {
  constructor(){
    super();
  }
  render (){
    return(
      <div>
        <NavigationBar />
      </div>
    )
  }
}

//Portfolio.propTypes = {
//  text: PropTypes.string.isRequired,
//};

export default Portfolio;
