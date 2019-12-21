import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
  },
  loginButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function NavBar({auth: { isAuthenticated }, logout}) {
  const classes = useStyles();
  const authLinks = (
    <Button 
      color="inherit" 
      className={classes.loginButton}
      onClick={() => logout()}
    >
      Logout
    </Button>
  )
  const guestLinks = (
    <>
      <Button 
        color="inherit" 
        className={classes.loginButton}
        component={React.forwardRef((props, ref) => <Link to="/login" {...props} ref={ref} />)}
      >
        Login
      </Button>
      <Button 
        color="inherit" 
        variant="outlined"
        component={React.forwardRef((props, ref) => <Link to="/register" {...props} ref={ref} />)}
      >
        Register
      </Button>
    </>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bamboo Replica
          </Typography>
          {isAuthenticated ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
}