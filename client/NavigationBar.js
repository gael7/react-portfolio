import React from 'react';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
    constructor(){
        super();
        const sections = [{
          href: "/",
          icon: "E7FD",
          text: "About Me",
          color: "black-text"
        },{
          href: "/work",
          icon: "eb3f",
          text: "Work Experience",
          color: "grey-text text-darken-2"
        },{
          href: "/portfolio",
          icon: "E051",
          text: "Portfolio",
          color: "grey-text"
        },{
          href: "/projects",
          icon: "E85D",
          text: "Projects",
          color: "blue-grey-text",
        },{
          href: "/education",
          icon: "E80C",
          text: "Education",
          color: "blue-text text-darken-4"
        }];

        const socials = [{
          href: "https://www.linkedin.com/in/gaelarrambide",
          src: "linkedin.png",
        },{
          href: "https://github.com/gael7",
          src: "github.png",
        },{
          href: "http://stackoverflow.com/users/6636221/gael-arrambide",
          src: "stackoverflow.png",
        }];

        this.state = {
          sections,
          socials
        }
    }

    render() {
        return (
          <div className='navbar-fixed'>
            <nav>
              <div className={"nav-wrapper "+this.props.color}>
              <ul id="slide-out" className="side-nav">
                <li><div className="userView">
                  <div className="background sidebar-background">
                  </div>
                  <a href="#!user"><img className="circle" src="images/me2.jpg" /></a>
                  <a href="#!name"><span className="white-text name">Gael Arrambide</span></a>
                  <a href="#!email"><span className="white-text email">gael_arrambide@hotmail.com</span></a>
                </div></li>
                {this.state.sections.map((section, index)=>(
                  <li key={index}><a href={section.href}><i className={"material-icons "+section.color}>{String.fromCharCode(parseInt(section.icon,16))}</i>{section.text}</a></li>
                ))}
                <br />
                <li><a className="subheader center">Connect with Me</a></li>
                <div className="row">
                  {this.state.socials.map((social, index2)=>(
                      <a key={index2} href={social.href}><img className="col s4 circle responsive-img " src={"images/"+social.src} /></a>
                  ))}
                </div>
              </ul>

                  <a href="/" className="brand-logo center">GA</a>
                    <ul className="left">
                      <li><a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a></li>
                    </ul>
                </div>
            </nav>
          </div>
        );
    }
}
NavigationBar.PropTypes = {
  color: PropTypes.string.isRequired
}
export default NavigationBar;
