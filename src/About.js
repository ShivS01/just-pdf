import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import about from "./assets/img/about_logo.png";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
  },
  text: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      // justify="flex-end"
      direction="column"
      alignItems="center"
      alignContent="center"
      className={classes.content}
      // wrap="nowrap"
      spacing={2}
      xs={12}
      // zeroMinWidth
    >
      <Grid item xs={4}>
        <img src={about} alt="about-logo" />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h2" align="center" className={classes.text}>
          We're on a mission to organize resources to make the life of a student
          a bit easy.
        </Typography>
      </Grid>
      <Grid container xs={10}>
        <Paper elevation={5} className={classes.text}>
          <Typography variant="h4" align="center">
            Our platform makes the access of free PDFs of academic books easier
            by validating each source on the internet and bringing you the
            latest and most genuine PDFs to help you boost up your academic
            journey.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
