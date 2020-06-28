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
    padding: theme.spacing(4),
    height: theme.spacing(15),
    width: theme.spacing(15),
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

const Schools = ({ width }) => {
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
      {NMIMS.map((school) => (
        <Grid container item xs={size} key={school.id} justify="center">
          <ButtonBase component={Link} to={`/books/NMIMS/${school.abbv}`}>
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

export default withWidth()(Schools);
