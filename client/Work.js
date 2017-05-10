import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import WorkExp from './WorkExp';

class Work extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Work',
      summary: 'This work experience'
    };
  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
        <WorkExp />
      </div>
    )
  }
}

//Work.propTypes = {
  //text: PropTypes.string.isRequired,
//};

export default Work;