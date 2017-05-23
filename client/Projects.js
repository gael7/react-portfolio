import React from 'react';
import NavigationBar from './NavigationBar';
import ProjApps from './ProjApps';

class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Projects',
      summary: 'I have work in 3 major projects during my 24 week Coding Boot Camp where the first 2 of them I had the pleasure to work with awesome developers and the last one on my own to have the best full-stack development experience.',
      color: 'blue-grey'
    };
  }
  render (){
    return(
      <div className="full-background">
        <NavigationBar color={this.state.color}/>
        <div className="cont-background">
        <ProjApps />
        </div>
      </div>
    )
  }
}

export default Projects;
