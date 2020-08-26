/* eslint-disable no-restricted-globals, react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import {
  selectList as selectJokesList,
  selectFavorites,
  selectFetching as selectJokesFetching
} from "../../selectors/jokes";
import {
  selectList as selectCategoriesList,
  selectFetching as selectCategoriesFetching,
  selectCurrentCategory,
  selectShowedList
} from "../../selectors/categories";

import { getJoke, likeJoke, deleteJoke } from "../../actions/jokes";
import { getCategories, setCurrentCategory, showList } from "../../actions/categories";

import { isJokeUniq } from "../../reducers/jokes";

import StatusTabs from './StatusTabs';
import CategoriesTabs from './CategoriesTabs';
import JokesList from './JokesList';

import { statuses } from "../../reducers/categories";

const useStyles = makeStyles(() => ({
  contentContainer: {
    height: screen.height - 286
  },
  listContainer: {
    height: 'calc(100% - 48px)',
    display: 'flex'
  },
  buttonContainer: {
    height: 48,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

const Jokes = ({
  jokes, jokesFetching, categories, categoriesFetching, favorites, currentCategory, showedList
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onListStatusChange = (event, newStatus) => dispatch(showList(newStatus));

  const onCategoryChange = (event, newCategory) => dispatch(setCurrentCategory(newCategory));

  useEffect(
    () => {
      if (!categories.length) {
        dispatch(getCategories())
      }
    },
    []
  );

  useEffect(
    () => {
      if (!jokes.length) {
        dispatch(getJoke());
      }
    },
    []
  );

  const getMoreJokes = () => {
    let requestCounter = 0;
    const loadJoke = () => {
      requestCounter += 1;
      dispatch(getJoke(currentCategory))
        .then(({ joke }) => {
          if (!isJokeUniq(joke, jokes) && requestCounter < 5) {
            loadJoke();
          }
        });
    };
    loadJoke();
  };

  const onDeleteJoke = id => dispatch(deleteJoke(id));

  const onLikeJoke = id => dispatch(likeJoke(id));

  return (
    <Fragment>
      <StatusTabs
        currentStatus={showedList}
        onChange={onListStatusChange}
      />
      <div className={classes.contentContainer}>
        <div className={classes.listContainer}>
          <CategoriesTabs
            currentCategory={currentCategory}
            onChange={onCategoryChange}
            categories={categories}
          />
          <JokesList
            likeJoke={onLikeJoke}
            favorites={favorites}
            currentStatus={showedList}
            currentCategory={currentCategory}
            jokes={jokes}
            deleteJoke={onDeleteJoke}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            color='primary'
            variant="contained"
            onClick={getMoreJokes}
            disabled={showedList === statuses[1] || jokesFetching}
          >
            Get more jokes
          </Button>
        </div>
      </div>
    </Fragment>
  )
};

Jokes.propTypes = {
  jokes: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  jokesFetching: PropTypes.bool.isRequired,
  categoriesFetching: PropTypes.bool.isRequired,
  showedList: PropTypes.string.isRequired,
  currentCategory: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  jokes: selectJokesList(state),
  jokesFetching: selectJokesFetching(state),
  categories: selectCategoriesList(state),
  categoriesFetching: selectCategoriesFetching(state),
  favorites: selectFavorites(state),
  currentCategory: selectCurrentCategory(state),
  showedList: selectShowedList(state)
});

export default connect(mapStateToProps, null)(Jokes);
