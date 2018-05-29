import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { MainDiv } from '../styles/MainStyles.js'
import Home from './Home'
import Ngos from './Ngos'

const Main = () => {
  return (
    <MainDiv>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/ngos' component={Ngos}/>
        {/* <Route exact path='/platform' component={Home}/>
        <Route exact path='/about' component={Home}/> */}
      </Switch>
    </MainDiv>
  )
}

export default Main;
