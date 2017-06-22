import React from 'react';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import PortApps from './PortApps';

class Portfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Portfolio',
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
