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
import API from '../../utils/API';
import AlertDialog from '../Alert';
import compose from 'recompose/compose';

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
    overflowX: 'auto'
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
      marginLeft: 10
    }
  },
  table: {
    maxWidth: 800,
    justify: 'center'
  },
  title: {
    'font-family': 'Rubik',
    color: '#B21A2A',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  button: {
    marginLeft: 0,
    marginRight: 0
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
    API.deleteUser(id).then(results => {
      console.log(results);
      window.location.href = '/';
    });
  };

  // componentDidMount() {
  //   API.isLoggedIn().then(response => {
  //     console.log(response);
  //     if (response.data._id) {
  //       this.setState({
  //         user: response.data
  //       });
  //     }
  //   });
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Grid container direction="row" justify="center" spacing={8}>
              <Table className={classes.table}>
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
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>
                      {`${this.props.user.firstName} ${
                        this.props.user.lastName
                      }`}
                    </TableCell>
                    <Hidden xsDown>
                      <TableCell />
                    </Hidden>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>{this.props.user.email}</TableCell>
                    <Hidden xsDown>
                      <TableCell />
                    </Hidden>
                  </TableRow>
                  <TableRow>
                    <TableCell>Password</TableCell>
                    <TableCell>{this.props.user.password}</TableCell>
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
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Profile);
