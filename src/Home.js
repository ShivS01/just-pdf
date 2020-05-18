import React from "react";
import home from "./assets/img/homepage.png";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: "100%",
  },
  text: {
    padding: "0px",
  },
  minheight: {
    minHeight: "100%",
  },
  margin: {
    marginTop: "80px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.margin}
        xs={12}
      >
        <Grid
          container
          item
          xs={5}
          // spacing={1}
          direction="column"
          justify="center"
        >
          <Grid item xs>
            <ThemeProvider theme={theme}>
              <Typography variant="h3" className={classes.text}>
                Just Pdf for all your academic needs
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1" className={classes.text}>
              Find all your academic books in one place without any hassle
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/books"
            >
              Browse
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={5} item alignItems="center" direction="column">
          <img src={home} width="100%" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
