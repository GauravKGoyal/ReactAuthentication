
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuthContext();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function Add({a,b}){
  return a+b;
}

export default PrivateRoute;
