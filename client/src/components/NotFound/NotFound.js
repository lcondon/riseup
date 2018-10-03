import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
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
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  }
});

function NotFound(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={10}>
              <h1 style={{ textAlign: 'center' }} className={classes.title}>
                Error
              </h1>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={10}>
              <p>Sorry, we couldn't find what you are looking for!</p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
