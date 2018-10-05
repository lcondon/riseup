import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withWidth } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/CallMade';
// import io from 'socket.io-client';
// import * as Scroll from 'react-scroll';
// import uuidv4 from 'uuid/v4';

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
    color: '#389EA8'
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
  }
});

class Article extends React.Component {
  state = {
    comment: ''
  };

  postComment = event => {};

  render() {
    const { classes } = this.props;
    // const { width } = props;
    const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }} className={classes.title}>
              Article of the Day:
            </h1>
            <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
              Article Title
            </h2>
            <Divider />
            <p className={classes.body}>
              Truncation should be conditionally applicable on this long line of
              text as this is a much longer line than what the container can
              support.
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
          <Paper className={classes.paper}>
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.body}>W</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.body}>{message}</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
