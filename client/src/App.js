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
import { withTheme } from '@material-ui/core/styles';
// import queryString from 'query-string';
import compose from 'recompose/compose';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#44C2CE',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#B21A2A',
      contrastText: '#ffffff'
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/article" component={Article} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/messages" component={Messages} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default withTheme()(App);
