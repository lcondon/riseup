import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import Messages from './components/Messages';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/messages" component={Messages} />
      </Switch>
    </div>
  </Router>
);

export default App;
