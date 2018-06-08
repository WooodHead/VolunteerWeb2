import React from 'react';
import Card from '../../components/platform/Card.js';
import FormHeader from '../../components/platform/FormHeader.js';
import LoginForm from '../../components/platform/LoginForm.js'

// Declare Search Component
const NgoForm2 = () => {

  return (
      <Card height='29.5rem' width='24rem' flexDir='column'>
        <FormHeader
          brand="Volunteer"
          title = "Sign in"
          subtitle="to continue to Volunteer"
          >
        </FormHeader>
        <LoginForm />
      </Card>
  )
}

export default NgoForm2;
