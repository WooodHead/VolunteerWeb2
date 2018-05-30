import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainDiv } from '../styles/MainStyles.js'
import Home from './Home'
import Ngos from './Ngos'

const Main = () => {
  return (
    <MainDiv>
      <Switch>
        <Route exact path="/" render={() => (
        <Redirect to="/people"/>
        )}/>
        <Route exact path='/people' component={Home}/>
        <Route exact path='/ngos' component={Ngos}/>
        {/* <Route exact path='/platform' component={Home}/>
        <Route exact path='/about' component={Home}/> */}
      </Switch>
    </MainDiv>
  )
}

export default Main;
