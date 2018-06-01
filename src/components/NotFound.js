import React from 'react';
import { flexDiv, MidHomeTitle } from '../styles/MainStyles.js'

const NotFound = ({ location }) => {
  return (
    <flexDiv>
      <MidHomeTitle color='#2F80ED'>
        Whoops, we couldn't find '{location.pathname}'
      </MidHomeTitle>
    </flexDiv>
  )

}

export default NotFound;
