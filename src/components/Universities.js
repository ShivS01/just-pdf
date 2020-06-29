import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, ButtonBase, withWidth } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import service from "../services/Data";

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
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    service.getAll().then((fetchedData) => {
      setData(fetchedData);
      // console.log(fetchedData);
    });
  }, []);

  if (data !== undefined || data !== null) console.log(data);

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
      item
      alignItems="center"
      justify="center"
      className={classes.content}
      direction="column"
      spacing={4}
      xs={12}
    >
      <Grid item xs>
        <Typography variant="h4" align="center">
          Select your University
        </Typography>
      </Grid>
      {/* <Typography>{data.map((dat) => dat.university)}</Typography> */}
      <Grid
        container
        item
        {...gridProps}
        justify="center"
        alignItems="center"
        xs={12}
        spacing={4}
      >
        {data.map((dat) => (
          <Grid key={dat.id} container item {...gridSize} justify="center">
            <ButtonBase component={Link} to={`/books/${dat.university}`}>
              <img
                src={dat.logo}
                className={classes.img}
                alt={dat.university}
              />
            </ButtonBase>
          </Grid>
        ))}
        {/* <Grid container item {...gridSize} justify="center">
          <ButtonBase component={Link} to={"/books/NMIMS"}>
            <img src={nmims} className={classes.img} alt="NMIMS" />
          </ButtonBase>
           <Typography align="center">NMIMS</Typography>
        </Grid>
        <Grid container item {...gridSize} justify="center">
          <ButtonBase>
            <img src={mu} className={classes.img} alt="MU" />
          </ButtonBase>
           <Typography align="center">MU</Typography> 
        </Grid>  */}
      </Grid>
    </Grid>
  );
};

export default withWidth()(Universities);
