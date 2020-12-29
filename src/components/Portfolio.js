import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import{
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from "../Images/html-css-javascript-lg.jpg";
import project2 from '../Images/react-redux.jpg';
import project3 from '../Images/react.png';
import project4 from '../Images/mern-stack.jpg';

const useStyles = makeStyles({
    mainContainer: {
        background:"#233",
        height:   "100%"
    },
    cardContainer:{
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
           <Box component="div" className={classes.mainContainer}>
          <Navbar />
          <Grid container justify="center">
              {/* project -1 */}
              <Grid item xs={12} sm={8} md={6} >
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project-1"
                      height="140"
                      image={project1}>
                      </CardMedia>
                      <CardContent>
                          <Typography gutterBottom varient="h5">
                         Project 1
                          </Typography>
                          <Typography varient="body2" color="textSecondary" component="p">
                          We are creating the website for college application who can apply directly from the website for world level colleges. Using the Technologies with Firebase, HTML, CSS, Javascript and Reactjs.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary">
                           Share
                          </Button>
                          <Button size="small" color="primary">
                           Live Demo
                          </Button>
                      </CardActions>
                  </CardActionArea>
              </Card>
              </Grid>
              {/* project-2 */}
              <Grid item xs={12} sm={8} md={6} >
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project-2"
                      height="140"
                      image={project2}>
                      </CardMedia>
                      <CardContent>
                          <Typography gutterBottom varient="h5">
                         Project 2
                          </Typography>
                          <Typography varient="body2" color="textSecondary" component="p">
                          We are creating the website for college application who can apply directly from the website for world level colleges. Using the Technologies with Firebase, HTML, CSS, Javascript and Reactjs.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary">
                           Share
                          </Button>
                          <Button size="small" color="primary">
                           Live Demo
                          </Button>
                      </CardActions>
                  </CardActionArea>
              </Card>
              </Grid>
              {/* project-3 */}
              <Grid item xs={12} sm={8} md={6} >
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project-3"
                      height="140"
                      image={project3}>
                      </CardMedia>
                      <CardContent>
                          <Typography gutterBottom varient="h5">
                         Project 1
                          </Typography>
                          <Typography varient="body2" color="textSecondary" component="p">
                          We are creating the website for college application who can apply directly from the website for world level colleges. Using the Technologies with Firebase, HTML, CSS, Javascript and Reactjs.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary">
                           Share
                          </Button>
                          <Button size="small" color="primary">
                           Live Demo
                          </Button>
                      </CardActions>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6} >
              <Card className={classes.cardContainer}>
                  <CardActionArea>
                      <CardMedia 
                      component="img"
                      alt="project-4"
                      height="140"
                      image={project4}>
                      </CardMedia>
                      <CardContent>
                          <Typography gutterBottom varient="h5">
                         Project 1
                          </Typography>
                          <Typography varient="body2" color="textSecondary" component="p">
                          We are creating the website for college application who can apply directly from the website for world level colleges. Using the Technologies with Firebase, HTML, CSS, Javascript and Reactjs.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary">
                           Share
                          </Button>
                          <Button size="small" color="primary">
                           Live Demo
                          </Button>
                      </CardActions>
                      </CardActionArea>
              </Card>
              </Grid>
          </Grid>
            </Box>
   );
};

export default Portfolio;

