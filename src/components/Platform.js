import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Drawer from './platform/Drawer.js'
import CheckAuth from '../views/platform/CheckAuth.js'
import { Grid2 } from '../styles/platform/PlatformStyles.js';

// components
import Login from '../views/platform/Login.js'
import Register from '../views/platform/Register.js'
import NgoForm1 from '../views/platform/NgoForm1.js'
import NgoForm2 from '../views/platform/NgoForm2.js'

class Platform extends Component {
  constructor(props) {
    super(props);

    this.state = {loggedIn : false}
  }

  render () {
    return (
      <Grid2>
        <CheckAuth path={`${this.props.match.url}/authenticate`} component={Drawer} />
        <Route path={`${this.props.match.url}/login`} component={Login} />
        <Route path={`${this.props.match.url}/register`} component={Register} />
        <Route path={`${this.props.match.url}/createNgo1`} component={NgoForm1} />
        <Route path={`${this.props.match.url}/createNgo2`} component={NgoForm2} />
      </Grid2>
    )
  }
}

export default Platform ;
