import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'

import { formGroup, formFields, formButtons, FormButt, FormHelpText } from '../../styles/platform/PlatformStyles.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
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
  <div className={formGroup}>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
            <div className={formFields}>
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
            </div>

          <div className={formButtons}>
            <Link to="/platform/register">
              <p className={FormHelpText}> Register  </p>
            </Link>
            <FormButt>
              SIGN IN
            </FormButt>
          </div>

        </form>
      )}
    />
  </div>
)

export default LoginForm;
