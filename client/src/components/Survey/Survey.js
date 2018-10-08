import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser';
import compose from 'recompose/compose';

const mapStateToProps = state => {
  return { user: state.user.info };
};

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
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
    width: 150,
    fontFamily: 'Montserrat'
  },
  title: {
    'font-family': 'Rubik',
    color: '#B21A2A'
  },
  text: {
    fontFamily: 'Montserrat'
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

  componentDidMount = () => {};

  handleSubmit = event => {
    event.preventDefault();

    API.updateUser(this.props.user._id, this.state).then(results => {
      console.log(results);
      this.props.addUser(results.data);
      window.location.href = '/messages';
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }} className={classes.title}>
              Initial Survey
            </h1>
            <Divider />
            <Grid
              alignItems="center"
              justify="center"
              container
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>1</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Planned Parenthood should continue to receive Federal Funding.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>2</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  The death penalty is justifiable in certain cases.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            </Grid>
            <Divider />
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>3</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Health insurance should be a right, not a privilege.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>4</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  The government has no responsibility to provide a social
                  safety net; helping the poor should be left up to private
                  charirites and individuals.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>5</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Government budgets should always be cut regardless of which
                  programs have to be cut.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>6</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  The government is not responsible for preventing global
                  warming.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>7</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Censorship of the media is sometimes necessary to protect
                  public morality.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>8</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Marriage is a sacred bond, that should only be between one man
                  and one woman. The government should not recognize gay
                  marriage.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>9</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Strict immigration restrictions should be put in place to
                  protect our citizens.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
            <Grid
              alignItems="center"
              container
              justify="center"
              wrap="wrap"
              spacing={16}>
              <Grid item xs={2} sm={1}>
                <Avatar>10</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.text}>
                  Government should increase gun control regulations.
                </p>
              </Grid>
              <Grid item xs={16}>
                <p className={classes.text}>
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
                onClick={this.handleSubmit}
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
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Survey);
