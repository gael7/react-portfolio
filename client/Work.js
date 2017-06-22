import React from 'react';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import WorkExp from './WorkExp';

class Work extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Work',
      color: 'grey darken-2',
    };
  }
  render (){
    return(
      <div className="cont-background">
        <NavigationBar color={this.state.color}/>
        <WorkExp />
      </div>
    )
  }
}


export default Work;
