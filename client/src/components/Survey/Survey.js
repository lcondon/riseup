import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import questions from './questions.json';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

class Survey extends Component {
  state = {
    questions: questions,
    answers: [],
    checkedA: true,
    checkedB: true
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={24}>
          <Grid item>
            <h1 style={{ textAlign: 'center' }}>Political Survey</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={24}>
            <List component="nav">
              <ListItem>
                <ListItemText primary="Is the death penalty jusitfiable?" />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label={this.state.checkedA ? 'True' : 'False'}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Is the death penalty jusitfiable?" />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.checkedA}
                      onChange={this.handleChange('checkedA')}
                      value="checkedA"
                    />
                  }
                  label={this.state.checkedA ? 'True' : 'False'}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Survey);
