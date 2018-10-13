import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  body: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  listBody: {
    overflowY: "hidden"
  }
});

const SideBar = props => {
  const { classes } = props;
  return (
    <div className={classes.listBody}>
      {/* {this.props.matches.map(match => {
        return (
          <ListItem button>
            <Avatar className={classes.body}>W</Avatar>
            <Hidden smDown>
              <ListItemText className={classes.body} primary="Message" />
            </Hidden>
            <Divider />
          </ListItem>
        );
      })} */}
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
