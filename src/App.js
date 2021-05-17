import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";

export default function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/details/:id" exact component={DetailsPage} />
        <Route path="/example" exact component={Example} />
      </Router>
    </>
  );
}
