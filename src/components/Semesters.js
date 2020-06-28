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
  },
  margin: {
    marginTop: theme.spacing(10),
  },
}));

const semesters = [
  {
    sem: 1,
    books: [
      { name: "Physics" },
      { name: "Chemistry" },
      { name: "Maths-1" },
      { name: "Workshop" },
    ],
  },
  {
    sem: 2,
    books: [
      { name: "Maths-2" },
      { name: "COA" },
      { name: "Programming in C" },
      { name: "Economics and Management" },
    ],
  },
  { sem: 3, books: [{ name: "NA" }] },
  { sem: 4, books: [{ name: "NA" }] },
  { sem: 5, books: [{ name: "NA" }] },
  { sem: 6, books: [{ name: "NA" }] },
  { sem: 7, books: [{ name: "NA" }] },
  { sem: 8, books: [{ name: "NA" }] },
  { sem: 9, books: [{ name: "NA" }] },
  { sem: 10, books: [{ name: "NA" }] },
];

const Semesters = ({ width }) => {
  const classes = useStyles();
  //   const newTo = {
  //     pathname: `/books/NMIMS/STME/semesters/${sem.sem}`,
  //     semester: sem.sem,
  //     books: books,
  //   };
  let size = 0;
  if (/xs/.test(width)) size = 10;
  else if (/sm/.test(width)) size = 5;
  else if (/md|lg|xl/.test(width)) size = 3;

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
      {semesters.map((sem) => (
        <Grid container item xs={size} key={sem.sem} justify="center">
          <ButtonBase
            component={Link}
            to={`/books/NMIMS/STME/MBATech/semesters/${sem.sem}`}
          >
            <Paper className={classes.paper}>
              <Typography align="center">Semester {sem.sem}</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
};

export default withWidth()(Semesters);
