import React from 'react';
import {
  FlexDiv2, CardTitle, CardSubtitle, CardActionDescriptor
} from '../../styles/platform/PlatformStyles.js';

// Declare Search Component
const FormHeader = ({brand, title, subtitle, direction, flexvalue}) => {
  return (
    <FlexDiv2 direction='column' flexvalue={flexvalue}>
      <h2 className={CardTitle}>
        {brand}
      </h2>
      <h3 className={CardSubtitle}>
        {title}
      </h3>
      <h4 className={CardActionDescriptor}>
        {subtitle}
      </h4>
    </FlexDiv2>
  )
}

export default FormHeader;
