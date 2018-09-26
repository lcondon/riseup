import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const stylesD = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '3%'
};

class Paper extends Component {
  state = {
    name: '',
    ansers: []
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} style={stylesD} elevation={1}>
          <h3>{this.props.head}</h3>
          <p>
            Paper can be used to build surface or other elements for your
            application.
          </p>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Paper);
