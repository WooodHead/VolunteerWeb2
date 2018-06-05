import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Drawer from './platform/Drawer.js'
import Login from '../views/platform/Login.js'
import CheckAuth from '../views/platform/CheckAuth.js'
import { Grid2 } from '../styles/platform/PlatformStyles.js';

class Platform extends Component {
  constructor(props) {
    super(props);

    this.state = {loggedIn : false}
  }

  render () {
    console.log('Platform');
    return (
      <Grid2>
        <CheckAuth path={`${this.props.match.url}/authenticate`} component={Drawer} />
        <Route path={`${this.props.match.url}/login`} component={Login} />
      </Grid2>
    )
  }
}

export default Platform ;
