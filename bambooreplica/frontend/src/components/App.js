import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './layout/Header'
import Body from './Body'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Profile from './Profile'
import PrivateRoute from './common/PrivateRoute'
import axios from 'axios'

const theme = createMuiTheme()

class App extends Component{
    state = {
        auth: {
            token: localStorage.getItem('token'),
            isAuthenticated: false,
            isLoading: false,
            user: null
        }
    }

    loadUser = () => {
        const { auth, auth: { token } } = this.state
        this.setState({
            auth: {
                ...auth,
                isLoading: true
            }
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        if(token){
            config.headers['Authorization'] = `Token ${token}`
        }
        axios.get('/api/auth/user', config)
            .then(res => {
                this.setState({
                    auth: { 
                        ...auth,
                        isAuthenticated: true,
                        isLoading: false,
                        user: res.data
                    }
                })
            })
            .catch(err => {
                localStorage.removeItem('token')
                this.setState({
                    auth: { 
                        ...auth,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                        user: null
                    }
                })
            })
    }

    login = (username, password) => {
        const { auth } = this.state
        this.setState({
            auth: { 
                ...auth,
                isLoading: true
            }
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const body = JSON.stringify({username, password})

        axios.post('/api/auth/login', body, config)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.setState({
                    auth: { 
                        ...auth,
                        ...res.data,
                        isAuthenticated: true,
                        isLoading: false
                    }
                })
            })
            .catch(err => {
                localStorage.removeItem('token')
                this.setState({
                    auth: { 
                        ...auth,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                        user: null
                    }
                })
            })
    }

    register = (username, email, password) => {
        const { auth } = this.state
        this.setState({
            auth: {
                ...auth,
                isLoading: true
            }
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const body = JSON.stringify({username, email, password})

        axios.post('/api/auth/register', body, config)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.setState({
                    auth: { 
                        ...auth,
                        ...res.data,
                        isAuthenticated: true,
                        isLoading: false
                    }
                })
            })
            .catch(err => {
                localStorage.removeItem('token')
                this.setState({
                    auth: { 
                        ...auth,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                        user: null
                    }
                })
            })
    }

    logout = () => {
        const { auth, auth: { token } } = this.state
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        if(token){
            config.headers['Authorization'] = `Token ${token}`
        }
        axios.post('/api/auth/logout', null, config)
            .then(res => {
                localStorage.removeItem('token')
                this.setState({
                    auth: { 
                        ...auth,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                        user: null
                    }
                })
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    componentDidMount(){
        this.loadUser()
    }

    render(){
        const { auth } = this.state
        return(
            <Router>
                <>
                    <CssBaseline />
                    <NavBar auth={auth} logout={this.logout} />
                    <Switch>
                        <PrivateRoute exact path='/' component={Profile} auth={auth} />
                        <Route 
                            exact 
                            path='/login' 
                            render={props => <LoginForm {...props} login={this.login} auth={auth} /> } 
                        />
                        <Route 
                            exact 
                            path='/register' 
                            render={props => <RegisterForm {...props} register={this.register} auth={auth} /> }
                        />   
                    </Switch>
                </>
            </Router>
        )
    }
}

ReactDom.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
    document.getElementById("app")
)