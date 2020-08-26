import React from 'react';
import * as PropTypes from 'prop-types';

import { Tabs, Tab } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tabs: {
    height: '100%',
    width: 160
  }
}));

const CategoriesTabs = ({ currentCategory, onChange, categories }) => {
  const classes = useStyles();
  return (
    <Tabs
      value={currentCategory}
      onChange={onChange}
      orientation="vertical"
      variant="scrollable"
      className={classes.tabs}
    >
      <Tab
        value='all'
        label='all'
      />
      {categories.map(category => (
        <Tab
          key={category}
          value={category}
          label={category}
        />
      ))}
    </Tabs>
  );
};

CategoriesTabs.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CategoriesTabs;
