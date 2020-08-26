import React from 'react';

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 16
  },
  description: {
    paddingLeft: 16
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paper }}>
      <Typography variant='h6'>Goal:</Typography>
      <Typography variant='body1' paragraph>
        Create a web application using React.JS. The web application will be pulling jokes (facts 😉) from the Chuck
        Norris API. All documentation for API is available at this link https://api.chucknorris.io/
      </Typography>
      <Typography variant='h6'>Requirements:</Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        1. The web app must have at least 2 routes. For example: "Jokes page" and "About page"
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        2. It should be possible to get jokes by category and also randomly
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        3. Received data must be stored in a redux store.
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        4. It should also be possible to save jokes.
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        5. Saved jokes should be shown in different place, in a table for example.
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }}>
        6. It should be possible to delete saved jokes.
      </Typography>
      <Typography variant='body1' classes={{ root: classes.description }} paragraph>
        7. There must not be any duplicate jokes.
      </Typography>
    </Paper>
  )
};

export default About;
