import React from 'react';

class WorkExp extends React.Component {
  constructor(){
    super();
    const experience = [{
      position: "Logistics Sortation Associate",
      company: "Amazon",
      dates: "September 2016 - Present",
      location: "Austin, TX",
      responsabilities: ["Scan an average of 24,000 packages arriving to the warehouse before sort them.",
      "Sort and scan around 1,0000 packages by route and fit them into the designated square bag.",
      "Load 3 vans with their designated bags and oversize packages."],
    },{
      position: "Instructor",
      company: "American Robotics Academy",
      dates: "September 2016 - December 2016",
      location: "Austin, TX",
      responsabilities: ["Create an interesting environment for 6-12 kids to learn build robots with Lego educational kits.",
      "Help 2 to 3 groups of kids build the entire robot for the day in less than 45 minutes.",
      "Develop a 10 minutes activity where the robot can be used."],
    },{
      position: "Department Manager",
      company: "Walmart",
      dates: "July 2015 - March 2016",
      location: "Laredo, TX",
      responsabilities: ["Manage 3 different departments: Beer & Wine, Impulse Merchandise and Tobacco & Candy.",
      "Reduce from 30+ products out of stocks at the shelf to less than 5 on each department.",
      "Perform an average of 50 prince changes weekly on each department."],
    },{
      position: "Photo Sales Associate",
      company: "Walmart",
      dates: "June 2014 - July 2015",
      location: "Laredo, TX",
      responsabilities: ["Operate photo processing equipment and maintain them clean and their resources above 25%.",
      "Provide friendly customer service to 8+ people during the operation of the digital photo kiosks.",
      "Assemble around 10 different specialty items daily like calendars, photo canvas, etc."],
    },{
      position: "Sales Associate",
      company: "Ueta Duty Free",
      dates: "November 2010 - January 2011",
      location: "Laredo, TX",
      responsabilities: ["Provide excellent customer service and communicate 5+ available promotions.",
      "Inform customers about our 10+ exclusive products.",
      "Verify that 100% of the alcohol and tobacco merchandise goes to Mexico."],
    }];

    this.state = {
      experience
    };
  }
  render (){
    return (
        <div className="section">
          <div className="row">
          {this.state.experience.map((exp, index)=>(
            <div key={index} className="col s12 m6">
              <div className="col s12 m6">
                <div className="card grey darken-2 hoverable">
                  <div className="card-content white-text">
                    <span className="card-title">{exp.position}</span>
                    <p>{exp.company}</p>
                    <p><i className="tiny material-icons">date_range</i> {exp.dates}</p>
                    <p><i className="tiny material-icons">location_on</i> {exp.location}</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col s12 m5 white-text">
                <ul id="responsabilities">
                  {exp.responsabilities.map((res, indexR)=>(
                    <li key={indexR}><i className="tiny material-icons">chevron_right</i>{res}</li>
                  ))}
                </ul>
              </div>
            </div>))}
          </div>
        </div>
    )
  }
}

export default WorkExp;
