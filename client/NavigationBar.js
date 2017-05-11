import React from 'react';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
          <div className='navbar-fixed'>
            <nav>
              <div className="nav-wrapper black">
              <ul id="slide-out" className="side-nav">
                <li><div className="userView">
                  <div className="background">
                    <img src="images/picture1.jpg" />
                  </div>
                  <a href="#!user"><img className="circle" src="images/logo.jpg" /></a>
                  <a href="#!name"><span className="white-text name">Gael Arrambide</span></a>
                  <a href="#!email"><span className="white-text email">gael_arrambide@hotmail.com</span></a>
                </div></li>
                <li><a href="/"><i className="material-icons black-text">person</i>About Me</a></li>
                <li><a href="/work"><i className="material-icons">business_center</i>Work Experience</a></li>
                <li><a href="/portfolio"><i className="material-icons">web</i>Portfolio</a></li>
                <li><a href="/projects"><i className="material-icons">assignment</i>Projects</a></li>
                <li><a href="/education"><i className="material-icons">school</i>Education</a></li>
                <br />
                <li><a className="subheader center">Connect with Me</a></li>
                <div className="row">
                    <a href="https://www.linkedin.com/in/gaelarrambide"><img className="col s4 circle responsive-img" src="images/linkedin.png" /></a>
                    <a className="" href="https://github.com/gael7"><img className="col s4 circle responsive-img " src="images/github.png" /></a>
                    <a href="http://stackoverflow.com/users/6636221/gael-arrambide"><img className="col s4 circle responsive-img " src="images/stackoverflow.png" /></a>
                </div>
              </ul>

                  <a href="/" className="brand-logo center">GA7</a>
                    <ul className="left">
                      <li><a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a></li>
                    </ul>
                </div>
            </nav>
          </div>
        );
    }
}

/*NavigationBar.propTypes = {
  text: PropTypes.string.isRequired,
};*/

export default NavigationBar;
