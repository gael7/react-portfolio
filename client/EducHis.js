import React from 'react';

class EducHis extends React.Component {
  constructor(){
    super();
    const his = [{
      id: "ut",
      name: "The University of Texas at Austin",
      degree: "The Coding Boot Camp at UT Austin",
      field: "Full Stack Flex Program",
      date: "Jul 2016 - Feb 2017",
      image: "ut.jpg",
      visit: "https://www.codingbootcamputaustin.com",
      title: "Projects",
      activities: [{
        name: "Austin City Incident Map",
        cat: "",
        role: "Team Project",
        year: "2016",
        place: "",
        description: "Displaying on an Austin map different amounts and types of incidents that had happen since February 2015."
      },{
        name: "Cheevr",
        cat: "",
        role: "Team Project",
        year: "2016",
        place: "",
        description: "Cheevr utilizes Alexa's voice recognition to quizz us on content create it on our app."
      },{
        name: "Antique",
        cat: "",
        role: "Personal Project",
        year: "2017",
        place: "",
        description: "This app makes the management of a coffee shop easier using it as a register, manage the products and receipts."
      }],
    },{
      id: "itnl",
      name: "Instituto Tecnológico de Nuevo Laredo",
      degree: "Mechatronic Engineer",
      field: "Advance Industrial Automation",
      date: "Aug 2010 - Dec 2014",
      image: "tec.jpg",
      visit: "http://www.itnuevolaredo.edu.mx/index.php?option=com_content&view=article&id=57&Itemid=93",
      title: "Activities",
      activities: [{
        name: "4th Place at 'Torneo Mexicano de Robótica' (TMR)",
        description: "LARC-SEK (Educational Kits)",
        role: "Team Leader",
        place: "Tecnológico de Monterrey Campus Estado de México",
        year: "2012"
      },{
        name: "Annual Mechatronic Engineering Symposium",
        description: "Organizing Committee",
        role: "Member",
        place: "Instituto Tecnológico de Nuevo Laredo",
        year: "2012"
      },{
        name: "4th Place at 'Torneo Mexicano de Robótica' (TMR)",
        description: "LARC-SEK (Educational Kits)",
        role: "Team Leader",
        place: "Tecnológico de Monterrey Campus Puebla",
        year: "2013"
      },{
        name: "Annual Mechatronic Engineering Symposium",
        description: "Organizing Committee",
        role: "President",
        place: "Instituto Tecnológico de Nuevo Laredo",
        year: "2013"
      },{
        name: "Robotics Workshop",
        description: "Programming NXT with Robot C",
        role: "Teacher/Tutor",
        place: "Instituto Tecnológico de Nuevo Laredo",
        year: "2013"
      },{
        name: "Participation at 'Torneo Mexicano de Robótica' (TMR)",
        description: "Soccer Humanoids Kid Size",
        role: "Team Leader",
        place: "Universidad Autónoma del Carmen, Ciudad del Carmen",
        year: "2014"
    }]
  }];
  this.state = {
    his
  };
}
  render(){
    return(
      <div className="container">
        <div className="section">
          <div className="row">
            {this.state.his.map((eduhis, index)=>(
              <div key={index} className="col s12 m12">
                <div className="col s12 m6">
                  <div className="card black">
                    <div className="card-content white-text">
                      <div className='col s3'><img src={"images/"+eduhis.image} alt='UT Logo' className='circle responsive-img' /></div>
                      <span className="card-title">{eduhis.name}</span>
                      <ul>{eduhis.degree +", " + eduhis.field}</ul>
                      <ul><i className="tiny material-icons">date_range</i> {eduhis.date}</ul>
                    <div className="card-action">
                      <a href={eduhis.visit}>Visit</a>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <h5 className="center">{eduhis.title}</h5>
                  {eduhis.activities.map((actv, index2)=>(
                    <ul key={index2}><strong>{actv.year}</strong> {"- "+actv.name+ " "}<strong>{actv.role}</strong><br />
                    {actv.description}</ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
}
export default EducHis;
