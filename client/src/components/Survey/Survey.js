import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#44C2CE',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#B21A2A',
      contrastText: '#ffffff'
    }
  }
});

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
    marginBottom: '15px'
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  colorSwitchBase: {
    color: '#FFFFFF',
    '&$colorChecked': {
      color: '#44C2CE',
      '& + $colorBar': {
        backgroundColor: '#44C2CE'
      }
    }
  },
  button: {
    margin: 10,
    width: 150
  },
  colorBar: {},
  colorChecked: {}
});

class Survey extends Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check9: false,
    check10: false
  };

  handleSwitchToggle = event => {
    const { value } = event.target;

    this.setState({ [value]: !this.state[value] });
  };
  render() {
    const { classes } = this.props;

    return (
<<<<<<< HEAD
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }}>Initial Survey</h1>
            <Divider />
            <Grid alignItems="center" justify="center" container wrap="wrap" spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>1</Avatar>
              </Grid>
              <Grid item xs>
                <p>
                  Planned Parenthood should continue to receive Federal Funding.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check1}
                    onChange={this.handleSwitchToggle}
                    value="check1"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>

            <Divider />
            <Grid alignItems="center"  justify="center"  container wrap="wrap" spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>2</Avatar>
              </Grid>
              <Grid item xs>
                <p>The death penalty is justifiable in certain cases.</p>
              </Grid>
              <Grid item xs={16}>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check2}
                    onChange={this.handleSwitchToggle}
                    value="check2"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>3</Avatar>
              </Grid>
              <Grid item xs>
                <p>Health insurance should be a right, not a privilege.</p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check3}
                    onChange={this.handleSwitchToggle}
                    value="check3"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>4</Avatar>
              </Grid>
              <Grid item xs>
                <p>
                  The government has no responsibility to provide a social
                  safety net; helping the poor should be left up to private
                  charirites and individuals.
                </p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check4}
                    onChange={this.handleSwitchToggle}
                    value="check4"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>5</Avatar>
              </Grid>
              <Grid item xs>
                <p>
                  Government budgets should always be cut regardless of which
                  programs have to be cut.
                </p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check5}
                    onChange={this.handleSwitchToggle}
                    value="check5"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>6</Avatar>
              </Grid>
              <Grid item xs>
                <p>
                  The government is not responsible for preventing global
                  warming.
                </p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check6}
                    onChange={this.handleSwitchToggle}
                    value="check6"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
              </Grid>
            </Grid>
            <Divider />
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar>7</Avatar>
              </Grid>
              <Grid item xs>
                <p>
                  Censorship of the media is sometimes necessary to protect
                  public morality.
                </p>
              </Grid>
              <Grid item>
                <p>
                  {/* {String(this.state.check1)} */}
                  Disagree
                  <Switch
                    checked={this.state.check7}
                    onChange={this.handleSwitchToggle}
                    value="check7"
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                  Agree
                </p>
=======
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Paper className={classes.paper}>
              <h1 style={{ textAlign: 'center' }}>Initial Survey</h1>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>1</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    Planned Parenthood should continue to receive Federal
                    Funding.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check1}
                      onChange={this.handleSwitchToggle}
                      value="check1"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>

              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>2</Avatar>
                </Grid>
                <Grid item xs>
                  <p>The death penalty is justifiable in certain cases.</p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check2}
                      onChange={this.handleSwitchToggle}
                      value="check2"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
>>>>>>> 009742b89d65b3e1419b7d82637322d52993b55c
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>3</Avatar>
                </Grid>
                <Grid item xs>
                  <p>Health insurance should be a right, not a privilege.</p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check3}
                      onChange={this.handleSwitchToggle}
                      value="check3"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>4</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    The government has no responsibility to provide a social
                    safety net; helping the poor should be left up to private
                    charirites and individuals.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check4}
                      onChange={this.handleSwitchToggle}
                      value="check4"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>5</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    Government budgets should always be cut regardless of which
                    programs have to be cut.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check5}
                      onChange={this.handleSwitchToggle}
                      value="check5"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>6</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    The government is not responsible for preventing global
                    warming.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check6}
                      onChange={this.handleSwitchToggle}
                      value="check6"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>7</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    Censorship of the media is sometimes necessary to protect
                    public morality.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check7}
                      onChange={this.handleSwitchToggle}
                      value="check7"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>8</Avatar>
                </Grid>
                <Grid item xs>
                  <p>Marriage is between one man and one woman.</p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check8}
                      onChange={this.handleSwitchToggle}
                      value="check8"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>9</Avatar>
                </Grid>
                <Grid item xs>
                  <p>
                    Strict immigration restrictions should be put in place to
                    protect our citizens.
                  </p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check9}
                      onChange={this.handleSwitchToggle}
                      value="check9"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid alignItems="center" container wrap="nowrap" spacing={16}>
                <Grid item>
                  <Avatar>10</Avatar>
                </Grid>
                <Grid item xs>
                  <p>Government should increase gun control regulations.</p>
                </Grid>
                <Grid item>
                  <p>
                    {/* {String(this.state.check1)} */}
                    Disagree
                    <Switch
                      checked={this.state.check10}
                      onChange={this.handleSwitchToggle}
                      value="check10"
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                      }}
                    />
                    Agree
                  </p>
                </Grid>
              </Grid>
              <Divider />
              <Grid container justify="flex-end">
                <Button
                  className={classes.button}
                  id="submitCommentBtn"
                  variant="contained"
                  color="secondary">
                  Submit
                </Button>
              </Grid>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Survey);
