import React from 'react';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// });

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

const Landing = props => {
  // const { classes } = props;
  return (
    <div>
      <Grid container direction="row" justify="center" spacing={24}>
        <Grid container justify="center">
          <Grid item>
            <img
              alt="logo"
              className="responsive-img"
              justify="center"
              src="../../images/riseUp.png"
            />
          </Grid>
        </Grid>
        <Grid item xs={10} sm={8}>
          <h1 style={{ textAlign: 'center' }}>riseUP</h1>
        </Grid>
        <Grid item xs={10} sm={8}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero
            metus, posuere quis odio sed, molestie ornare urna. Curabitur
            pulvinar vulputate augue ac blandit. Nulla dictum eu neque ac
            consectetur. Sed ut nisl ut lacus tincidunt bibendum eu ut velit.
            Donec eu leo ligula. Nullam posuere lobortis laoreet. Morbi maximus
            ultricies lorem, quis maximus ligula tincidunt in. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Maecenas condimentum, lacus nec egestas scelerisque,
            massa ligula ultrices mi, ac ullamcorper ante nisi at leo. Integer
            condimentum metus odio, vitae maximus nulla lobortis a. Quisque
            iaculis et nunc id pretium. Curabitur facilisis iaculis dapibus.
            Pellentesque dignissim velit ac lectus euismod, eu placerat est
            ultrices. Etiam ut mi feugiat, cursus.
          </p>
        </Grid>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={10} sm={4}>
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
          <Grid item xs={10} sm={4}>
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
    </div>
  );
};

export default Landing;
