import React from "react";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  title: {
    "font-family": "Rubik",
    color: "#01163D"
  },
  body: {
    fontFamily: "Montserrat"
  }
});

const firstLoad = props => {
  return (
    <Div>
      <h1 className={classes.title}>riseUp Messaging Center</h1>
      <Divider />
      <p className={classes.body}>
        Click on the Match Me button above to discuss this week's quote! You
        will be matched with someone new who has an opposing viewpoint.
      </p>
      <p className={classes.body}>
        Use the left-hand navigation bar to continue talking with a past
        connection!
      </p>
    </Div>
  );
};

