import React from 'react';
import ArticleBody from '../ArticleBody';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/CallMade';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import uuidv4 from 'uuid';

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
  },
  commentAuthor: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: 'italic'
  },
  alertTitle: {
    fontFamily: 'Rubik',
    color: '#01163D !important',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  }
});

class PastArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pastComments: [],
      article: {}
    };
  }

  componentDidMount() {
    API.getPastArticle(this.props.match.params.id).then(result => {
      console.log(result);
      this.setState({ article: result.data });
      this.setState({ pastComments: result.data.comments.reverse() });
    });
  }

  render() {
    const { classes } = this.props;
    // const { width } = props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <ArticleBody article={this.state.article} />
          <div className="articleComments">
            {this.state.pastComments.map(comment => {
              return (
                <Paper className={classes.paper} key={uuidv4()}>
                  <Grid
                    alignItems="center"
                    container
                    wrap="nowrap"
                    spacing={16}>
                    <Grid item>
                      <Avatar className={classes.body}>
                        {comment.userInitial}
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <p className={classes.body}>{comment.comment}</p>
                      <p className={classes.commentAuthor}>
                        {comment.user} on {comment.time}
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

PastArticle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(PastArticle);
