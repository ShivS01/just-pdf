import React from "react";
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

const STME = [
  { name: "MBATech", duration: 5 },
  { name: "BTech", duration: 4 },
];

const Branches = () => {
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
      {STME.map((branch) => (
        <Grid item xs={2} key={branch.name}>
          <ButtonBase
            component={Link}
            to={`/books/NMIMS/${`STME`}/${branch.name}/semesters`}
          >
            <Paper className={classes.paper}>
              <Typography align="center">{branch.name}</Typography>
              <Typography align="center">{branch.duration} years</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
};

export default Branches;
