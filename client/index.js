import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Work from './Work';

render((
  <Router>
    <div>
    <Route exact path="/" component={Bio}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/work" component={Work}/>
    </div>
  </Router>
), document.getElementById('app'));
