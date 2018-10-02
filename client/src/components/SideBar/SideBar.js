import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import PersonIcon from '@material-ui/icons/Person';
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
          <ListItem button component="a" href="/login">
            <ListItemAvatar />
            <ListItemText primary={message.name} />
          </ListItem>
        ))} */}
        <ListItem button>
          <Avatar>W</Avatar>
          <ListItemText primary="Message" />
        </ListItem>
        <Divider />
        <ListItem button>
          <Avatar>M</Avatar>
          <ListItemText primary="Message 2" />
        </ListItem>
        <Divider />
      </div>
    );
  }
}

export default SideBar;
