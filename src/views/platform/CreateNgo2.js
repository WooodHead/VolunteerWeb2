import React from 'react';
import Card from '../../components/platform/Card.js';
import FormHeader from '../../components/platform/FormHeader.js';
import NgoForm2 from '../../components/platform/NgoForm2.js'
import { FlexDiv2, FlexDiv3 } from '../../styles/platform/PlatformStyles.js'

// Declare Search Component
const CreateNgo2 = () => {

  return (
      <Card height='38rem' width='53rem' direction2='row'>

        <FlexDiv2 flexvalue={7} direction='column'>
          <FormHeader
            brand="Volunteer"
            title = "Create your Nonprofit 2 / 2"
            subtitle="to continue to Platform"
            flexvalue={2}
          />
          <NgoForm2 />
        </FlexDiv2>

        <FlexDiv2 flexvalue={6} direction='column' justify='space-between' >
          <FlexDiv3>
            asdasdasd
          </FlexDiv3>
        </FlexDiv2>
      </Card>
  )
}

export default CreateNgo2;
