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

const FunkyMessages = () => {
  class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: '',
        pastMessages: [],
        conversations: [],
        famousQuote: {},
        currentConversation: '',
        number: null,
        isMounted: false
      };

      this.props.socket.on('RECEIVE_MESSAGE', data => {
        addMessage(data);
      });

      this.props.socket.on('RECEIVE_ALL_MESSAGES', data => {
        setConversations(data);
      });

      this.props.socket.on('RECEIVE_CONVERSATION', data => {
        replaceMessage(data);
      });

      const replaceMessage = data => {
        this.setState({ pastMessages: data.messages });
      };

      const setConversations = data => {
        this.setState(prevState => ({ conversations: data }));
      };

      const addMessage = data => {
        this.setState(prevState => ({
          pastMessages: [...prevState.pastMessages, data]
        }));
      };

      this.matchUser = this.matchUser.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
      this.changeRoom = this.changeRoom.bind(this);
    }

    changeRoom = room => {
      if (this.refs.myMessages) {
        this.props.socket.emit('join', {
          room: room,
          user: this.props.user._id
        });
        // this.props.socket.emit('join', room);
        this.props.socket.emit('GET_CONVERSATION', room);
      }
    };

    matchUser = () => {
      if (this.refs.myMessages) {
        API.getMatch({
          number: this.state.number,
          user: this.props.user,
          topic: this.state.famousQuote.topic
        }).then(result => {
          if (result.data.room) {
            this.props.socket.emit('join', {
              room: result.data.room._id,
              user: this.props.user._id
            });
          }
        });
      }
    };

    componentDidMount() {
      if (this.refs.myMessages) {
        this.props.socket.emit('GET_ALL_MESSAGES', this.props.user._id);
        this.setState({ isMounted: true });
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
    }

    componentWillUnmount() {
      this.setState({ isMounted: false });
    }

    // componentDidUpdate() {
    //   this.scrollToBottom();
    // }

    handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    sendMessage = ev => {
      ev.preventDefault();

      if (this.refs.myMessages) {
        scroll.scrollToBottom();
        let message = {
          user: this.props.user.firstName,
          message: this.state.message
        };
        this.props.socket.emit('SEND_MESSAGE', message);
        this.setState({ message: '' });
      }
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

      return (
        <div className={classes.root} ref="myMessages">
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

                <Grid item style={{ paddingTop: 0 }} xs={12}>
                  <TextField
                    id="outlined-simple-end-adornment"
                    multiline
                    rows="4"
                    // style={{ margin: 10 }}
                    margin="none"
                    name="message"
                    value={this.state.message}
                    variant="outlined"
                    onChange={ev => this.handleChange(ev)}
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

  Messages.propTypes = {
    classes: PropTypes.object.isRequired
  };

  class MessagesWithSocket extends React.Component {
    render() {
      return (
        <SocketContext.Consumer>
          {socket => <Messages {...this.props} socket={socket} />}
        </SocketContext.Consumer>
      );
    }
  }

  return decorator(MessagesWithSocket);
};

export default compose(
  withStyles(styles),
  withWidth()
)(FunkyMessages());
