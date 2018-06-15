import React from 'react';
import Card from '../../components/platform/Card.js';
import FormHeader from '../../components/platform/FormHeader.js';
import NgoForm1 from '../../components/platform/NgoForm1.js'
import { FlexDiv2, FlexDiv3 } from '../../styles/platform/PlatformStyles.js'

// Declare Search Component
const CreateNgo1 = () => {

  return (
      <Card height='38rem' width='53rem' direction2='row'>

        <FlexDiv2 flexvalue={7} direction='column'>
          <FormHeader
            brand="Volunteer"
            title = "Create your Nonprofit 1 / 2"
            subtitle="to continue to Platform"
            flexvalue={2}
          />
          <NgoForm1 />
        </FlexDiv2>

        <FlexDiv2 flexvalue={6} direction='column' justify='space-between' >
          <FlexDiv3>
            asdasdasd
          </FlexDiv3>
        </FlexDiv2>
      </Card>
  )
}

export default CreateNgo1;
