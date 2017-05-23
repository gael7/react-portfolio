import React from 'react';

class ProjApps extends React.Component {
  constructor(){
    super();
    const apps = [{
      name: "Austin City Incident Map",
      role: "Team Project",
      year: "2016",
      descriptions:
      ["An application created by a team of three developers that display on an Austin map different amounts and types of incidents that had happen since February 2015.",
      "Served as a Back-end developer to manage the Google Maps API.",
      "Starting with displaying a Google Map on the app and setting the limits to the Austin area and restricting the zoom on the map. After receiving data from the incidents, it geocodes the address and plots markers on the map that will display an info window with the incident number, date, address and time."],
      technologies: ["HTML", "CSS", "Google Maps API", "Austin OpenCity Data API", "SweetAlerts", "jQuery", "Google Firebase", "Bootstrap"],
      github: "https://github.com/gael7/Austin-Incident-Map",
      heroku: "https://tranquil-cliffs-78311.herokuapp.com",
      screenshot: "austin.png"
    },{
      name: "Cheevr",
      role: "Team Project",
      year: "2016",
      descriptions:
      ["An application created by a team of three developers that utilizes Alexa’s voice recognition to provide a different way to learn after creating your own quizzes online and then let your Alexa device test you on it.",
      "Served as a Front-end developer to manage the forms to create your own quiz and to display the quizzes you have created before.",
      "Utilized Materialize for the design and jQuery to create dynamically the forms to create the quiz with a minimum of three question that could be multiple choice or true and false. Including an add button to create a new question. After your quiz is finish, it’s post on our database and the page is redirected to your quizzes that you have created before present it to you in cards from Materialize."
      ],
      technologies: ["HTML", "CSS", "Materialize", "jQuery", "NodeJs", "Express", "MySQL", "Sequelize", "Passport"],
      github: "https://github.com/gael7/Cheevr",
      heroku: "https://alexaquiz.heroku.com",
      screenshot: "cheevr.png"
    },{
      name: "Antique",
      role: "Personal Project",
      year: "2017",
      descriptions:
      ["An application created for the management of a coffee shop with a cash register, management and kitchen view.",
      "Served as a Full-Stack developer.",
      "Utilized Bootstrap for the design of the app with NodeJs on the back-end for the server with Express and Handlebars. The database used was MongoDB using Moongose with three schemas for products, receipts and users. Using jQuery for the logic of the app that allow us to add products to the database, and see them on the cash register, and on a table for management of all the products, create receipts with multiple products, leave open tabs, and display orders to be prepare on the kitchen to mention some of the features.",
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "NodeJs", "Express", "MongoDB", "Moongose", "BcryptJS"],
      github: "https://github.com/gael7/antique",
      heroku: "https://www.dropbox.com/s/1zmorh2lmcfv6x4/Antique.mp4?dl=0",
      screenshot: "antique.png"
    }];

    this.state = {
      apps
    }
  }
  render(){
    return(
      <div className="section">
        <div className="row">
          {this.state.apps.map((app, index)=>(
          <div  key={index} className="col s12 m12 l4 xl4">
            <div className="card sticky-action blue-grey hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={"images/"+app.screenshot} />
              </div>
              <div className="card-content">
                <span className="card-title activator white-text">{app.name}<i className="material-icons right">more_vert</i></span>
                <p className="white-text">Technologies:</p>
                {app.technologies.map((tech, index2)=>(
                  <div key={index2} className="chip white">{tech}</div>
                ))}
                <br/><br/>
              </div>
              <div className="card-action">
                <a href={app.github}><i className="small material-icons white-text">code</i></a><a href={app.heroku}><i className="right small material-icons white-text">web</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title black-text">{app.name}<i className="material-icons right">close</i></span>
                {app.descriptions.map((desc, index3)=>(
                  <ul>{desc}</ul>
                ))
                }
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    )}
}

export default ProjApps;
