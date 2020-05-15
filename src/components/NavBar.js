import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TypoGraphy from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Home, Book, AccountBox } from "@material-ui/icons";
import logo from "../just_pdf.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar styles={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <List component="nav">
            <ListItem component="div" component={Link} to="/">
              <Link to="/">
                <ListItemText inset>
                  <TypoGraphy color="inherit" variant="title">
                    <Home /> Home
                  </TypoGraphy>
                </ListItemText>
              </Link>

              <Link to="/books">
                <ListItemText inset>
                  <TypoGraphy color="inherit" variant="title">
                    <Book /> Books
                  </TypoGraphy>
                </ListItemText>
              </Link>

              <Link to="/contact">
                <ListItemText inset>
                  <TypoGraphy color="inherit" variant="title">
                    <AccountBox /> Contact
                  </TypoGraphy>
                </ListItemText>
              </Link>
            </ListItem>
          </List>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
