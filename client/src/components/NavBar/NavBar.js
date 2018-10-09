import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, userFolderListItems } from '../NavBar/tileData';
import { withWidth } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { dropUser } from '../../actions/dropUser';
import { addUser } from '../../actions/addUser';
import compose from 'recompose/compose';

const mapStateToProps = state => {
  return { user: state.user.info, loggedIn: state.user.loggedIn };
};

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  dropUser: user => dispatch(dropUser(user))
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 60
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    fontFamily: 'Montserrat'
  },
  navbar: {
    padding: 0,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  link: {
    'text-decoration': 'none',
    color: '#01163D',
    fontFamily: 'Montserrat'
  },
  list: {
    fontFamily: 'Montserrat'
  },
  button: {
    fontFamily: 'Montserrat'
  }
});

const backgroundStyle = {
  backgroundColor: '#01163D'
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignOut = () => {
    console.log(this.props.user);
    this.props.dropUser(true);
    axios.post('/api/users/logout').then(results => {
      // if (window.location.pathname === '/') {
      // window.location.reload(true);
      // } else {
      window.location.href = '/';
      // }
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let sideList;
    this.props.loggedIn
      ? (sideList = (
          <div className={classes.list}>
            <List className={classes.list}>{userFolderListItems}</List>
          </div>
        ))
      : (sideList = (
          <div className={classes.list}>
            <List className={classes.list}>{mailFolderListItems}</List>
          </div>
        ));

    return (
      <div className={classes.root}>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}>
            {sideList}
          </div>
        </Drawer>
        <AppBar
          justify="center"
          position="fixed"
          style={backgroundStyle}
          color="primary"
          className={classes.navbar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} />
            {this.props.loggedIn ? (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem
                    onClick={this.handleSignOut}
                    className={classes.button}>
                    Sign Out
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem
                    onClick={this.handleClose}
                    className={classes.button}>
                    <Link to="/login" className={classes.link}>
                      Log In
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleClose}
                    className={classes.button}>
                    <Link to="/signup" className={classes.link}>
                      Sign Up
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MenuAppBar);
