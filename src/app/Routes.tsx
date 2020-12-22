import React, { Suspense } from 'react';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import Home from '../common/Home';
import TestInputs from '../feats/IngredientInput';
import ImageReader from '../feats/ImageReader';
import PrivateRoute from '../common/PrivateRoute';
import Register from '../common/Register';
import Login from '../common/Login';
import RecipeSearch from '../feats/RecipeSearch';

const Routes: React.FC<RouteProps> = () => (
  <div>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/ingredient-input">
          <TestInputs />
        </PrivateRoute>
        <PrivateRoute exact path="/search-recipes">
          <RecipeSearch />
        </PrivateRoute>
        <PrivateRoute exact path="/image-input">
          <ImageReader />
        </PrivateRoute>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default Routes;
