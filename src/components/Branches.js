import React from "react";
import {
  Paper,
  Grid,
  Typography,
  ButtonBase,
  withWidth,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(5),
    padding: theme.spacing(5),
    height: theme.spacing(10),
    width: theme.spacing(10),
    backgroundColor: "rgb(24, 26, 27)",
    color: "rgba(232, 230, 227, 0.87)",
  },
  margin: {
    marginTop: theme.spacing(10),
  },
}));

const STME = [
  { name: "MBATech", duration: 5 },
  { name: "BTech", duration: 4 },
];

const Branches = ({ width }) => {
  const classes = useStyles();

  let size = 0;
  if (/xs/.test(width)) size = 10;
  else if (/sm/.test(width)) size = 5;
  else if (/md/.test(width)) size = 3;
  else if (/lg|xl/.test(width)) size = 2;

  return (
    <Grid
      container
      item
      xs={12}
      spacing={4}
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
      {STME.map((branch) => (
        <Grid container item xs={size} key={branch.name} justify="center">
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

export default withWidth()(Branches);
