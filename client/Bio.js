import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';

class Bio extends React.Component {
  constructor(){
    super();
  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Jumbotron />
      </div>
    )
  }
}

//Bio.propTypes = {
//  text: PropTypes.string.isRequired,
//};

export default Bio;
