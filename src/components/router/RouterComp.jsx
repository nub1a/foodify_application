import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { FavoritePage } from '../../pages/favorite_dishes/FavoritePage';
import { App } from '../../App';

export const RouterComp = () => (
  <div>
    <BrowserRouter>
      <a href="/main">Main Page</a>
      <a href="/favorites">Favorites page</a>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/main" />
          )}
        />
        <Route path="/main" component={App} />
        <Route path="/favorites" component={FavoritePage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default RouterComp;
