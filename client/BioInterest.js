import React from 'react';
import PropTypes from 'prop-types';

class BioInterest extends React.Component {
  constructor(){
    super();

  }
  render(){
    return(
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h4 className="white-text">Interests</h4>
              <div className="col s12 m6 left">
                <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Agael7a%3Aplaylist%3A5arxunCgCPuN1tTavpH9qW" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
              </div>
              <div className="col s12 m6">
                <div className="row">
                  <div className="col s4">
                    <i className="medium material-icons">fitness_center</i>
                  </div>
                  <div className="col s4">
                    <i className=" medium material-icons">flight</i>
                  </div>
                  <div className="col s4">
                    <i className="medium material-icons">theaters</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/background3.jpg" alt="Unsplashed background img 1" /></div>
      </div>
    );
  }
}

export default BioInterest;
