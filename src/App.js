import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./index";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Schools from "./components/Schools";
import Branches from "./components/Branches";
import Semesters from "./components/Semesters";
import Sem from "./components/Sem";
import Universities from "./components/Universities";
import Book from "./components/Book";

const useStyles = makeStyles((theme) => ({
  heart: {
    color: "red",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  // const [search, setSearch] = useState("");

  // const changeSearch = (event) => setSearch(event.target.value);

  // const findBook = (e) => {
  //   e.preventDefault();
  //   console.log(`Book to find is : ${search}`);
  // };

  return (
    <>
      <Router>
        <NavBar />
        {/* <NavBar updateSearch={changeSearch} handleSearch={findBook} /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Universities} />
          <Route path="/book" exact component={Book} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/books/:univ" exact component={Schools} />
          <Route path="/books/:univ/:school" exact component={Branches} />
          <Route
            path="/books/:univ/:school/:branch/semesters"
            exact
            component={Semesters}
          />

          <Route
            path="/books/:univ/:school/:branch/semesters/:sem"
            exact
            component={Sem}
          />
        </Switch>
        <footer className={classes.footer}>
          <Typography variant="overline">
            Website made with <FavoriteIcon className={classes.heart} /> for
            learners
          </Typography>
        </footer>
      </Router>
    </>
  );
};

export default App;
