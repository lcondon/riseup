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
  }
});

function Article(props) {
  const { classes } = props;
  // const { width } = props;
  const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: 'center' }}>Article of the Day:</h1>
          <h2 style={{ textAlign: 'center' }}>Article Title</h2>
          <Divider />
          <p>
            Truncation should be conditionally applicable on this long line of
            text as this is a much longer line than what the container can
            support.
          </p>
        </Paper>
        <Paper className={classes.paper}>
          <Grid alignItems="center" container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <p>{message}</p>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            label="Comment"
            fullWidth
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
            color="secondary">
            Submit
          </Button>
        </Paper>
      </div>
    </div>
  );
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
