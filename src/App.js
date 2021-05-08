import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/style.css";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

export default function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/example" exact component={Example} />
      </Router>
    </>
  );
}
