import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { FlexDiv2, FormButt, ErrorText, FormHelpText } from '../../styles/platform/PlatformStyles.js';
import { Form, Field } from 'react-final-form'
import { signIn } from '../../client/util.js'
import TextField from './TextField'
import ActivityIndicator from './ActivityIndicator'

// GQL STUFF
import { Mutation } from "react-apollo";
import { validateEmail, validateName, validatePassword, graphqlErrors} from '../../client/helpers.js'
import { SIGNUP_ADMIN } from '../../client/mutations.js'


// Error Validation
const validate = values => {
  const errors = {}

  // Account Email check
  if (!values.adminEmail) {
    errors.adminEmail = 'Required'
  }
  else if (!validateEmail(values.adminEmail)) {
    errors.adminEmail = 'Please enter a valid email'
  }

  // Name Checks
  if (!values.name) {
    errors.name = 'Required'
  }
  else if (!validateName(values.name)) {
    errors.name = 'Please enter a valid name'
  }

  // Last Name Check
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  else if (!validateName(values.lastName)) {
    errors.lastName = 'Please enter a valid last name'
  }

  // Password Check
  if (!values.password) {
    errors.password = 'Required'
  }
  else if (values.password) {
    const validPwd = validatePassword(values.password);
    if (validPwd !== 'valid') {
      errors.password = validPwd
    }
  }

  // Password Confirmation
  if (!values.confirmation) {
    errors.confirmation = 'Required'
  }
  else if (values.confirmation !== values.password) {
    errors.confirmation = 'Password does not match'
  }
  return errors
}


const RegisterForm = ({ history }) => (
  <Mutation mutation={SIGNUP_ADMIN}>
    {(signupAdmin, { loading, error, data }) => (
      <FlexDiv2 flexvalue={6} direction='column' justify='flex-start'>
        {loading ? <ActivityIndicator /> : ''}
        <Form
          onSubmit={async e => {
            await signupAdmin({ variables: { adminEmail: e.adminEmail, name: e.name, lastName: e.lastName, password: e.password } })
            .then(({ data }) => {
              signIn(data.signupAdmin.jwt)
              if (!data.error) {
                history.push('/platform/createNgo1')
              }
            })
          }}
          validate={validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FlexDiv2  flexvalue={3} direction='column' align='space-between' padding='1.5rem'>
                <FlexDiv2 direction='row' align='flex-start'>
                  <Field
                    name="adminEmail"
                    margin='normal'
                    fullWidth
                    component={TextField}
                    type="email"
                    placeholder="Manager Account Email"
                  />
                </FlexDiv2>

                <FlexDiv2 direction='row' justify='space-between' align='flex-start'>
                  <Field
                    name="name"
                    margin='normal'
                    component={TextField}
                    type="name"
                    placeholder="Name"
                  />
                  <Field
                    name="lastName"
                    margin='normal'
                    component={TextField}
                    type="name"
                    placeholder="Last Name"
                  />
                </FlexDiv2>

                <FlexDiv2 direction='row' justify='space-between' align='flex-start'>
                  <Field
                    name="password"
                    margin='normal'
                    component={TextField}
                    type="password"
                    placeholder="Password"
                  />
                  <Field
                    name="confirmation"
                    margin='normal'
                    component={TextField}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </FlexDiv2>
              </FlexDiv2>
              {error ? <p className={ErrorText}>{graphqlErrors(error.message)}</p> : ''}
              <FlexDiv2 flexvalue={1} direction='row' justify='space-between' align='center' padding='3rem'>
                <Link to="/platform/login">
                  <p className={FormHelpText}> Login  </p>
                </Link>
                <FormButt>
                  REGISTER
                </FormButt>
              </FlexDiv2>
            </form>
          )}
        />
      </FlexDiv2>
  )}
  </Mutation>
)

export default withRouter(RegisterForm);
