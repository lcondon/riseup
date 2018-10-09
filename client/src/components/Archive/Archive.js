import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Paper from '@material-ui/core/Paper';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 850,
    height: 400,
    // flexWrap: 'nowrap',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  },
  wrapper: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    overflow: 'hidden'
  },
  paper: {
    margin: theme.spacing.unit * 2
    // padding: theme.spacing.unit * 4
  },
  subtitle: {
    'font-family': 'Rubik',
    color: '#389EA8',
    textDecoration: 'none'
  }
});

class Archive extends React.Component {
  state = {
    pastArticles: []
  };

  componentDidMount() {
    API.getArchive().then(results => {
      console.log(results);
      this.setState(prevState => ({
        pastArticles: prevState.pastArticles.concat(results.data)
      }));
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <GridList
                cellHeight={200}
                spacing={1}
                className={classes.gridList}>
                {this.state.pastArticles.map(tile => (
                  <GridListTile key={tile.image} cols={1} rows={1}>
                    <img src={tile.image} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      titlePosition="bottom"
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <Link
                            to={tile.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={classes.subtitle}>
                            {' '}
                            <LaunchIcon />
                          </Link>
                        </IconButton>
                      }
                      actionPosition="left"
                      className={classes.titleBar}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

Archive.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Archive);
