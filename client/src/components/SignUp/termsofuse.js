import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    marginLeft: 0,
    marginRight: 0,
    fontFamily: "Montserrat"
  },
  title: {
    fontFamily: "Rubik",
    color: "#01163D !important",
    marginTop: 20,
    marginBottom: 10,
    // marginLeft: 20
  },
  body: {
    fontFamily: "Montserrat"
  }
});

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: "paper"
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
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
          <DialogTitle className={classes.title} id="scroll-dialog-title">Terms of Use
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p className={classes.body}>
                BY USING riseUP’S APPLICATION (INCLUDING ITS CONTENT) AND/OR
                PRODUCTS AND/OR SERVICES, YOU AGREE TO THE TERMS AND CONDITIONS
                THAT FOLLOW. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS,
                OR YOU DO NOT WISH TO BE BOUNDED BY THEM, DO NOT USE riseUp’S
                WEBSITE, PRODUCTS OR SERVICES.
              </p>
              <p className={classes.body}>
                You will not post on nor distribute through the riseUP Site any
                materials that are of defamatory, threatening, obscene, harmful,
                pornographic or otherwise illegal nature. Also, materials that
                somehow violate or infringe, in any way, on Our rights or on the
                rights of others (including but not limited to intellectual
                property rights, confidentiality rights and privacy rights) are
                absolutely forbidden, as well as activities that may cause
                distress or inconvenience on Us or others. Moreover, You may not
                express opinions that are vulgar, crude, sexist, racist or
                otherwise offensive. We encourage Users to treat each other in a
                respectful and polite manner.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ScrollDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollDialog);
