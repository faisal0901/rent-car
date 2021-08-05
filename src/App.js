import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
import LandingPage from "pages/LandingPage";
import InputDate from "Components/Form/InputDate";
import DetailsPage from "pages/DetailsPage";
import ResultSearch from "pages/ResultSearch";

export default function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/detail/:id" exact component={DetailsPage} />
        <Route path="/example" exact component={InputDate} />
        <Route path="/search" exact component={ResultSearch} />
      </Router>
    </>
  );
}
