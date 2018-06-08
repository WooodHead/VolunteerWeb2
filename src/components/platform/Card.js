import React from 'react';
import { Card2 } from '../../styles/platform/PlatformStyles.js';

const Card = ({width, height, children, direction}) => {
  return (
    <Card2 width={width} height={height} direction={direction}>
      {children}
    </Card2>
  )
}

export default Card;
