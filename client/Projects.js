import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';

class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Projects',
      summary: 'I have work in 3 major projects during my 24 week Coding Boot Camp where the first 2 of them I had the pleasure to work with awesome developers and the last one on my own to have the best full-stack development experience.',
      color: 'yellow darken-1'
    };
  }
  render (){
    return(
      <div>
        <NavigationBar color={this.state.color}/>
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
      </div>
    )
  }
}

export default Projects;
