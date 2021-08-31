import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
function MemberRoute({ component: Component, match, location, path, ...rest }) {
  const isLogin = localStorage.getItem("token");
  localStorage.removeItem("redirect");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <Component {...props} />
        ) : path === "/checkout/:id" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`}></Redirect>
        );
      }}
    ></Route>
  );
}
export default withRouter(MemberRoute);
