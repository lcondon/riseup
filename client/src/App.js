import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import Messages from './components/Messages';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import axios from 'axios';
import API from './utils/API';
// import queryString from 'query-string';
// import compose from 'recompose/compose';
import {
  MuiThemeProvider,
  createMuiTheme
  // withStyles
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
  state = {
    loggedIn: false,
    user: {}
  };
  componentDidMount() {
    console.log(this.state.user);

    API.isLoggedIn().then(response => {
      console.log(response);
      if (response.data._id) {
        this.setState({
          user: response.data,
          loggedIn: true
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <NavBar loggedIn={this.state.loggedIn} />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/article" component={Article} />
              <Route exact path="/survey">
                <Survey user={this.state.user} />
              </Route>
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/profile">
                <Profile user={this.state.user} />
              </Route>
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default withTheme()(App);
