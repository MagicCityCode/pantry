import React, { Suspense } from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import TestIpts from "../feats/TestIpts";

const Routes: React.FC<RouteProps> = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/testfoodinput">
            <TestIpts />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Routes;
