import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
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

const logStyles = {
  width: 440,
  marginTop: 24,
  backgroundColor: '#B21A2A'
};

class TextFields extends React.Component {
  state = {
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={24}>
        <Grid item>
          <h1 style={{ textAlign: 'center' }}>Log-In</h1>
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
              id="landingLogBtn"
              style={logStyles}
              variant="contained"
              color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
