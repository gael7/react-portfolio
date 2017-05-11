import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';

class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Projects',
      summary: 'This are my group projects'
    };
  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
      </div>
    )
  }
}

export default Projects;
