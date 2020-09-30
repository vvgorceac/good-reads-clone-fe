import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ comp: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      //   console.log("private Route" + localStorage.getItem("user"));
      if (localStorage.getItem("user")) {
        return <Component {...props} />;
      } else {
        return <Redirect to={{ pathname: "/login" }} />;
      }
    }}
  />
);
