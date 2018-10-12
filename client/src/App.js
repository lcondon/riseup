import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Article from './components/Article';
import Survey from './components/Survey';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Archive from './components/Archive';
// import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SocketContext from './socket-context';
import io from 'socket.io-client';
import decorator from './utils/decorator';
import Messages from './components/Messages';

const socket = io(
  `${window.location.protocol()}://${window.location.host()}`,
  { path: '/socket.io' },
  { transports: ['websocket'] },
  {
    secure: true,
    rejectUnauthorized: false
  }
);

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
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
  componentDidMount() {
    socket.connect();
  }

  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <SocketContext.Provider value={socket}>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/article" component={Article} />
                <Route exact path="/survey" component={Survey} />
                <Route path="/messages" component={Messages} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/archive" component={Archive} />
                <Route component={NotFound} />
              </Switch>
            </SocketContext.Provider>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default compose(withTheme())(decorator(App));
