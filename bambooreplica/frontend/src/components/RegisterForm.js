import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Body from './Body'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  container: {
    flexGrow: 1,
    border: "1px solid #828282",
    borderBottom: "4px solid",
    borderRadius: "5px 5px 0 0",
    width: '31%',
    margin: 'auto',
  },
  formHeader: {
    fontFamily: "BhrHeaderFont,Trebuchet MS",
    fontSize: "20px",
    backgroundColor: "#828282",
    textAlign: "center",
    color: "#fff",
    padding: "22px 0 20px",
    borderRadius: "4px 4px 0 0",
    marginBottom: "20px"
  },
  margin: {
    margin: theme.spacing(1),
    width: '70%',
    marginBottom: theme.spacing(4),
    marginLeft: '15%',
  },
  textField: {
    width: '70%',
  },
  buttonContainer: {
    marginBottom: theme.spacing(4)
  },
  buttonLogin: {
    marginLeft: '15%',
  }
});

class LoginForm extends Component{
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        showPassword: false
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (username, email, password, password2) => {
      if(password !== password2){
        alert("Password dont match!")
        return
      }
      this.props.register(username, email, password)
    }

    render(){
        const { classes, auth: {isAuthenticated} } = this.props
        const { showPassword, password, password2, email, username } = this.state

        if(isAuthenticated){
          return <Redirect to='/' />
        }

        return(
          <>
            <Body />
            <div className={classes.container}>
                <div className={classes.formHeader}>
                    Welcome Back, Register to Continue
                </div>
                <TextField
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    className={classes.margin}
                    label="Username"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                />
                <TextField
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    className={classes.margin}
                    label="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                />
                <FormControl className={clsx(classes.margin, classes.textField)}>
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    name="password"
                    onChange={this.handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                    }  
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                  <InputLabel htmlFor="standard-adornment-password2">Confirm Password</InputLabel>
                  <Input
                    id="standard-adornment-password2"
                    type={showPassword ? 'text' : 'password'}
                    value={password2}
                    name="password2"
                    onChange={this.handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                    }  
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className={classes.buttonContainer}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      className={classes.buttonLogin}
                      onClick={() => this.handleSubmit(username, email, password, password2)}
                    >
                      Register
                    </Button>
                </div>
            </div>
          </>
        )
    }
}

export default withStyles(styles)(LoginForm)