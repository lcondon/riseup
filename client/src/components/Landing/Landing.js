import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withWidth } from '@material-ui/core';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import anime from 'animejs';

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
  img: {
    [theme.breakpoints.up('xs')]: {
      width: 300
    },
    [theme.breakpoints.up('sm')]: {
      width: 500
    },
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D',
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      'font-size': 60
    },
    [theme.breakpoints.up('sm')]: {
      'font-size': 80
    },
    [theme.breakpoints.up('md')]: {
      'font-size': 100
    }
  },
  link: {
    'text-decoration': 'none',
    'font-family': 'Rubik',
    color: '#01163D'
  }
});

const logStyles = {
  width: '100%',
  marginTop: 0,
  marginBottom: 0
};

const signStyles = {
  width: '100%',
  marginTop: 0,
  marginBottom: 0
};

class Landing extends React.Component {
  componentDidMount() {
    anime({
      targets: '#logoDiv img',
      easing: 'easeInOutSine',
      scale: [1, 1.1, '-=.5', 1],
      duration: 2000
    });
  }

  render() {
    const { classes } = this.props;
    // const { width } = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" spacing={24}>
          <Grid container justify="center">
            <Grid item id="logoDiv">
              <img
                className={classes.img}
                justify="center"
                src="../../images/riseUp.png"
                alt="Logo"
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Paper className={classes.paper}>
                <Grid container justify="center">
                  <Grid item xs={10}>
                    <h1
                      style={{ textAlign: 'center' }}
                      className={classes.title}>
                      riseUP
                    </h1>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut libero metus, posuere quis odio sed, molestie ornare
                      urna. Curabitur pulvinar vulputate augue ac blandit. Nulla
                      dictum eu neque ac consectetur. Sed ut nisl ut lacus
                      tincidunt bibendum eu ut velit. Donec eu leo ligula.
                      Nullam posuere lobortis laoreet. Morbi maximus ultricies
                      lorem, quis maximus ligula tincidunt in. Pellentesque
                      habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas. Maecenas condimentum, lacus nec
                      egestas scelerisque, massa ligula ultrices mi, ac
                      ullamcorper ante nisi at leo. Integer condimentum metus
                      odio, vitae maximus nulla lobortis a. Quisque iaculis et
                      nunc id pretium. Curabitur facilisis iaculis dapibus.
                      Pellentesque dignissim velit ac lectus euismod, eu
                      placerat est ultrices. Etiam ut mi feugiat, cursus.
                    </p>
                  </Grid>
                  <Grid container justify="center" spacing={8}>
                    <Grid item xs={12} sm={5}>
                      <Link to="/login" className={classes.link}>
                        <Button
                          id="landingLogBtn"
                          style={logStyles}
                          variant="contained"
                          color="secondary">
                          Login
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <Link to="/signup" className={classes.link}>
                        <Button
                          id="landingSignBtn"
                          style={signStyles}
                          variant="contained"
                          color="primary">
                          Sign Up
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Landing);
