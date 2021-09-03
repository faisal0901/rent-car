import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
import { setAuthorizationHeader } from "Config/axios";
import LandingPage from "pages/LandingPage";
import MemberRoute from "Components/Routes/MemberRoute";
import GuestRoute from "Components/Routes/GuestRoute";
import DetailsPage from "pages/DetailsPage";
import ResultSearch from "pages/ResultSearch";
import Payment from "pages/Payment";
import Register from "pages/Register";
import Login from "pages/Login";
import MyProfile from "pages/MyProfile";
import users from "Constant/api/users";
import { useDispatch } from "react-redux";
import { populateProfile } from "Store/actions/users";
import Invoice from "Parts/Invoice";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let session = "";
    if (localStorage.getItem("token")) {
      session = JSON.parse(localStorage.getItem("token"));
      setAuthorizationHeader(session.token);
      users.detail().then((detail) => {
        dispatch(populateProfile(detail.data[0]));
      });
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/detail/:id" exact component={DetailsPage} />
          <Route path="/search" exact component={ResultSearch} />
          <Route path="/example" exact component={Invoice} />
          <MemberRoute path="/checkout/:id" exact component={Payment} />
          <GuestRoute path="/register" exact component={Register} />
          <GuestRoute path="/login" exact component={Login} />
          <MemberRoute
            path="/myprofile"
            exact
            component={MyProfile}
          ></MemberRoute>
        </Switch>
      </Router>
    </>
  );
}
