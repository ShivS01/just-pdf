import React from "react";
import home from "./assets/img/homepage.png";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      <Container className={classes.margin}>
        <Grid container spacing={2} direction="row">
          <Grid
            container
            item
            xs
            spacing={1}
            direction="column"
            justify="flex-start"
          >
            <Grid item xs>
              <Typography variant="h3" className={classes.text}>
                Just Pdf for all your academic needs
              </Typography>
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
          <Grid container item xs item alignItems="center" direction="column">
            <img src={home} width="600" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
