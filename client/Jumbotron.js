import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-materialize';

class Jumbotron extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <h1 className="header center blue-grey-text text-darken-2">Gael Arrambide</h1>
          <Row>
            <Col s={12} className="center">
              <h5 className="header white-text">Full-Stack Web Developer</h5>
            </Col>
          </Row>
        </div>
      </div>
      <div className="parallax"><img src={"images/background1.jpg"} /></div>
    </div>
    );
  }
}

export default Jumbotron;
