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
import * as Scroll from 'react-scroll';
import uuidv4 from 'uuid/v4';

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
  },
  singleUserMessage: {
    marginBottom: 10
  },
  messages: {
    overflowY: 'scroll',
    height: 'fit-content',
    maxHeight: 300
  }
});

let Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      message: '',
      pastMessages: []
    };

    this.socket = io('http://localhost:3001');

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      // console.log(data)
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({ pastMessages: [...this.state.pastMessages, data] });
      console.log(this.state.pastMessages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        user: this.props.user.firstName,
        message: this.state.message
      });
      this.setState({ message: '' });
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
    scroller.scrollTo('test1', {
      duration: 1500,
      smooth: true,
      containerId: 'messageContainer',
      offset: 50 // Scrolls to element + 50 pixels down the page
    });
  }

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
                <Grid
                  item
                  xs={8}
                  spacing={24}
                  container
                  alignItems="stretch"
                  direction="column"
                  justify="flex-end">
                  <Grid item>
                    <div id="messageContainer" className={classes.messages}>
                      {this.state.pastMessages.map(message => {
                        return (
                          <div
                            className={classes.singleUserMessage}
                            key={uuidv4()}>
                            <strong> {message.user} </strong>: {message.message}
                          </div>
                        );
                      })}
                      <Element name="test1" className="element">
                        <div ref="bottom" />
                      </Element>
                    </div>
                  </Grid>
                  <Grid
                    container
                    spacing={24}
                    direction="row"
                    alignItems="center"
                    justify="space-between">
                    <Grid item xs={10}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        rowsMax="4"
                        style={{ margin: 10 }}
                        fullWidth
                        margin="normal"
                        value={this.state.message}
                        onChange={ev =>
                          this.setState({ message: ev.target.value })
                        }
                        label="Message"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        className={classes.button}
                        id="submitCommentBtn"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        onClick={ev => this.sendMessage(ev)}>
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
