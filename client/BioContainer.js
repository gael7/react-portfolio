import React from 'react';
import PropTypes from 'prop-types';

class BioContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "About Me",
      aboutMe: "I'm a full stack web developer",
      src: "images/logo.jpg"
    };
  }
  render (){
    return(
      <div>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center" id="aboutMe">
                <h4>{this.state.title}</h4>
                <div className="col s12 m6">
                  <h6 className="black-text">{this.state.aboutMe}</h6>
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

/*Bio.propTypes = {
  text: PropTypes.string.isRequired,
};*/

export default BioContainer;
