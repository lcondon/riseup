import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    marginTop: '10px',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      height: '80%'
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      height: '90%'
    }
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 4
  },

  paperComment: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit
  },
  button: {
    marginLeft: 10,
    fontFamily: 'Montserrat'
  },
  title: {
    'font-family': 'Rubik',
    color: '#01163D'
  },
  subtitle: {
    'font-family': 'Rubik',
    color: '#389EA8',
    textDecoration: 'none'
  }
});

class ArticleBody extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <h1 style={{ textAlign: 'center' }} className={classes.title}>
          Article of the Day:
        </h1>

        <a
          href={this.props.article.url}
          target="_blank"
          rel="noreferrer noopener"
          className={classes.subtitle}>
          {' '}
          <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
            {this.props.article.title}
          </h2>
        </a>

        <Divider />
        <Grid container justify="center">
          {this.props.article.image && (
            <img
              src={this.props.article.image}
              alt="Article"
              justify="center"
              className={classes.image}
            />
          )}
        </Grid>
        <p className={classes.body} style={{ textAlign: 'center' }}>
          {this.props.article.text}
        </p>
      </Paper>
    );
  }
}

ArticleBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticleBody);
