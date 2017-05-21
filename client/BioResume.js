import React from 'react';

class BioResume extends React.Component {
  constructor(){
    super();
   const skills = ["HTML", "CSS", "Javascript", "jQuery", "Node.js", "Express", "React.js", "Bootstrap", "Materialize", "MySQL", "Firebase", "MongoDB"];
   this.state = {
     skills
   };
  }
  render (){
    return(
      <div className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h5 className="center white-text">Code Skills</h5>
                  {this.state.skills.map((skill, index) => (
                    <div key={index} className="col s6 m4">
                      <div className="card-panel black center-align hoverable">
                        <span className="white-text">{skill}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col s12 m6">
              <object data="./Resume.pdf" width="100%" height="450" type='application/pdf' />
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/background3.jpg" alt="Unsplashed background img 1" /></div>
      </div>
    )
  }
}

export default BioResume;
