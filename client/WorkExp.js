import React from 'react';

class WorkExp extends React.Component {
  constructor(){
    super();
    const experience = [{
      position: "Transportation CSR Bilingual",
      company: "Logisticare",
      dates: "July 2017 - Present",
      location: "Austin, TX",
      responsabilities: ["Collaborate on English and Spanish calls for Where is My Ride Department.",
      "Manage to assist on an average of 60 calls daily.",
      "Achieve to keep a daily after call work below one and a half hour."],
    },{
      position: "Logistics Sortation Associate",
      company: "Amazon",
      dates: "September 2016 - June 2017",
      location: "Austin, TX",
      responsabilities: ["Collaborated to scan an average of 23,000 packages arriving to the warehouse before the sort process.",
      "Achieved to sort and scan an average of 140 packages per hour of the 100 - 120 packages required.",
      "Accomplished to pick routes in less than the 30 minutes average."],
    },{
      position: "Instructor",
      company: "American Robotics Academy",
      dates: "September 2016 - December 2016",
      location: "Austin, TX",
      responsabilities: ["Created a learning environment for 6 - 12 kids to build robots with Lego educational kits on 5 different schools.",
      "Trained 2 to 3 groups of 3 kids to build the entire robot for the day in less than 45 minutes.",
      "Developed 10 minute activities where the kids can play with the robot they just build."],
    },{
      position: "Department Manager",
      company: "Walmart",
      dates: "July 2015 - March 2016",
      location: "Laredo, TX",
      responsabilities: ["Managed 3 departments: Beer & Wine, Impulse Merchandise and Tobacco & Candy.",
      "Decreased from 30+ products out of stocks at the shelf to less than 5 on each department.",
      "Accomplished to reduce merchandise on the backroom."],
    },{
      position: "Photo Sales Associate",
      company: "Walmart",
      dates: "June 2014 - July 2015",
      location: "Laredo, TX",
      responsabilities: ["Operated photo processing equipment and maintain them clean and their resources above 25%.",
      "Provided outstanding customer service to 8+ people during the operation of the digital photo kiosks.",
      "Assembled around 10 different specialty items daily like calendars, photo canvas, etc."],
    },{
      position: "Sales Associate",
      company: "Ueta Duty Free",
      dates: "November 2010 - January 2011",
      location: "Laredo, TX",
      responsabilities: ["Provided excellent customer service and communicate 5+ available promotions.",
      "Informed customers about our 10+ exclusive products.",
      "Verified 100% of the alcohol and tobacco merchandise goes to Mexico."],
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
            <div key={index} className="col s12 m12 l12 xl6">
              <div className="col s12 m6 l4 xl7">
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
              <div className="col s12 m6 l8 xl5 white-text">
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
