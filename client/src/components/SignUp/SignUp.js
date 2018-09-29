import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B21A2A',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#44C2CE',
      contrastText: '#ffffff'
    }
  }
});

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
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const signStyles = {
  width: 440,
  marginTop: 24
};

class TextFields extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Paper className={classes.paper}>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <h1 style={{ textAlign: 'center', marginTop: 0 }}>Sign Up</h1>
                  <Divider />
                </Grid>
              </Grid>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={24}>
                  <Grid item>
                    <TextField
                      id="standard-first-name"
                      label="First Name"
                      className={classes.textField}
                      value={this.state.firstName}
                      onChange={this.handleChange('firstName')}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-last-name"
                      label="Last Name"
                      className={classes.textField}
                      value={this.state.lastName}
                      onChange={this.handleChange('lastName')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={24}>
                  <Grid item>
                    <TextField
                      style={{ width: 440 }}
                      id="standard-email"
                      label="Email"
                      className={classes.textField}
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  justify="center"
                  spacing={24}>
                  <Grid item>
                    <TextField
                      id="standard-password-input"
                      style={{ width: 440 }}
                      label="Password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </form>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="center"
                spacing={24}>
                <Grid item>
                  <Button
                    id="landingSignBtn"
                    style={signStyles}
                    variant="contained"
                    color="secondary">
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
