import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import { withWidth } from "@material-ui/core";
import compose from "recompose/compose";
import API from "../../utils/API";
import decorator from "../../utils/decorator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  root: {
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  wrapper: {
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },
  container: {
    // display: 'flex',
    flexWrap: "wrap"
  },
  button: {
    marginTop: 10
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  },
  textField2: {
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  signStyles: {
    width: "100%",
    marginTop: 24,
    fontFamily: "Montserrat"
  },
  title: {
    "font-family": "Rubik",
    color: "#01163D"
  }
});

class TextFields extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    open: false,
    scroll: "paper"
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
          this.props.actions.addUser(response.data);
          this.props.actions.logIn(true);
          this.props.history.push("/survey");
        } else {
          console.log("no go");
        }
      })
      .catch(err => console.log(err));
  };

  closeOut = event => {
    event.preventDefault();
    this.props.history.push("/")
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
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
                  style={{ textAlign: "center", marginTop: 0 }}
                  className={classes.title}
                >
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
                  onChange={this.handleChange("firstName")}
                  margin="normal"
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-last-name"
                  label="Last Name"
                  className={classes.textField2}
                  value={this.state.lastName}
                  onChange={this.handleChange("lastName")}
                  margin="normal"
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <TextField
                  id="standard-email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange("email")}
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
                  onChange={this.handleChange("password")}
                  margin="normal"
                />
              </Grid>
            </form>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              spacing={8}
            >
              {/* <Grid item xs={8} sm={3}> */}
                {/* <Button
                  onClick={this.signUp}
                  style={{ width: '100%' }}
                  id="landingSignBtn"
                  className={classes.signStyles}
                  variant="contained"
                  color="secondary">
                  Sign Up
                </Button> */}
                {/* <ScrollDialog/> */}

                <Button
                  className={classes.button}
                  id="signUpBtn"
                  variant="contained"
                  color="primary"
                  onClick={this.handleClickOpen("paper")}
                >
                  Sign Up
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  scroll={this.state.scroll}
                  aria-labelledby="scroll-dialog-title"
                >
                  <DialogTitle
                    className={classes.title}
                    id="scroll-dialog-title"
                  >
                    Terms of Use
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText className={classes.body}>
                        BY USING riseUP’S APPLICATION (INCLUDING ITS CONTENT)
                        AND/OR PRODUCTS AND/OR SERVICES, YOU AGREE TO THE TERMS
                        AND CONDITIONS THAT FOLLOW. IF YOU DO NOT AGREE TO THESE
                        TERMS AND CONDITIONS, OR YOU DO NOT WISH TO BE BOUNDED
                        BY THEM, DO NOT USE riseUp’S WEBSITE, PRODUCTS OR
                        SERVICES.
                        You will not post on nor distribute through the riseUP
                        Site any materials that are of defamatory, threatening,
                        obscene, harmful, pornographic or otherwise illegal
                        nature. Also, materials that somehow violate or
                        infringe, in any way, on Our rights or on the rights of
                        others (including but not limited to intellectual
                        property rights, confidentiality rights and privacy
                        rights) are absolutely forbidden, as well as activities
                        that may cause distress or inconvenience on Us or
                        others. Moreover, You may not express opinions that are
                        vulgar, crude, sexist, racist or otherwise offensive. We
                        encourage Users to treat each other in a respectful and
                        polite manner.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.signUp} color="primary">
                      Agree
                    </Button>
                    <Button onClick={this.closeOut} color="primary">
                      Disagree
                    </Button>
                  </DialogActions>
                </Dialog>

              {/* </Grid> */}
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
  withWidth()
)(decorator(TextFields));
