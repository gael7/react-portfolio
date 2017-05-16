import React from 'react';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron';
import WorkExp from './WorkExp';

class Work extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Work',
      summary: 'My work experience consists mostly on retail where I gain experience with different skills like customer service, merchandising and leadership. My most meaningful job experience was as a tutor for 6 months for kids to build robots using Lego Educational Kits.',
      color: 'blue darken-4',
    };
  }
  render (){
    return(
      <div>
        <NavigationBar color={this.state.color}/>
        <Jumbotron title={this.state.title} summary={this.state.summary}/>
        <WorkExp />
      </div>
    )
  }
}


export default Work;
