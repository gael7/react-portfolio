import React from 'react';
import NavigationBar from './NavigationBar';
import ProjApps from './ProjApps';

class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Projects',
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
