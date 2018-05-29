import React from 'react';
import { Grid } from '../styles/GridStyles.js';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';


import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Ngos from './Ngos'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/ngos' component={Ngos}/>
    </Switch>
    // <Grid>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </Grid>
  )
}

export default App;
