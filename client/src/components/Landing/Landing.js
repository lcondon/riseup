import React from 'react';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
  }
});

const logStyles = {
  width: '100%',
  margin: '5px',
  backgroundColor: '#B21A2A'
};

const signStyles = {
  width: '100%',
  margin: '5px',
  backgroundColor: '#44C2CE'
};

class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" spacing={24}>
          <Grid container justify="center">
            <Grid item>
              <img
                className="responsive-img"
                justify="center"
                src="../../images/riseUp.png"
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <div className={classes.wrapper}>
              <Paper className={classes.paper}>
                <Grid container justify="center">
                  <Grid item xs={10}>
                    <h1 style={{ textAlign: 'center' }}>riseUP</h1>
                    <Divider />
                  </Grid>
                  <Grid item xs={10}>
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
                  <Grid container justify="center" spacing={24}>
                    <Grid item xs={10} sm={5}>
                      <a style={{ textDecoration: 'none' }} href="/login">
                        <Button
                          id="landingLogBtn"
                          style={logStyles}
                          variant="contained"
                          color="primary">
                          Login
                        </Button>
                      </a>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                      <a style={{ textDecoration: 'none' }} href="/signup">
                        <Button
                          id="landingSignBtn"
                          style={signStyles}
                          variant="contained"
                          color="secondary">
                          Sign Up
                        </Button>
                      </a>
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

export default withStyles(styles)(Landing);
