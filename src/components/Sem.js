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

const books = [
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "Maths-1" },
  { name: "Workshop" },
];
const Sem = () => {
  const classes = useStyles();
  //   console.log(props);
  return (
    <Grid
      container
      spacing={4}
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.margin}
    >
      {books.map((book) => (
        <Grid item xs={2} key={book.name}>
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

export default Sem;
