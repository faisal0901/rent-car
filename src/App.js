import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
import LandingPage from "pages/LandingPage";
import MemberRoute from "Components/Routes/MemberRoute";
import GuestRoute from "Components/Routes/GuestRoute";
import DetailsPage from "pages/DetailsPage";
import ResultSearch from "pages/ResultSearch";
import Payment from "pages/Payment";
import Register from "pages/Register";
import Login from "pages/Login";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/detail/:id" exact component={DetailsPage} />
          <Route path="/search" exact component={ResultSearch} />
          <MemberRoute path="/checkout/:id" exact component={Payment} />
          <GuestRoute path="/register" exact component={Register} />
          <GuestRoute path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}
