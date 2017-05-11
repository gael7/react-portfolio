import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center white-text">{this.props.title}</h1>
            <div className="row center">
              <h5 className="header col s12 light">{this.props.summary}</h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/background3.jpg" alt="Unsplashed background img 1" /></div>
      </div>
    );
  }
}

export default Jumbotron;
