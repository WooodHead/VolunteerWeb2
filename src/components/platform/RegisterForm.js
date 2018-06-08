import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { FlexDiv2, formButtons, FormButt, ErrorText, FormHelpText } from '../../styles/platform/PlatformStyles.js';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import ActivityIndicator from './ActivityIndicator'

// GQL STUFF
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { validateEmail, validateName, validatePassword, graphqlErrors} from '../../client/helpers.js'
import { SIGNUP_ADMIN } from '../../client/mutations.js'


// Error Validation
const validate = values => {
  const errors = {}

  // NGO Name Checks
  if (!values.orgName) {
    errors.orgName = 'Required'
  }
  else if (!validateName(values.orgName)) {
    errors.orgName = 'Please enter a valid name'
  }

  // NGO Email check
  if (!values.orgEmail) {
    errors.orgEmail = 'Required'
  }
  else if (!validateEmail(values.orgEmail)) {
    errors.orgEmail = 'Please enter a valid email'
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
    {(signupAdmin, { loading, error }) => (
      <FlexDiv2 flexvalue={6} direction='column' justify='flex-start'>
        {loading ? <ActivityIndicator /> : ''}
        <Form
          onSubmit={async e => {
            await signupAdmin({ variables: { orgName: e.orgName, orgEmail: e.orgEmail, name: e.name, lastName: e.lastName, password: e.password } })
            console.log(error)
            history.push('/platform/createNgo1');
          }}
          validate={validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FlexDiv2  flexvalue={3} direction='column' align='space-between' padding='1.5rem'>
                <FlexDiv2 direction='row' justify='space-between' align='flex-start'>
                  <Field
                    name="orgName"
                    margin='normal'
                    component={TextField}
                    type="text"
                    placeholder="Organization Name"
                    autoFocus
                  />
                  <Field
                    name="orgEmail"
                    margin='normal'
                    component={TextField}
                    type="email"
                    placeholder="Organization Email"
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
              <FlexDiv2 flexvalue={1} direction='row' justify='space-between' align='center' padding='3.38rem'>
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
