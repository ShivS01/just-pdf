import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Universities from "./components/Universities";
import Schools from "./components/Schools";
import Branches from "./components/Branches";
import Semesters from "./components/Semesters";
import Sem from "./components/Sem";

const Books = () => {
  return (
    <Router>
      <Switch>
        <Route path="/books/" exact component={Universities} />
        <Route path="/books/:univ" exact component={Schools} />
        <Route path="/books/:univ/:school" exact component={Branches} />
        <Route
          path="/books/:univ/:school/:branch"
          exact
          component={Semesters}
        />
        <Route path="/books/:univ/:school/:branch/:sem" exact component={Sem} />
      </Switch>
    </Router>
  );
};

export default Books;
