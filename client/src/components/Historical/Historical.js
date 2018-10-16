import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/CallMade';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import SocketContext from '../../socket-context';
import moment from 'moment';
import decorator from '../../utils/decorator';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import uuidv4 from 'uuid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },

  paperComment: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit
  },
  button: {
    marginLeft: 10,
    fontFamily: 'Montserrat'
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  },
  subtitle: {
    'font-family': 'Rubik',
    color: '#389EA8',
    textDecoration: 'none'
  },
  body: {
    fontFamily: 'Montserrat'
  },
  textField: {
    // marginLeft: theme.spacing.unit * 2,
    // marginRight: theme.spacing.unit,
    width: '100%',
    fontFamily: 'Montserrat',
    flexBasis: 200
  },
  commentAuthor: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: 'italic'
  },
  alertTitle: {
    fontFamily: 'Rubik',
    color: '#01163D !important',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  }
});

class Historical extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      comment: '',
      pastComments: [],
      open: false,
      article: {}
    };

    this.props.socket.on('RECEIVE_PAST_COMMENT', function(data) {
      console.log(data);
      addComment(data);
    });

    const addComment = data => {
      console.log(data);
      this.setState({ pastComments: [data, ...this.state.pastComments] });
      console.log(this.state.pastComments);
    };

    this.postComment = ev => {
      ev.preventDefault();
      let message;
      if (this.props.loggedIn) {
        message = {
          info: {
            user: this.props.user.firstName + ' ' + this.props.user.lastName,
            userInitial: this.props.user.firstName.charAt(0),
            comment: this.state.comment,
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
          },
          articleId: this.state.article._id
        };
        this.props.socket.emit('SEND_PAST_COMMENT', message);
        this.setState({ comment: '' });
      } else {
        this.setState({ open: true });
      }
    };
  }

  componentDidMount() {
    API.getHistoricalArticle().then(result => {
      console.log(result);
      this.setState({ article: result.data[0] });
      this.setState({ pastComments: result.data[0].comments.reverse() });
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }} className={classes.title}>
              This Day in History:
            </h1>

            <a
              href={this.state.article.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.subtitle}>
              {' '}
              <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
                {this.state.article.title}
              </h2>
            </a>

            <Divider />
            <p className={classes.body} style={{ textAlign: 'center' }}>
              {this.state.article.text}
            </p>
          </Paper>
          <Paper className={classes.paperComment}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={12}>
                <TextField
                  id="outlined-simple-end-adornment"
                  multiline
                  rowsMax="4"
                  margin="normal"
                  value={this.state.comment}
                  variant="outlined"
                  label="Comment"
                  onChange={ev => this.setState({ comment: ev.target.value })}
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
                          onClick={ev => this.postComment(ev)}>
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
          <div className="articleComments">
            {this.state.pastComments.map(comment => {
              return (
                <Paper className={classes.paper} key={uuidv4()}>
                  <Grid
                    alignItems="center"
                    container
                    wrap="nowrap"
                    spacing={16}>
                    <Grid item>
                      <Avatar className={classes.body}>
                        {comment.userInitial}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <p className={classes.body}>{comment.comment}</p>
                      <p className={classes.commentAuthor}>
                        {comment.user} on {comment.time}
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
          </div>
        </div>
        <div>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            {/* <DialogTitle> */}
            <h2 className={classes.alertTitle}>Whoops</h2>
            {/* </DialogTitle> */}
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                className={classes.body}>
                You must be logged in to comment.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <Button className={classes.button} color="primary">
                  Ok
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

const HistoricalWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Historical {...props} socket={socket} />}
  </SocketContext.Consumer>
);

Historical.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(decorator(HistoricalWithSocket));
