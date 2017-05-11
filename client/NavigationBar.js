import React from 'react';

class NavigationBar extends React.Component {
    constructor(){
        super();
        const sections = [{
          href: "/",
          icon: "person",
          text: "About Me"
        },{
          href: "/work",
          icon: "business_center",
          text: "Work Experience"
        },{
          href: "/portfolio",
          icon: "web",
          text: "Portfolio"
        },{
          href: "/projects",
          icon: "assignment",
          text: "Projects"
        },{
          href: "/education",
          icon: "school",
          text: "Education"
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
              <div className="nav-wrapper black">
              <ul id="slide-out" className="side-nav">
                <li><div className="userView">
                  <div className="background">
                    <img src="images/background2.jpg" />
                  </div>
                  <a href="#!user"><img className="circle" src="images/logo.jpg" /></a>
                  <a href="#!name"><span className="white-text name">Gael Arrambide</span></a>
                  <a href="#!email"><span className="white-text email">gael_arrambide@hotmail.com</span></a>
                </div></li>
                {this.state.sections.map((section, index)=>(
                  <li key={index}><a href={section.href}><i className="material-icons black-text">{section.icon}</i>{section.text}</a></li>
                ))}
                <br />
                <li><a className="subheader center">Connect with Me</a></li>
                <div className="row">
                  {this.state.socials.map((social, index2)=>(
                      <a key={index2} href={social.href}><img className="col s4 circle responsive-img " src={"images/"+social.src} /></a>
                  ))}
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

export default NavigationBar;
