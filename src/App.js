import React from 'react';

import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import HomeContainer from './containers/home';
import Page2Container from './containers/page2';
import Page3Container from './containers/page3';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route exact path="/page2">
            <Page2Container />
          </Route>
          <Route exact path="/page3">
            <Page3Container />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
