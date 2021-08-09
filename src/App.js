import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
import LandingPage from "pages/LandingPage";

import DetailsPage from "pages/DetailsPage";
import ResultSearch from "pages/ResultSearch";
import Payment from "pages/Payment";

export default function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/detail/:id" exact component={DetailsPage} />
        <Route path="/search" exact component={ResultSearch} />
        <Route path="/checkout/:id" exact component={Payment} />
      </Router>
    </>
  );
}
