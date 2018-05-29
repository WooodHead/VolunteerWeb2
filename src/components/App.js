import React from 'react';
import { Grid } from '../styles/GridStyles.js';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';


const App = () => {
  return (
    <Grid>
      <Header />
      <Main />
      <Footer />
    </Grid>
  )
}

export default App;
