import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';
import EducHis from './EducHis';

class Education extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Education',
      color: 'blue darken-4'
    };
  }
  render (){
    return(
      <div className="cont-background">
        <NavigationBar color={this.state.color}/>
        <EducHis />
      </div>
    )
  }
}

export default Education;
