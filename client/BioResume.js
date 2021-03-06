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
              <div className="col s12 m12 l6 xl6">
                <h5 className="center white-text">Code Skills</h5>
                  {this.state.skills.map((skill, index) => (
                    <div key={index} className="col s4 m4 l6 xl4">
                      <div className="card-panel black center-align hoverable">
                        <span className="white-text center">{skill}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col l6 xl6 hide-on-med-and-down">
              <object data="./Gael_Arrambide_Developer.pdf" width="100%" height="450" type='application/pdf' />
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
