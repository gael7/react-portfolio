import React from 'react';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import PortApps from './PortApps';

class Portfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Portfolio',
      summary: 'My portfolio consists on 5 of my best apps I code during my 24 week Coding Boot Camp with a screenshot of the main page, technologies used, a brief description of the functionality and links for the github project and the web app that you are welcome to visit.',
      color: 'grey'
    };

  }
  render (){
    return(
      <div className="cont-background">
        <NavigationBar color={this.state.color}/>
        <PortApps />
      </div>
    )
  }
}

export default Portfolio;
