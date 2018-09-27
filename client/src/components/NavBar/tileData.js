import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Divider from '@material-ui/core/Divider';

export const mailFolderListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component="a" href="/article">
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Article of the Day" />
    </ListItem>
    <ListItem button component="a" href="/messages">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <Divider />
    <ListItem button component="a" href="/signout">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);
