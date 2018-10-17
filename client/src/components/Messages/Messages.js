import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import withWidth from '@material-ui/core/withWidth';
import SendIcon from '@material-ui/icons/Send';
import compose from 'recompose/compose';
import Divider from '@material-ui/core/Divider';
import * as Scroll from 'react-scroll';
import uuidv4 from 'uuid/v4';
import SocketContext from '../../socket-context';
import quotes from './quotes.json';
import moment from 'moment';
import decorator from '../../utils/decorator';
import API from '../../utils/API';

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    maxWidth: 1000,
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      paddingTop: 0
    }
  },
  messagePaper: {
    margin: theme.spacing.unit * 2,
    padding: 0,
    height: 475,
    [theme.breakpoints.down('xs')]: {
      height: `calc(100vh - 50px)`,
      margin: 0
    }
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginBottom: theme.spacing.unit * 2
    }
  },
  button: {
    fontFamily: 'Montserrat'
  },
  textField: {
    // marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    width: '100%',
    fontFamily: 'Montserrat',
    flexBasis: 200
  },
  margin: {
    margin: theme.spacing.unit
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  },
  subtitle: {
    'font-family': 'Rubik',
    color: '#389EA8'
  },
  body: {
    fontFamily: 'Montserrat'
  },
  sideBar: {
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  textBody: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  listBody: {
    overflowY: 'hidden'
  },
  singleUserMessage: {
    marginBottom: 10,
    fontFamily: 'Montserrat'
  },
  messages: {
    overflowY: 'scroll',
    height: 'fit-content',
    maxHeight: 300,
    fontFamily: 'Montserrat'
  },
  quoteAuthor: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Montserrat'
  }
});

let Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      pastMessages: [],
      conversations: [],
      famousQuote: {},
      currentConversation: '',
      number: null
    };
    this.props.socket.on('RECEIVE_MESSAGE', data => {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState(prevState => ({
        pastMessages: [...prevState.pastMessages, data]
      }));
    };

    this.matchUser = () => {
      API.getMatch({
        number: this.state.number,
        user: this.props.user,
        topic: this.state.famousQuote.topic
      }).then(result => {
        if (result.data.room) {
          this.props.socket.emit('join', result.data.room);
          API.getConversations(this.props.user._id).then(results => {
            this.setState({ conversations: results.data });
          });
        }
      });
    };
    this.matchUser = this.matchUser.bind(this);
    this.changeRoom = room => {
      this.props.socket.emit('join', room);
      API.getConversations(this.props.user._id).then(results => {
        this.setState({ conversations: results.data });
        for (let i = 0; i < this.state.conversations.length; i++) {
          if (this.state.conversations[i]._id === room) {
            this.setState({
              pastMessages: this.state.conversations[i].messages
            });
          }
        }
      });
    };
    this.changeRoom = this.changeRoom.bind(this);
  }

  componentDidMount() {
    API.getConversations(this.props.user._id).then(results => {
      this.setState({ conversations: results.data });
    });
    const startDate = moment('10/03/2018').format('MM DD YYYY');
    let dateDifference = moment().diff(startDate, 'weeks') - 1;
    if (dateDifference > 9) {
      var dividend = Math.floor(dateDifference / 9);
      var minuend = dividend * 9;
      let newDifference = dateDifference - minuend;
      this.setState({
        famousQuote: quotes[newDifference],
        number: newDifference
      });
    } else {
      this.setState({
        famousQuote: quotes[dateDifference],
        number: dateDifference
      });
    }
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  sendMessage = ev => {
    ev.preventDefault();
    scroll.scrollToBottom();
    let message = {
      user: this.props.user.firstName,
      message: this.state.message
    };
    this.props.socket.emit('SEND_MESSAGE', message);
    this.setState({ message: '' });
  };

  scrollToBottom() {
    scroller.scrollTo('test1', {
      duration: 1500,
      smooth: true,
      containerId: 'messageContainer',
      offset: 50 // Scrolls to element + 50 pixels down the page
    });
  }

  render = () => {
    const { classes } = this.props;
    const { match } = this.props;
    // const socket = socketIOClient(this.state.endpoint)
    // this.socket.on('change color', color => {
    //   document.body.style.backgroundColor = color;
    // });

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: 'center' }} className={classes.title}>
            Messages
          </h1>
          <Divider />
          <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
            {this.state.famousQuote.quote}
          </h2>
          <p className={classes.quoteAuthor}>
            --
            {this.state.famousQuote.author}
          </p>
          <p>{match.params.id}</p>
          <Grid container justify="center">
            <Button
              className={classes.button}
              id="submitCommentBtn"
              variant="contained"
              onClick={ev => {
                ev.preventDefault();
                this.matchUser();
              }}
              color="secondary">
              Match Me
            </Button>
          </Grid>
        </Paper>
        <Paper className={classes.messagePaper}>
          <Grid
            container
            spacing={16}
            style={{ height: 'inherit' }}
            direction="row">
            <Grid item xs={3} className={classes.sideBar}>
              <div className={classes.listBody}>
                {this.state.conversations.map(conversation => {
                  return (
                    <ListItem
                      key={conversation._id}
                      onClick={ev => {
                        ev.preventDefault();
                        this.changeRoom(conversation._id);
                      }}
                      button>
                      <Avatar className={classes.textBody}>
                        {conversation.userIds[0].firstName ===
                        this.props.user.firstName
                          ? conversation.userIds[1].firstName.charAt(0)
                          : conversation.userIds[0].firstName.charAt(0)}
                      </Avatar>
                      <Divider />
                    </ListItem>
                  );
                })}
              </div>
            </Grid>
            <Grid
              item
              xs={9}
              spacing={8}
              container
              alignItems="flex-end"
              direction="row"
              justify="center">
              <Grid item style={{ paddingBottom: 0 }} xs={12}>
                <div id="messageContainer" className={classes.messages}>
                  {this.state.pastMessages.map(message => {
                    return (
                      <div className={classes.singleUserMessage} key={uuidv4()}>
                        <strong> {message.user} </strong>: {message.message}
                      </div>
                    );
                  })}
                  <Element name="test1" className="element">
                    <div ref="bottom" />
                  </Element>
                </div>
              </Grid>

              <Grid item style={{ paddingTop: 0 }} xs={12}>
                <TextField
                  id="outlined-simple-end-adornment"
                  multiline
                  rows="4"
                  // style={{ margin: 10 }}
                  margin="none"
                  value={this.state.message}
                  variant="outlined"
                  onChange={ev => this.setState({ message: ev.target.value })}
                  label="Message"
                  className={classes.textField}
                  InputLabelProps={{
                    disabled: true,
                    variant: 'outlined'
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          className={classes.button}
                          id="submitCommentBtn"
                          size="medium"
                          color="secondary"
                          onClick={ev => this.sendMessage(ev)}>
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
}

const MessagesWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Messages {...props} socket={socket} />}
  </SocketContext.Consumer>
);

Messages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(decorator(MessagesWithSocket));
