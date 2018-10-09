import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ArticleIcon from '@material-ui/icons/ViewCompact';
import ArchiveIcon from '@material-ui/icons/Archive';
import Divider from '@material-ui/core/Divider';

export const mailFolderListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    <ListItem button component="a" href="/article">
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Article of the Day" />
    </ListItem>
    <ListItem button component="a" href="/archive">
      <ListItemIcon>
        <ArchiveIcon />
      </ListItemIcon>
      <ListItemText primary="Past Articles" />
    </ListItem>
  </div>
);

export const userFolderListItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    <ListItem button component="a" href="/article">
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Article of the Day" />
    </ListItem>
    <ListItem button component="a" href="/archive">
      <ListItemIcon>
        <ArchiveIcon />
      </ListItemIcon>
      <ListItemText primary="Past Articles" />
    </ListItem>
    <ListItem button component="a" href="/messages">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <Divider />
    <ListItem button component="a" href="/profile">
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Your Account" />
    </ListItem>
  </div>
);
