import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  button: {
    marginLeft: 0,
    marginRight: 0,
    fontFamily: 'Montserrat'
  },
  title: {
    fontFamily: 'Rubik',
    color: '#01163D !important',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  body: {
    fontFamily: 'Montserrat'
  }
});

class AlertDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          className={classes.button}
          id="deleteBtn"
          variant="contained"
          color="primary">
          Delete Account
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description">
          {/* <DialogTitle> */}
          <h2 className={classes.title}>{this.props.title}</h2>
          {/* </DialogTitle> */}
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              className={classes.body}>
              {this.props.body}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              className={classes.button}
              color="primary">
              Cancel
            </Button>
            {this.props.secondButton}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlertDialog);
