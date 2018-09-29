import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';

class SideBar extends React.Component {
  state = {
    messages: []
  };

  render() {
    return (
      <div>
        {/* {this.state.messages.map(message => (
          <ListItem>
            <ListItemAvatar />
            <ListItemText primary={message.name} />
          </ListItem>
        ))} */}
        <ListItem>
          <Avatar>W</Avatar>
          <ListItemText primary="Message" />
        </ListItem>
        <Divider />
        <ListItem button component="a" href="/login">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </div>
    );
  }
}

export default SideBar;
