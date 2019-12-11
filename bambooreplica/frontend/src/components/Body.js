import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    width: '64%',
    margin: 'auto',
  },
  subtitle1: {
    fontFamily: "BhrHeaderFont,Trebuchet MS",
    fontSize: "20px",
    color: "#777",
    lineHeight: "27px",
    marginBottom: "1.5em"
  },
  bodyHeader: {
    fontFamily: "BhrHeaderFont,Trebuchet MS",
    fontSize: "43px",
    lineHeight: "35px",
  }
}));

const Body = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Typography
                className={classes.bodyHeader} 
                variant="h3" 
                color="primary" 
                align="center"
                gutterBottom
            >
                Welcome
            </Typography>
            <Typography
                className={classes.subtitle1} 
                variant="subtitle1"
                align="center"
                gutterBottom
            >
                We're excited to have you join the team here at The Kibebe's. 
                We want to make your transition a smooth one. So, let's get you up and running.
            </Typography>
        </div>
    )
}

export default Body