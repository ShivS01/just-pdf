import React from "react";
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(5),
    padding: theme.spacing(4),
    height: theme.spacing(10),
    width: theme.spacing(20),
  },
  margin: {
    marginTop: theme.spacing(10),
  },
}));

const NMIMS = [
  {
    id: 1,
    name: "School of Technology Management and Enginnering",
    abbv: "STME",
  },
  {
    id: 2,
    name: "School of Business Management",
    abbv: "SBM",
  },
  {
    id: 3,
    name: "School of Law",
    abbv: "SoL",
  },
  {
    id: 4,
    name: "School of Commerce",
    abbv: "SoC",
  },
  {
    id: 5,
    name: "School of Science",
    abbv: "SoS",
  },
];
const Schools = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
      {NMIMS.map((school) => (
        <Grid item xs={2}>
          <ButtonBase>
            <Paper className={classes.paper}>
              <Typography align="center">{school.name}</Typography>
              <Typography align="center">({school.abbv})</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
};

export default Schools;
