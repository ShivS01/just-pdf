import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Grid,
  ButtonBase,
  Button,
  Hidden,
  Drawer,
  ListItemText,
  ListItem,
  List,
} from "@material-ui/core";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Home, Book, AccountBox, Info } from "@material-ui/icons";
import logo from "../just_pdf.png";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 80,
    maxHeight: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: {
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
    [theme.breakpoints.up("xs")]: {
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
    [theme.breakpoints.up("xs")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  buttonexpand: {
    height: "100%",
  },
  // list: {
  //   width: 250,
  // },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 250,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen(!open);

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Grid
            container
            spacing={1}
            xs={9}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              <ButtonBase>
                <Link to="/">
                  <img src={logo} alt="logo" className={classes.logo} />
                </Link>
              </ButtonBase>
            </Grid>
            <Hidden smDown>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  component={Link}
                  to="/"
                  startIcon={<Home />}
                >
                  Home
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  component={Link}
                  to="/books"
                  startIcon={<Book />}
                >
                  Books
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  component={Link}
                  to="/about"
                  startIcon={<Info />}
                >
                  About
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  startIcon={<AccountBox />}
                >
                  Contact
                </Button>
              </Grid>
            </Hidden>
          </Grid>
          <Grid
            container
            xs={3}
            direction="coloumn"
            justify="flex-end"
            alignItems="center"
          >
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
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* <IconButton
              onClick={toggleDrawer}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton> */}
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};
// NavBar.propTypes = {
//   width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
// };
export default withWidth()(NavBar);
