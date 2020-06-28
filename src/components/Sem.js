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

const books = [
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "Maths-1" },
  { name: "Workshop" },
];
const Sem = ({ width }) => {
  const classes = useStyles();
  //   console.log(props);
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
      {books.map((book) => (
        <Grid container item xs={size} key={book.name} justify="center">
          <ButtonBase
            component={Link}
            to={`/books/NMIMS/STME/MBATech/semesters/1`}
          >
            <Paper className={classes.paper}>
              <Typography align="center">{book.name}</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
};

export default withWidth()(Sem);
