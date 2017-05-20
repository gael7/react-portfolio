import React from 'react';

class BioContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "About Me",
      aboutMe: "I’m a full-stack  web developer born in Nuevo Laredo, Mexico now living at Austin, TX. After 3 years working on retail jobs while studying and after getting my college degree I got myself a new challenge to get coding skills.",
      aboutMe2: "With already 9 months of coding experience I continue learning as much as I can. At school and my jobs I have shown determination on what I do and work hard enough to accomplish what it needs to be done with quality. I’m a team player who doesn’t panic to be the leader of the team. In addition time management, strategic mind and working under pressure are the most significant skills.",
      src: "images/logo.jpg"
    };
  }
  render (){
    return(
      <div className="cont-background">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center white-text" id="aboutMe">
                <h4>{this.state.title}</h4>
                <div className="col s12 m6">
                  <p className="left-align">{this.state.aboutMe}</p>
                  <p className="left-align">{this.state.aboutMe2}</p>
                </div>
                <div className="col s12 m6">
                  <img src={this.state.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BioContainer;
