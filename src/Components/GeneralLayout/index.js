/* eslint-disable no-restricted-globals */
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

import './styles.scss';

const GeneralLayout = ({ children, location }) => (
  <Fragment>
    <Paper square>
      <Tabs value={location.pathname}>
        <Tab
          component={Link}
          label="Jokes"
          value='/jokes'
          to='/jokes'
        />
        <Tab
          component={Link}
          label="About"
          value='/about'
          to='/about'
        />
      </Tabs>
    </Paper>
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

export default GeneralLayout;
