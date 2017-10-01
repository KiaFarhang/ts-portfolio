import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

import './App.css';

const logo = require('./logo.svg');

const App = () => {
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Route exact path="/" component={HomePage} />

//       </Router>
//     );
//   }
// }

export default App;
