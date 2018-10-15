import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ArticleIcon from '@material-ui/icons/ViewCompact';
import ArchiveIcon from '@material-ui/icons/Archive';
import HistoryIcon from '@material-ui/icons/CalendarToday';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/article">
      <ListItem button>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Article of the Day" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/archive">
      <ListItem button>
        <ListItemIcon>
          <ArchiveIcon />
        </ListItemIcon>
        <ListItemText primary="Past Articles" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/history">
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="This Day in History" />
      </ListItem>
    </Link>
  </div>
);

export const userFolderListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/article">
      <ListItem button>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Article of the Day" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/archive">
      <ListItem button>
        <ListItemIcon>
          <ArchiveIcon />
        </ListItemIcon>
        <ListItemText primary="Past Articles" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/history">
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="This Day in History" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/messages">
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </Link>
    <Divider />
    <Link style={{ textDecoration: 'none' }} to="/profile">
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Your Account" />
      </ListItem>
    </Link>
  </div>
);
