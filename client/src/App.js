import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import Messages from './components/Messages';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
// import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const mapStateToProps = state => {
  return { user: state.user.info, loggedIn: state.user.loggedIn };
};

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
  // componentDidMount() {
  //   console.log(this.props);

  //   API.getUser().then(response => {
  //     console.log(response);
  //     if (response.data._id) {
  //       this.setState({ loggedIn: true });
  //     }
  //   });
  // }

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
              <Route exact path="/survey/" component={Survey} />
              <Route path="/messages/:id?" component={Messages} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default compose(
  withTheme(),
  connect(mapStateToProps)
)(App);
