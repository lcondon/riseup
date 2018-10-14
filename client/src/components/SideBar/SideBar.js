import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  body: {
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  listBody: {
    overflowY: 'hidden'
  }
});

const SideBar = props => {
  const { classes } = props;
  return (
    <div className={classes.listBody}>
      {this.props.conversations.map(conversation => {
        return (
          <ListItem key={conversation.roomId} button>
            <Avatar className={classes.body}>
              {conversation.user1.firstName === this.props.user.firstName
                ? conversation.user2.firstName.charAt(0)
                : conversation.user1.firstName.charAt(0)}
            </Avatar>
            <Hidden smDown>
              <ListItemText className={classes.body} primary="Message" />
            </Hidden>
            <Divider />
          </ListItem>
        );
      })}
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
