import React, { Suspense } from "react";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";
import HomeTemplate from "../common/HomePlaceholder";
import TestIpts from "../feats/TestIpts";

const Routes: React.FC<RouteProps> = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/">
            <HomeTemplate />
          </Route>
          <Route exact path="/testfoodinput">
            <TestIpts />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Routes;
