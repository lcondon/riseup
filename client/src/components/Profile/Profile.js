import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withWidth } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import AlertDialog from './ProfileAlert';
import compose from 'recompose/compose';
import API from '../../utils/API';
import decorator from '../../utils/decorator';

const styles = theme => ({
  root: {
    display: 'table',
    marginTop: '10px',
    overflowX: 'auto',
    padding: theme.spacing.unit * 2,
    maxWidth: 800,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  table: {
    maxWidth: 800
  },
  title: {
    'font-family': 'Rubik',
    color: '#B21A2A',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  body: {
    fontFamily: 'Montserrat'
  },
  button: {
    marginLeft: 0,
    marginRight: 0,
    fontFamily: 'Montserrat'
  },
  buttonCell: {
    paddingTop: 10
  },
  headerCell: {
    [theme.breakpoints.down('sm')]: {
      padding: 'none'
    },
    padding: 'dense'
  }
});

class Profile extends React.Component {
  state = {
    user: {}
  };

  handleDelete = id => {
    console.log(this.props.user);
    API.deleteUser(id).then(results => {
      this.props.actions.dropUser();
      this.props.actions.logOut(false);
      console.log(results);
      this.props.history.push(`/`);
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loggedIn) {
      return { user: nextProps.user };
    } else return null;
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Paper className={classes.root}>
          <Table styles="root" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.headerCell}>
                  <h1 style={{ margin: 0 }} className={classes.title}>
                    Your Account
                  </h1>
                </TableCell>
                <TableCell />
                <Hidden xsDown>
                  <TableCell />
                </Hidden>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>
                  {this.state.user.firstName} {this.state.user.lastName}
                </TableCell>
                <Hidden xsDown>
                  <TableCell />
                </Hidden>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{this.state.user.email}</TableCell>
                <Hidden xsDown>
                  <TableCell />
                </Hidden>
              </TableRow>
              <TableRow>
                <TableCell>Password</TableCell>
                <TableCell>{this.state.user.password}</TableCell>
                <Hidden xsDown>
                  <TableCell />
                </Hidden>
              </TableRow>
              <TableRow variant="footer">
                <Hidden xsDown>
                  <TableCell style={{ borderBottom: 'none' }} />
                  <TableCell style={{ borderBottom: 'none' }} />
                </Hidden>
                <TableCell
                  className={classes.buttonCell}
                  style={{
                    borderBottom: 'none'
                  }}>
                  <AlertDialog
                    title="Are you sure?"
                    body="You will lose all your messages when you delete your account."
                    secondButton={
                      <Button
                        onClick={() => {
                          this.handleDelete(this.props.user._id);
                        }}
                        className={classes.button}
                        id="deleteBtn"
                        color="primary">
                        Delete
                      </Button>
                    }
                  />{' '}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(decorator(Profile));
