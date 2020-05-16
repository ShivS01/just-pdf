import React from "react";
import home from "./assets/img/homepage.png";
import { Link } from "react-router-dom";
import { Container, Paper, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: "100%",
  },
  text: {
    padding: "16px",
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

  //Remove all paper components when deploying site

  return (
    <>
      <Container className={classes.margin}>
        <Paper>
          <Grid container spacing={2} direction="row">
            <Grid
              container
              item
              xs
              spacing={2}
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs>
                <Paper>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.text}
                  >
                    Just Pdf for all your academic needs
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper>
                  <Typography
                    variant="subtitle1"
                    align="justify"
                    className={classes.text}
                  >
                    Find all your academic books in one place without any hassle
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs>
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
        </Paper>
      </Container>
    </>
  );
};

export default Home;
