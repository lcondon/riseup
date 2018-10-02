import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },
  table: {
    minWidth: 700
  },
  title: {
    'font-family': 'Rubik',
    color: '#B21A2A'
  }
});

class Profile extends React.Component {
  state = {
    user: {
      firstName: 'Lucas',
      lastName: 'Condon',
      email: 'lola@owen.com',
      password: 'iloverun'
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h1 style={{ margin: 0 }} className={classes.title}>
                      Your Account
                    </h1>
                  </TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    {`${this.props.user.firstName} ${this.props.user.lastName}`}
                  </TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{this.props.user.email}</TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>Password</TableCell>
                  <TableCell>{this.props.user.password}</TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
