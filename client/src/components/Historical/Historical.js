import React from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from "@material-ui/icons/CallMade";

const styles = theme => ({
  root: {
    marginTop: "10px",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto"
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
    fontFamily: "Montserrat"
  },
  title: {
    "font-family": "Rubik",
    color: "#01163D"
  },
  subtitle: {
    "font-family": "Rubik",
    color: "#389EA8",
    textDecoration: "none"
  },
  body: {
    fontFamily: "Montserrat"
  },
  textField: {
    width: "100%",
    fontFamily: "Montserrat",
    flexBasis: 200
  },
  commentAuthor: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontStyle: "italic"
  },
  alertTitle: {
    fontFamily: "Rubik",
    color: "#01163D !important",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  }
});

class Historical extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      comment: "",
      pastComments: [],
      open: false,
      article: {}
    };

    this.props.socket.on("RECEIVE_COMMENT", function(data) {
      addComment(data);
    });

    const addComment = data => {
      console.log(data);
      this.setState({ pastComments: [data.info, ...this.state.pastComments] });
      console.log(this.state.pastComments);
    };

    this.postComment = ev => {
      ev.preventDefault();
      let message;
      if (this.props.loggedIn) {
        message = {
          info: {
            user: this.props.user.firstName + " " + this.props.user.lastName,
            userInitial: this.props.user.firstName.charAt(0),
            comment: this.state.comment,
            time: moment().format("dddd, MMMM Do YYYY, h:mm a")
          },
          articleId: this.state.article._id
        };
        this.props.socket.emit("SEND_COMMENT", message);
        this.setState({ comment: "" });
      } else {
        this.setState({ open: true });
      }
    };
  }

  componentDidMount() {
    console.log(uuidv4());
    API.getArticle().then(result => {
      console.log(result);
      if (result.data.error) {
        API.postArticle().then(result2 => {
          this.setState({ article: result2.data });
        });
      } else {
        this.setState({ article: result.data });
        this.setState({ pastComments: result.data.comments.reverse() });
      }
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <h1 style={{ textAlign: "center" }} className={classes.title}>
              Article of the Day:
            </h1>

            <a
              href={this.props.article.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.subtitle}
            >
              {" "}
              <h2 style={{ textAlign: "center" }} className={classes.subtitle}>
                {this.props.article.title}
              </h2>
            </a>

            <Divider />
            <Grid container justify="center">
              <img
                src={this.props.article.image}
                alt="Article"
                justify="center"
                className={classes.image}
              />
            </Grid>
            <p className={classes.body} style={{ textAlign: "center" }}>
              {this.props.article.text}
            </p>
          </Paper>
          <Paper className={classes.paperComment}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
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
                    variant: "outlined"
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          className={classes.button}
                          id="submitCommentBtn"
                          size="medium"
                          color="secondary"
                          onClick={ev => this.postComment(ev)}
                        >
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}
