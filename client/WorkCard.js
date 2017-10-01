import React from 'react';
import PropTypes from 'prop-types';

class WorkCard extends React.Component {
  constructor(){
    super();
  }
  render (){
    return (
            <div  className="col s12 m12 l12 xl6">
              <div className="col s12 m6 l4 xl7">
                <div className="card grey darken-2 hoverable">
                  <div className="card-content white-text">
                    <span className="card-title">{this.props.position}</span>
                    <p>{this.props.company}</p>
                    <p><i className="tiny material-icons">date_range</i> {this.props.dates}</p>
                    <p><i className="tiny material-icons">location_on</i> {this.props.location}</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l8 xl5 white-text">
                <ul id="responsabilities">
                  {this.props.responsabilities.map((res, indexR)=>(
                    <li key={indexR}><i className="tiny material-icons">chevron_right</i>{res}</li>
                  ))}
                </ul>
              </div>
            </div>
    )}
}

WorkCard.PropTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  responsabilities: PropTypes.string.isRequired,
}

export default WorkCard;
