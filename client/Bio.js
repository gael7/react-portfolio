import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';
import BioContainer from './BioContainer';
import BioResume from './BioResume';
import BioIcons from './BioIcons';
import BioInterest from './BioInterest';

class Bio extends React.Component {
  constructor(){
    super();
    const icons = [{
      icon: "code",
      title: "Code into Something Awesome!",
      info: "How lines of code can build something out of nothing, amaze me. Full stack development makes me challenge myself to create something beautiful to the eye and at the same time using my logical thinking to solve problems."
    },{
      icon: "school",
      title: "Won't Stop Learning!",
      info: "There is a lot of information to learn on web development and everything change day to day. What I’m learning today might not be the same the next week and that keeps me going forward. I enjoy this opportunity of not stop learning, gaining new skills and challenging myself."
    },{
      icon: "public",
      title: "Going Remote!",
      info: "The chance to work remote is one of the reasons for me to love web development even if it just for a day or a full-time remote job. This is something I would like to accomplish at a medium term after a lot of learning to be able to dedicate myself to my other passions and travel the world."
    }];

    this.state = {
      title: 'Gael Arrambide',
      summary: 'Full-Stack Web Developer',
      color: 'black',
      icons
    };
  }

  render (){
    return(
      <div>
        <NavigationBar color={this.state.color}/>
        <Jumbotron title={this.state.title} summary={this.state.summary} />
        <BioContainer />
        <BioResume />
        <div className="cont-background">
        <div className="container">
          <div className="section">
            <div className="row" id="iconSection">
              {this.state.icons.map((icon, index) => (
                <BioIcons key={index} icon={icon.icon} title={icon.title} info={icon.info}/>
              ))}
            </div>
          </div>
        </div>
      </div>
        <BioInterest />
      </div>
    )
  }
}

export default Bio;
