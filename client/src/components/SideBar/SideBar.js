import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import PersonIcon from '@material-ui/icons/Person';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  body: {
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  listBody: {
    overflowY: 'scroll'
  }
});

class SideBar extends React.Component {
  state = {
    messages: []
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.listBody}>
        {/* {this.state.messages.map(message => (
          <ListItem button component="a" href="/login">
            <ListItemAvatar />
            <ListItemText primary={message.name} />
          </ListItem>
        ))} */}
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar className={classes.body}>W</Avatar>
          <Hidden xsDown>
            <ListItemText className={classes.body} primary="Message" />
          </Hidden>
        </ListItem>
        <Divider />
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
