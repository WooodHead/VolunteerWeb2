import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { MainDiv } from '../styles/MainStyles.js'
import { Grid } from '../styles/GridStyles.js';
import Home from './Home'
import Ngos from './Ngos'
import Platform from './Platform'
import Header from './Header';
import Footer from './Footer';

const Main = ({ match }) => {
  console.log('Main');
  console.log(match);
  return (
    <Grid>
      <Header />
      <MainDiv>
            <Route path={`${match.url}/people`} component={Home} />
            <Route path={`${match.url}/ngos`} component={Ngos} />
      </MainDiv>
      <Footer />
    </Grid>

  )
}

export default Main;
