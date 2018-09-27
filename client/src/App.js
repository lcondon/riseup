import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/survey" component={Survey} />
      </Switch>
    </div>
  </Router>
);

export default App;
