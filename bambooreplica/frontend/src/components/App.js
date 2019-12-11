import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDom from 'react-dom'
import NavBar from './layout/Header'
import Body from './Body'
import LoginForm from './LoginForm'

const theme = createMuiTheme()

class App extends Component{
    render(){
        return(
            <>
                <CssBaseline />
                <NavBar />
                <Body />
                <LoginForm />
            </>
        )
    }
}

ReactDom.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
    document.getElementById("app")
)