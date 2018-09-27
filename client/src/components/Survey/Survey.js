import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    marginTop: "10px",
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto"
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

class Survey extends Component {
  state = {
    check1: false,
    check2: false
  }

  handleSwitchToggle = event => {
    const { value } = event.target;

    this.setState({ [value]: !this.state[value] });
  }
  render() {
    const { classes } = this.props;
    const message = `Truncation should be conditionally applicable on this long line of text
                                        as this is a much longer line than what the container can support. `;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: "center" }}>Initial Survey</h1>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>1</Avatar>
              </Grid>
              <Grid item xs>
                <p>Planned Parenthood should continue to receive Federal Funding.</p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check1}
                    onChange={this.handleSwitchToggle}
                    value="check1"
                  />
                  Agree
                </p>
              </Grid>
            </Grid>

            <Divider />
            <Grid alignItems="center" justify="space-between" direction="row" container wrap="nowrap" spacing={16}>
            
              <Grid item>
                <Avatar>2</Avatar>
              </Grid><Grid direction="row" alignItems="center" container>
              <Grid item xs>
                <p>The death penalty is justifiable in certain cases.</p>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check2}
                    onChange={this.handleSwitchToggle}
                    value="check2"
                  />
                  Agree
                </p>
              </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Survey);
