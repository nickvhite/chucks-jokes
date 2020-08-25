import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GeneralLayout from './Components/GeneralLayout';

import Jokes from './Containers/Jokes';
import About from './Containers/About';

function App() {
  return (
    <Switch>
      <GeneralLayout>
        <Route path="/jokes" component={Jokes} />
        <Route path="/about" component={About} />
        <Route><Redirect to="/jokes" /></Route>
      </GeneralLayout>
    </Switch>
  );
}

export default App;
