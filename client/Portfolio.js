import React from 'react';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import PortApps from './PortApps';

class Portfolio extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Portfolio',
      summary: 'This is my portfolio'
    };

  }
  render (){
    return(
      <div>
        <NavigationBar />
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
        <PortApps />
      </div>
    )
  }
}

export default Portfolio;
