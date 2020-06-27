import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import imagee from "../assets/img/atomic.jpg";
import amazon from "../assets/img/amazon.svg";
import flipkart from "../assets/img/flipkart.svg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(4),
  },
  media: {
    width: 140,
    height: 200,
  },
  svg: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
  align: { display: "flex", justifyContent: "center", flexDirection: "column" },
}));

//Sample data
// const book = [
//   {
//     id: 1,
//     name: "Atomic Habits",
//     author: "James Clear",
//     pages: "300",
//     edition: "3",
//     img: "xyz.png",
//     size: "30MB",
//     download: "http://download.org",
//     flipkart: "http://flipkart.org",
//     amazon: "http://amazon.org",
//   },
// ];

const Book = () => {
  const classes = useStyles();
  return (
    <>
      <Typography align="center" style={{ margin: "20px" }}>
        Test Branch for testing book widgets/cards
      </Typography>
      <Card className={classes.root} elevation={10}>
        <CardHeader title="Atomic Habits" subheader="James Clear" />
        <CardActionArea className={classes.align}>
          <CardMedia
            className={classes.media}
            image={imagee}
            title="Book Cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              THE PHENOMENAL INTERNATIONAL BESTSELLER – 1 MILLION COPIES SOLD
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              gutterBottom
            >
              Transform your life with tiny changes in behaviour – starting
              now.People think that when you want to change your life, you need
              to think big. But world-renowned habits expert James Clear has
              discovered another way.
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Size : 30MB
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Pages : 300
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="download">
            <GetAppIcon />
          </IconButton>
          <IconButton aria-label="amazon">
            <img src={amazon} className={classes.icon} alt="amazon" />
          </IconButton>
          <IconButton aria-label="flipkart">
            <img src={flipkart} className={classes.icon} alt="flipkart" />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Book;
