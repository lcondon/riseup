import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withWidth } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/CallMade';
import API from '../../utils/API';
// import io from 'socket.io-client';
// import * as Scroll from 'react-scroll';
// import uuidv4 from 'uuid/v4';

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
    marginTop: 25
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
  },
  body: {
    fontFamily: 'Montserrat'
  },
  textField: {
    // marginLeft: theme.spacing.unit * 2,
    // marginRight: theme.spacing.unit,
    width: '100%',
    fontFamily: 'Montserrat',
    flexBasis: 200
  }
});

class Article extends React.Component {
  state = {
    comment: '',
    article: {}
  };

  postComment = event => {};

  componentDidMount() {
    API.getArticle().then(result => {
      console.log(result.data.response.docs[0].multimedia[0].url);
      console.log(result.data.response.docs[0]);
      let article = {
        title: result.data.response.docs[0].headline.main,
        snippet: result.data.response.docs[0].snippet,
        url: result.data.response.docs[0].web_url,
        image: `http://nytimes.com/${
          result.data.response.docs[0].multimedia[17].url
        }`
      };
      this.setState({ article: article });
    });
  }

  render() {
    const { classes } = this.props;
    // const { width } = props;
    const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: 'center' }} className={classes.title}>
              Article of the Day:
            </h1>
            <a
              href={this.state.article.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.subtitle}>
              {' '}
              <h2 style={{ textAlign: 'center' }} className={classes.subtitle}>
                {this.state.article.title}
              </h2>
            </a>
            <Divider />
            <Grid container justify="center">
              <img
                src={this.state.article.image}
                alt="Article"
                justify="center"
                className={classes.image}
              />
            </Grid>
            <p className={classes.body} style={{ textAlign: 'center' }}>
              {this.state.article.snippet}
            </p>
          </Paper>
          <Paper className={classes.paperComment}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={12}>
                <TextField
                  id="outlined-simple-end-adornment"
                  multiline
                  rowsMax="4"
                  margin="normal"
                  value={this.state.comment}
                  variant="outlined"
                  label="Comment"
                  onChange={ev => this.setState({ comment: ev.target.value })}
                  className={classes.textField}
                  InputLabelProps={{
                    disabled: true,
                    variant: 'outlined'
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          className={classes.button}
                          id="submitCommentBtn"
                          size="medium"
                          color="secondary"
                          onClick={ev => this.postComment(ev)}>
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid alignItems="center" container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.body}>W</Avatar>
              </Grid>
              <Grid item xs>
                <p className={classes.body}>{message}</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
