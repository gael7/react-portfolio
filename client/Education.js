import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';
import EducHis from './EducHis';

class Education extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Education',
      summary: 'I recently graduated from The Coding Bootcamp at UT Austin to become a Full-Stack Developer. On 2014 I graduated as a Mechatronic Engineer with an overall of 88.29 from Instituto Tecnológico de Nuevo Laredo. During my nine semesters at university I participated on 3 national robotics contests called “Torneo Mexicano de Robótica” on different cities around Mexico.',
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
