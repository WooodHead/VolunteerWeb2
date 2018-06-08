import React from 'react';
import Card from '../../components/platform/Card.js';
import FormHeader from '../../components/platform/FormHeader.js';
import RegisterForm from '../../components/platform/RegisterForm.js'
import { FlexDiv2, FlexDiv3 } from '../../styles/platform/PlatformStyles.js'

// Declare Search Component
const Register = () => {

  return (
      <Card height='35rem' width='53rem' direction2='row'>


        <FlexDiv2 flexvalue={7} direction='column'>
          <FormHeader
            brand="Volunteer"
            title = "Register Manager Account"
            subtitle="to continue to NGO Creation"
            flexvalue={3}
          />
          <RegisterForm />
        </FlexDiv2>

        <FlexDiv2 flexvalue={5} direction='column' justify='space-between' >
          <FlexDiv3>
            asdasdasd
          </FlexDiv3>
        </FlexDiv2>
      </Card>
  )
}

export default Register;
