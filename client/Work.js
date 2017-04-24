import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';

class Work extends React.Component {
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

//Work.propTypes = {
  //text: PropTypes.string.isRequired,
//};

export default Work;
