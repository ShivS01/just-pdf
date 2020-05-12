import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Books from "./Books";
import About from "./About";
import Contact from "./Contact";
import "./index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import logo from "./just_pdf.png";

import SearchAppBar from "./components/NavBar";

const App = () => {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => setSearch(event.target.value);

  const findBook = (e) => {
    e.preventDefault();
    console.log(`Book to find is : ${search}`);
  };

  return (
    <>
      <SearchAppBar />
      <Router>
        {/* <NavBar updateSearch={changeSearch} handleSearch={findBook} /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
