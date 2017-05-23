import React from 'react';

class BioResume0 extends React.Component {
  constructor(){
    super();
  }
  render (){
    return(
      <div className="parallax-container hide-on-large-only">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <div className="col s12 m12">
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

export default BioResume0;
