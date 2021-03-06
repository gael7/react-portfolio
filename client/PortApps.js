import React from 'react';
import PortCard from './PortCard';

class PortApps extends React.Component {
  constructor(){
    super();
    const apps = [{
        name: "Week-3-Game",
        description: "This is a Pokémon hangman game with 4 of your favorite Pokémon from the first generation. The game will start after your click on the play button and the hyphens for the letters of your Pokémon will be display. If you need a little help to guess the answer you can click on the hint button that will display a shadow of the Pokémon. After you guess the name you will see you Pokémon.",
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
        github: "https://github.com/gael7/week-3-game",
        heroku: "https://agile-dusk-11372.herokuapp.com",
        screenshot: "week-3-gameSC.png"
      },{
        name: "Week-4-Game",
        description: "This app is a Star Wars RPG game where you can select from 4 different characters from the movies that are Obi-Wan Kenobi, Luke Skywalker, Darth Sidious and Darth Maul. After selecting your character for the battle, the other 3 characters are gonna be shown as your enemies available to battle where you can select one at time and fight them until your current enemy or your character reaches 0 health points. Your attack will increase every time yo attack your opponent and your enemy will counterattack you. If you defeat your enemy you can continue with the next one.",
        technologies: ["HTML", "CSS", "Bootstrap","Javascript", "jQuery"],
        github: "https://github.com/gael7/week-4-game",
        heroku: "https://lit-reef-63837.herokuapp.com",
        screenshot: "week-4-gameSC.png"
      },{
        name: "TriviaGame",
        description: "This is a How I Met Your Mother Trivia with simple questions of the first season of the show. The trivia consists of 10 questions and you will have just 10 seconds per question to select the correct answer out of 4 options. After each question you will see a related picture and the correct answer if you get it wrong or you didn’t answer before the next question. When you are done with the 10 questions you will see the results of the trivia.",
        technologies: ["HTML", "CSS", "Bootstrap","Javascript", "jQuery"],
        github: "https://github.com/gael7/TriviaGame",
        heroku: "https://warm-spire-92229.herokuapp.com",
        screenshot: "triviagameSC.png"
      },{
        name: "Giphy-api",
        description: "This app uses the Giphy API to get gifs about preselect cities of Europe like Manchester, London, Madrid, Rome, Berlin and with the option to add more cities. In order to add another city you need to specify the country to do a better query to look for appropriate gifs from the city.  After you click the button of the city you will see 10 random gifs found that contain the name of the city and the country. If you click on a gif it will start playing and if you click again it will stop.",
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery", "Giphy-API"],
        github: "https://github.com/gael7/giphy-api",
        heroku: "https://guarded-shelf-67200.herokuapp.com",
        screenshot: "giphy-apiSC.png"
      },{
        name: "News-scrape",
        description: "This is an app that will scrape news from the Real Madrid web page getting the headline, the picture and a brief description on the new then you can add one note for it. First thing to do in the app is click on the Scrape button that will do the scrape for us the 10 latest news  and then we go back to the main page and you will see those news ready to add notes to add with the news you had before. In order to add a note to the news you need to press the note button inside the new panel and you will see a modal where you write the title of the note and the content of the note.",
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Node.js", "jQuery", "MongoDB"],
        github: "https://github.com/gael7/news-scrape",
        heroku: "https://lit-mesa-52894.herokuapp.com",
        screenshot: "news-scrapeSC.png"
    },{
        name: "Portfolio",
        description: "This is my current portfolio where you can read a little more about me, my work experience, skills and education.",
        technologies: ["HTML","CSS", "Materialize","Javascript", "Node.js", "jQuery", "React.js"],
        github: "https://github.com/gael7/react-portfolio",
        heroku: "http://www.gaelarrambide.com",
        screenshot: "portfolioSC.png"
    },{
      name: "Pronto Legalizaciones",
      description: "This is a webpage for Pronto Legalizaciones which works on the import of USA vehicles into Mexico.",
      technologies: ["HTML", "CSS", "Materialize", "Javascript", "Node.js", "jQuery", "React.js"],
      github: "https://github.com/gael7/pronto-legalizaciones",
      heroku: "http://www.prontolegalizaciones.com",
      screenshot: "pronto.png"
    }];

    this.state = {
      apps
    };
  }
    render(){
      return(
          <div className="section">
            <div className="row">
            {this.state.apps.map((app, index)=>(
                    index<3 &&
                     <PortCard key={index} name={app.name} description={app.description} technologies={app.technologies} github={app.github} heroku={app.heroku} screenshot={app.screenshot} />
           ))}
           </div>
           <div className="row">
             {this.state.apps.map((app,index)=>(
               (index>=3 && index<6) &&
               <PortCard key={index} name={app.name} description={app.description} technologies={app.technologies} github={app.github} heroku={app.heroku} screenshot={app.screenshot} />

             ))}
           </div>
           <div className="row">
             {this.state.apps.map((app,index)=>(
               index>=6 &&
               <PortCard key={index} name={app.name} description={app.description} technologies={app.technologies} github={app.github} heroku={app.heroku} screenshot={app.screenshot} />

             ))}
           </div>
         </div>
      )}
  }

export default PortApps;
