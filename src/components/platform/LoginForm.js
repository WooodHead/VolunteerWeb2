import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import { FlexDiv2, formButtons, FormButt, FormHelpText } from '../../styles/platform/PlatformStyles.js';

const onSubmit = async values => {

}

// Error Validation
const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const LoginForm = () => (
  <FlexDiv2 flexvalue={3} direction='column'>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
            <FlexDiv2 direction='column' justify='flex-start' align='flex-start'>
              <Field
                name="email"
                autoFocus
                fullWidth
                margin='normal'
                component={TextField}
                type="email"
                placeholder="Email"
              />
              <Field
                name="password"
                fullWidth
                margin='normal'
                component={TextField}
                type="password"
                placeholder="Password"
              />
            </FlexDiv2>

          <FlexDiv2 direction='row' justify='space-between' align='center' padding='5.1rem'>
            <Link to="/platform/register">
              <p className={FormHelpText}> Register  </p>
            </Link>
            <FormButt>
              SIGN IN
            </FormButt>
          </FlexDiv2>

        </form>
      )}
    />
  </FlexDiv2>
)

export default LoginForm;
