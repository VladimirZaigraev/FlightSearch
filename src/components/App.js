import React from 'react';
import Header from './Header'
import Main from './Main'
import {Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
