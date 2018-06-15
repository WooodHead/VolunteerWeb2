import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Grid2 } from '../styles/platform/PlatformStyles.js';
import {checkAuth} from '../client/util.js'

// components
import Drawer from './platform/Drawer.js'
import Login from '../views/platform/Login.js'
import Register from '../views/platform/Register.js'
import CreateNgo1 from '../views/platform/CreateNgo1.js'
import CreateNgo2 from '../views/platform/CreateNgo2.js'


const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      checkAuth()
        ? <Component {...props} />
        : <Redirect to='/platform/login' />
    )} />
  )
}

class Platform extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Grid2>
      <Switch>
        <AuthRoute path={`${this.props.match.url}/authenticate`} component={Drawer} />
        <Route path={`${this.props.match.url}/login`} component={Login} />
        <Route path={`${this.props.match.url}/register`} component={Register} />
        <AuthRoute path={`${this.props.match.url}/createNgo1`} component={CreateNgo1} />
        <AuthRoute path={`${this.props.match.url}/createNgo2`} component={CreateNgo2} />
      </Switch>
      </Grid2>
    )
  }
}

export default Platform ;
