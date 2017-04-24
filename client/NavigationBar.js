import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, NavItem} from 'react-materialize';

class NavigationBar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
              <Navbar right className='blue-grey darken-1 example-8'>
                <NavItem href="#" className="navbar-brand">
                  GA7
                </NavItem>
                <NavItem href="#/portfolio">
                  Portfolio
                </NavItem>
                <NavItem href="#/work">
                Work
              </NavItem>
              </Navbar>
            </div>
        );
    }
}

//NavigationBar.propTypes = {
  //text: PropTypes.string.isRequired,
//};

export default NavigationBar;
