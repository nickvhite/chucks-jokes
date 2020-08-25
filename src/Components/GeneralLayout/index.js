/* eslint-disable no-restricted-globals */
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

const GeneralLayout = ({ children, location, ...other }) => (
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
    {children}
  </Fragment>
);

export default GeneralLayout;
