import React from 'react';
import PropTypes from 'prop-types';

class PortCard extends React.Component {
  constructor(){
    super();
  }
    render(){
      return(
              <div className="col s12 m4">
                <div className="card sticky-action grey">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={"images/"+this.props.screenshot} />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator white-text">{this.props.name}<i className="material-icons right">more_vert</i></span>
                    <p className="white-text">Technologies:</p>
                    {this.props.technologies.map((tech, index2)=>(
                      <div key={index2} className="chip white">{tech}</div>
                    ))}
                    <br/><br/>
                  </div>
                  <div className="card-action">
                    <a href={this.props.github}><i className="small material-icons white-text">code</i></a><a href={this.props.heroku}><i className="right small material-icons white-text">web</i></a>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title black-text">{this.props.name}<i className="material-icons right">close</i></span>
                    <p>{this.props.description}</p>
                  </div>
                </div>
              </div>
      )}
  }

  PortCard.PropTypes = {
    screenshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    heroku: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

export default PortCard;
