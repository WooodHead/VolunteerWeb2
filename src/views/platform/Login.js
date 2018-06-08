import React from 'react';
import Card from '../../components/platform/Card.js';
import FormHeader from '../../components/platform/FormHeader.js';
import LoginForm from '../../components/platform/LoginForm.js'

// Declare Search Component
const Login = () => {

  return (
      <Card height='29.5rem' width='23rem' direction='column'>
        <FormHeader
          brand="Volunteer"
          title = "Sign in"
          subtitle="to continue to Volunteer"
          flexvalue={2}
          >
        </FormHeader>
        <LoginForm />
      </Card>
  )
}

export default Login;
