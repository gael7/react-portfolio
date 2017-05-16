import React from 'react';

class BioResume extends React.Component {
  constructor(){
    super();
   const skills = ["HTML", "CSS", "Javascript", "jQuery", "Node.js", "Express"];
   const skills2 = ["React.js", "Bootstrap", "Materialize", "MySQL", "Firebase", "MongoDB"];
   this.state = {
     skills,
     skills2
   };
  }
  render (){
    return(
      <div className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <div className="col s6 m6">
                  <ul className="collection">
                    {this.state.skills.map((skill, index) => (
                      <li key={index} className="collection-item">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="col s6 m6">
                  <ul className="collection">
                    {this.state.skills2.map((skill2, index2) => (
                      <li key={index2} className="collection-item">{skill2}</li>
                    ))}
                  </ul>
                </div>
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
