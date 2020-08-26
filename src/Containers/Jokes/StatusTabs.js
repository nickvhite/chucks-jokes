import React from 'react';
import * as PropTypes from 'prop-types';

import { Paper, Tabs, Tab } from "@material-ui/core";

import { statuses } from "../../reducers/categories";

const StatusTabs = ({ currentStatus, onChange }) => (
  <Paper>
    <Tabs value={currentStatus} onChange={onChange}>
      {statuses.map(status => (
        <Tab
          key={status}
          value={status}
          label={status}
        />
      ))}
    </Tabs>
  </Paper>
);

StatusTabs.propTypes = {
  currentStatus: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default StatusTabs;
