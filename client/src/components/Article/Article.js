import React from "react";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const Article = () => (
    <div>
    <Paper elevation={1}>
    <h1>Article of the Day</h1>
    <Divider/>
    <h2>Article's Title</h2>
    <p>Article Data</p>
    <Divider/>
    <h2>User Comments</h2>
    </Paper>
  </div>
)

export default Article;
