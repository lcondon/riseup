import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import { withWidth } from "@material-ui/core";
import compose from "recompose/compose";
import { Link } from "react-router-dom";
import anime from "animejs";

const styles = theme => ({
  root: {
    marginTop: "10px",
    overflow: "hidden",
    // padding: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up("md")]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },
  img: {
    [theme.breakpoints.up("xs")]: {
      width: 350
    },
    [theme.breakpoints.up("sm")]: {
      width: 500
    },
    [theme.breakpoints.up("md")]: {
      width: 550
    }
  },
  title: {
    "font-family": "Rubik",
    color: "#01163D",
    margin: 0,
    [theme.breakpoints.up("xs")]: {
      "font-size": 60
    },
    [theme.breakpoints.up("sm")]: {
      "font-size": 80
    },
    [theme.breakpoints.up("md")]: {
      "font-size": 100
    }
  },
  link: {
    "text-decoration": "none",
    "font-family": "Rubik",
    color: "#01163D"
  },
  body: {
    fontFamily: "Montserrat"
  },
  imageSpace: {
    height: 400
  }
});

const logStyles = {
  width: "100%",
  marginTop: 0,
  marginBottom: 0,
  fontFamily: "Montserrat"
};

const signStyles = {
  width: "100%",
  marginTop: 0,
  marginBottom: 0,
  fontFamily: "Montserrat"
};

class Landing extends React.Component {
  componentDidMount() {
    anime({
      targets: "#logoDiv img",
      rotate: "2turn",
      duration: 2500,
      easing: "easeOutSine"
    });
    anime.speed = 0.75;
  }

  render() {
    const { classes } = this.props;
    // const { width } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Grid container justify="center">
              <Grid item id="logoDiv">
                <img
                  className={classes.img}
                  src="../../images/riseUp.png"
                  alt="Logo"
                />
              </Grid>
            </Grid>
            <Paper className={classes.paper}>
              <Grid container justify="center">
                <Grid item xs={10}>
                  <h1 style={{ textAlign: "center" }} className={classes.title}>
                    riseUP
                  </h1>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <p className={classes.body}>
                    riseUp is a political application that seeks to match users
                    with differing political opinions for meaningful discussions
                    about today's issues.
                  </p>
                  <p className={classes.body}>
                    While the Associated Press believes "Americans are more
                    divided than ever," riseUp hopes to become a platform to
                    bridge that gap. We seek to create connections that allow
                    users to engage and debate issues in a productive manner.
                  </p>
                  <p className={classes.body}>
                    Users will have the ability to comment on current political
                    topics and significant historical events as well as message
                    other users one-on-one for further discussions.
                  </p>
                </Grid>
                <Grid container justify="center" spacing={8}>
                  <Grid item xs={12} sm={5}>
                    <Link to="/login" className={classes.link}>
                      <Button
                        id="landingLogBtn"
                        style={logStyles}
                        variant="contained"
                        color="secondary"
                      >
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
                        color="primary"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
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
