import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
function GuestRoute({ location, component: Component, ...rest }) {
  const isLogin = localStorage.getItem("token");
  const params = new URLSearchParams(location.search);
  const path = params.get("path");
  if (!isLogin && path) {
    localStorage.setItem("redirect", path);
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? <Redirect to={"/"} /> : <Component {...props} />;
      }}
    ></Route>
  );
}
export default withRouter(GuestRoute);
