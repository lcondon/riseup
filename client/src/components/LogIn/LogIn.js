import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
  },
  logStyles: {
    width: '100%',
    marginTop: 24
  }
});

class TextFields extends React.Component {
  state = {
    email: '',
    password: '',
    redirect: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { redirect } = this.state;

    if (redirect === true) {
      return <Redirect to="/article" />;
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <h1 style={{ textAlign: 'center', marginTop: 0 }}>Log-In</h1>
                <Divider />
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={8}>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={24}>
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: '100%' }}
                      id="standard-email"
                      label="Email"
                      name="email"
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
                  spacing={8}>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-password-input"
                      style={{ width: '100%' }}
                      label="Password"
                      name="password"
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
                spacing={8}>
                <Grid item xs={4}>
                  <Button
                    style={{ width: '100%' }}
                    id="landingLogBtn"
                    onClick={this.handleSubmit}
                    className={classes.logStyles}
                    variant="contained"
                    color="secondary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
