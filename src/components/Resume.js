import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: "#233"
    },
    timeLine:{
        position: "relative",
        padding: "1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0,
            },
            "&:after": {
                content:"''",
                display:"table",
                clear: "both"
            },
          [theme.breakpoints.up("md")]: {
              padding:"2rem",
              "&:before": {
                  left:"calc(50% - 1px)",
                  right: "auto"
              }
          }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content:"''",
            position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },

           [theme.breakpoints.up("md")]:{
               width: "44%",
               margin: "1rem",
               "&:nth-of-type(2n)":{
                   float: "right",
                   margin: "1rem",
                   borderColor: "1rem",
                   borderColor:"tan"
               },
               "&:nth-of-type(2n):before":{
                   right:"auto",
                   left:"-0.625rem",
                   borderColor:"transparent transparent tomato tomato"
               }
           }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "7.375rem",
        margin: "0 2rem 0 auto",
        fontSize: "1.3rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 0.8rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{  
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before":{
                display: "none"
            }
        }
        },
        heading:{
            color: "tomato",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading:{
          color: "white",
          padding: "0",
          textTransform: "uppercase"
        }
}));
const Resume = () =>
{
    const classes = useStyles();
    return(
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
            <Typography varient="h4" align="center" className={classes.heading}>
                working experience
            </Typography>
            <Box component="div" className={classes.timeLine}> 
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography varient="h5" align="center" className={classes.subHeading}>
                        ReactJS || Redux
                    </Typography>
                    <Typography varient="body1" align="center" style={{color:"tomato"}}>
                        Kitecareer
                    </Typography>
                    <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                    •	Strong user interface and user experience skill set, has a passion for developing clean user interfaces and implements the best user experience standards.
•	Having Real Time experience Using Firebase with Reactjs for CRUD operation in Dashborad.
•	Having Knowledge about Reactjs Routes, Components, JSX, Hooks, Rendering elements.
•	Experience debugging and resolving issues with new and existing services.
                    </Typography>
                </Box>
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography varient="h5" align="center" className={classes.subHeading}>
                    HTML & CSS & JAVASCRIPT
                    </Typography>
                    <Typography varient="body1" align="center" style={{color:"tomato"}}>
                        Kitecareer
                    </Typography>
                    <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                    •	Expertise in Website development using HTML, CSS,  Javascript, Jquery.
•	Programming experience for   HTML, CSS3, Bootstrap,  Javascript and Material UI. 
•	Having Knowledge about javascript advanced feature ES5 & ES6.
•	Determine root cause for the most complex software issues develop practical efficient permanent technical solutions. 
•	Strong user interface and user experience skill set, has a passion for developing clean user interfaces and implements the best user experience standards.

                    </Typography>
                </Box>
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2016</Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography varient="h5" align="center" className={classes.subHeading}>
                        Data Analyst
                    </Typography>
                    <Typography varient="body1" align="center" style={{color:"tomato"}}>
                        Wissend Consultancy Pvt Ltd
                    </Typography>
                    <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                    •	Map taxonomy/attributes values from third party content providers to website’s attributes/value to assist online retailers to align content from data providers to their taxonomy structure.
•	Trimming unnecessary words to make the product feature clear and ensuring the grammar, spelling and punctuations are correct to use the Excel Basic Formulas.

                    </Typography>
                </Box>

            </Box>
        </Box>
        </>
    );
};
export default Resume;