import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withWidth } from '@material-ui/core';
import compose from 'recompose/compose';
import API from '../../utils/API';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  wrapper: {
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },
  container: {
    // display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    }
  },
  textField2: {
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    }
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  signStyles: {
    width: '100%',
    marginTop: 24,
    fontFamily: 'Montserrat'
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  }
});

class TextFields extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  signUp = event => {
    event.preventDefault();
    API.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response);
        if (response.data._id) {
          this.props.addUser(response.data);
          this.props.history.push('/survey');
        } else {
          console.log('no go');
        }
      })
      .catch(err => console.log(err));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <h1
                  style={{ textAlign: 'center', marginTop: 0 }}
                  className={classes.title}>
                  Sign Up
                </h1>
                <Divider />
              </Grid>
            </Grid>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-first-name"
                  label="First Name"
                  className={classes.textField2}
                  value={this.state.firstName}
                  onChange={this.handleChange('firstName')}
                  margin="normal"
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-last-name"
                  label="Last Name"
                  className={classes.textField2}
                  value={this.state.lastName}
                  onChange={this.handleChange('lastName')}
                  margin="normal"
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
              </Grid>
            </form>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              spacing={8}>
              <Grid item xs={8} sm={3}>
                <Button
                  onClick={this.signUp}
                  style={{ width: '100%' }}
                  id="landingSignBtn"
                  className={classes.signStyles}
                  variant="contained"
                  color="secondary">
                  Sign Up
                </Button>
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

export default compose(
  withStyles(styles),
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TextFields);
