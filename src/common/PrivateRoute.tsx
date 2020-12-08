import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import STORAGE_KEY from '../utils/api-service';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ exact, path, children }) => {
  const TOKEN = localStorage.getItem(STORAGE_KEY);
  if (TOKEN) {
    return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
    );
  }
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { msg: 'You must be logged in to see this page' },
      }}
    />
  );
};

interface PrivateRouteProps {
  exact: boolean;
  path: string;
}

export default PrivateRoute;
