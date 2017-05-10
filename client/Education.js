import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';
import EducHis from './EducHis';

class Education extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Education',
      summary: 'This is my education'
    };
  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
        <EducHis />
      </div>
    )
  }
}

/*Education.propTypes = {
  text: PropTypes.string.isRequired,
};*/

export default Education;
