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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#44C2CE',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#B21A2A',
      contrastText: '#ffffff'
    }
  }
});

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
  }
});

class Messages extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
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
                        <p style={{ margin: 10 }}>
                          Hello I can't wait to start the back end.
                        </p>
                      </Grid>
                      <Grid item>
                        <TextField
                          id="outlined-full-width"
                          style={{ margin: 10 }}
                          label="Message"
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
                          color="secondary">
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
      </MuiThemeProvider>
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
