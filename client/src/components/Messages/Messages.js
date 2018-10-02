import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../SideBar';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Divider from '@material-ui/core/Divider';
import io from 'socket.io-client';

var Socket = window['MozWebSocket'] || window['WebSocket'];

if (Socket) {
  let socket = io.connect('http://localhost:3001');
  // var ws = new Socket('ws://localhost:3001/');
  socket.onopen = () => {
    console.log('onopen');
  };
  socket.emit('news', { hello: 'world' });
  // ws.onerror = function() { console.log('onerror attached to websocket object.'); };
  // ws.onclose = function() { console.log('onclose'); };
  socket.onmessage = function(evt) {
    console.log('onmessage: ' + evt.data);
  };
}

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },
  button: {
    marginLeft: 10
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: '100%'
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  },
  subtitle: {
    'font-family': 'Rubik',
    color: '#389EA8'
  }
});

class Messages extends React.Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   endpoint: "http://127.0.0.1:4001"
  //   // }

  //   // this.socket = window.io();
  // }

  // componentDidMount() {
  //   socket.on('news', function(data) {
  //     console.log(data);
  //     socket.emit('my other event', { my: 'data' });
  //   });
  // }

  send = () => {
    this.socket.emit('change color', 'red');
  };

  render() {
    const { classes } = this.props;
    // const socket = socketIOClient(this.state.endpoint)
    // this.socket.on('change color', color => {
    //   document.body.style.backgroundColor = color;
    // });

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }} className={classes.title}>
              Messages
            </h1>
            <Divider />
            <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
              Maybe a quote to discuss
            </h2>
            <Grid container justify="center">
              <Button
                className={classes.button}
                id="submitCommentBtn"
                variant="contained"
                color="secondary">
                Match Me
              </Button>
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <Grid container spacing={24} direction="row">
              <Grid item md={4} sm={12} xs={12}>
                <SideBar />
              </Grid>
              <Hidden smDown>
                <Grid item xs={8}>
                  <Grid
                    container
                    alignItems="stretch"
                    spacing={24}
                    direction="column"
                    justify="space-between">
                    <Grid item>
                      <div className="messages">
                        {/* {this.state.pastMessages.map(message =>{
                      return (
                        <div>{message.message}</div>
                      )
                    })} */}
                      </div>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-full-width"
                        style={{ margin: 10 }}
                        label="Message"
                        // value = {this.state.message}
                        // onChange = {ev=> this.setState({message: ev.target.value})}
                        multiline
                        rows="4"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <Button
                        className={classes.button}
                        id="submitCommentBtn"
                        variant="contained"
                        color="secondary"
                        onClick={() => this.send()}>
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Messages);
