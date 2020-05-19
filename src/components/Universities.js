import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import nmims from "../assets/img/nmims_logo.png";
import mu from "../assets/img/mumbaiuniversity.png";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
  },
  img: {
    borderRadius: theme.spacing(2),
    height: "100px",
  },
}));

const Universities = ({ name }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      // xs={10}
      className={classes.content}
      direction="column"
      spacing={4}
      xs={12}
    >
      <Grid item xs>
        <Typography variant="h2" align="center">
          Select your University
        </Typography>
      </Grid>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        xs={10}
        spacing={2}
      >
        <Grid container item xs={6} justify="center" alignContent="center">
          <ButtonBase component={Link} to="/books/NMIMS">
            <img src={nmims} className={classes.img} />
          </ButtonBase>
          {/* <Typography align="center">NMIMS</Typography> */}
        </Grid>
        <Grid container item xs={6} justify="center" alignContent="center">
          <ButtonBase>
            <img src={mu} className={classes.img} />
          </ButtonBase>
          {/* <Typography align="center">MU</Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Universities;
