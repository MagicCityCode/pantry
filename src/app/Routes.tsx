import React, { Suspense } from "react";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";
import Home from "../common/Home";
import TestIpts from "../feats/TestIpts";
import ImageReader from "../feats/ImageReader";
import PrivateRoute from "../common/PrivateRoute";
import Register from "../common/Register";
import Login from "../common/Login";

// Remember to protect new fuctionality with PrivateRoute
const Routes: React.FC<RouteProps> = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/testfoodinput">
            <TestIpts />
          </PrivateRoute>
          <PrivateRoute exact path="/imageinput">
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
};

export default Routes;
