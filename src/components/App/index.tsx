import * as React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from '../HomePage';
import PortfolioPage from '../PortfolioPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </div>
    </Router>
  );
};

export default App;
