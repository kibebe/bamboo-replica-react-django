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
  },
  textField: {
    width: '70%',
  },
  buttonContainer: {
    marginBottom: theme.spacing(4)
  },
  buttonLogin: {
    marginLeft: theme.spacing(4)
  }
});

class LoginForm extends Component{
    state = {
        email: '',
        password: '',
        showPassword: false
    }

    handleClickShowPassword = ({showPassword}) => {
        this.setState({
            showPassword: !showPassword
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

    render(){
        const { classes } = this.props
        const { showPassword, password, email } = this.state
        return(
            <div className={classes.container}>
                <div className={classes.formHeader}>
                    Welcome Back, Login to Continue
                </div>
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
                <FormControl className={clsx(classes.margin, classes.textField, classes.passwordField)}>
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
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.buttonLogin}>
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(LoginForm)