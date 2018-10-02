import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import Messages from './components/Messages';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import axios from 'axios';
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
  state = {
    loggedIn: false,
    id: '',
    name: '',
    email: ''
  };

  componentDidMount() {
    axios.get('/isloggedin').then(response => {
      console.log(response);
      if (response.data._id) {
        this.setState({
          id: response.data._id,
          name: `${response.data.firstName} ${response.data.lastName}`,
          email: response.data.email,
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
              <Route exact path="/survey" component={Survey} />
              <Route path="/messages" component={Messages} />
              {/* <PrivateRoute path="/profile" component={Profile} /> */}
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default withTheme()(App);
