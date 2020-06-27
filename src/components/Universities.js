import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, ButtonBase, withWidth } from "@material-ui/core";
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
    [theme.breakpoints.up("xs")]: {
      height: theme.spacing(12),
    },
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(11),
    },
  },
}));

const Universities = ({ name, width }) => {
  const classes = useStyles();
  // This is equivalent to theme.breakpoints.down("sm")
  const isSmallScreen = /xs/.test(width);
  const gridProps = {
    direction: isSmallScreen ? "column" : "row",
  };
  const gridSize = {
    xs: isSmallScreen ? 12 : 6,
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.content}
      direction="column"
      spacing={4}
    >
      <Grid item xs>
        <Typography variant="h4" align="center">
          Select your University
        </Typography>
      </Grid>
      <Grid
        container
        item
        {...gridProps}
        justify="center"
        alignItems="center"
        xs={12}
        spacing={4}
      >
        <Grid container item {...gridSize} justify="center">
          <ButtonBase component={Link} to={"/books/NMIMS"}>
            <img src={nmims} className={classes.img} alt="NMIMS" />
          </ButtonBase>
          {/* <Typography align="center">NMIMS</Typography> */}
        </Grid>
        <Grid container item {...gridSize} justify="center">
          <ButtonBase>
            <img src={mu} className={classes.img} alt="MU" />
          </ButtonBase>
          {/* <Typography align="center">MU</Typography> */}
        </Grid>
        <Grid container item {...gridSize} justify="center">
          <ButtonBase>
            <img src={mu} className={classes.img} alt="MU" />
          </ButtonBase>
          {/* <Typography align="center">MU</Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withWidth()(Universities);
