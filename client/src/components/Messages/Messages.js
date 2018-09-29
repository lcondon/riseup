import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../SideBar';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    backgroundColor: '#44C2CE',
    marginLeft: 10
  }
});

class Messages extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <SideBar />
              </Grid>
              <Grid item xs={8}>
                <Grid
                  container
                  alignItems="stretch"
                  spacing={16}
                  direction="column"
                  justify="space-between">
                  <Grid item>
                    <p style={{ margin: 10 }}>
                      Hello I can't wait to start the back end.
                    </p>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="outlined-full-width"
                      style={{ margin: 10 }}
                      label="Message"
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
                      color="primary">
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
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

export default withStyles(styles)(Messages);
