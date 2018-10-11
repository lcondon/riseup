import React from 'react';
import ArticleBody from '../ArticleBody';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/CallMade';
import compose from 'recompose/compose';
import SocketContext from '../../socket-context';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import decorator from '../../utils/decorator';

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
  }
});

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      comment: '',
      pastComments: []
    };
  }

  componentDidMount() {
    this.props.socket.on('RECEIVE_COMMENT', function(data) {
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
      this.props.loggedIn
        ? (message = {
            user: this.props.user.firstName + ' ' + this.props.user.lastName,
            userInitial: this.props.user.firstName.charAt(0),
            comment: this.state.comment,
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
          })
        : (message = {
            user: 'Anonymous',
            userInitial: 'A',
            comment: this.state.comment,
            time: moment().format('dddd, MMMM Do YYYY, h:mm a')
          });
      this.props.socket.emit('SEND_COMMENT', message);
      this.setState({ comment: '' });
    };
  }

  render() {
    const { classes } = this.props;
    // const { width } = props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <ArticleBody />
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
      </div>
    );
  }
}

const ArticleWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Article {...props} socket={socket} />}
  </SocketContext.Consumer>
);

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(decorator(ArticleWithSocket));
