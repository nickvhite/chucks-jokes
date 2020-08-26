import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';

import { List, ListItem, IconButton, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Favorite, FavoriteBorder } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { statuses } from "../../reducers/categories";

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    overflow: 'auto'
  },
  itemContent: {
    paddingRight: 96
  }
}));

const JokesList = ({
  jokes, currentCategory, currentStatus, likeJoke, deleteJoke, favorites
}) => {
  const classes = useStyles();
  const jokesByStatus = useMemo(
    () => {
      if (currentStatus === statuses[0]) {
        return jokes;
      } else {
        return jokes.filter(({ id }) => favorites.includes(id))
      }
    },
    [jokes, favorites, currentStatus]
  );

  const jokesByCategory = useMemo(
    () => {
      if (currentCategory === 'all') {
        return jokesByStatus;
      } else {
        return jokesByStatus.filter(({ categories }) => categories.includes(currentCategory))
      }
    },
    [jokesByStatus, currentCategory]
  );

  return (
    <List classes={{ root: classes.list }} disablePadding>
      {jokesByCategory.map(({ id, value, updated_at }) => (
        <ListItem key={id} classes={{ secondaryAction: classes.itemContent }}>
          <ListItemText
            primary={value}
            secondary={updated_at}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={() => likeJoke(id)}>
              {favorites.includes(id) ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
            <IconButton onClick={() => deleteJoke(id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

JokesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  jokes: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  likeJoke: PropTypes.func.isRequired,
  deleteJoke: PropTypes.func.isRequired
};

export default JokesList;
