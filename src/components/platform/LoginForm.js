import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import { FlexDiv2, FormButt, FormHelpText, ErrorText } from '../../styles/platform/PlatformStyles.js';
import ActivityIndicator from './ActivityIndicator'
import { signIn } from '../../client/util.js'

// GQL STUFF
import { Mutation } from "react-apollo";
import { validateEmail, validatePassword, graphqlErrors} from '../../client/helpers.js'
import { LOGIN_ADMIN } from '../../client/mutations.js'

// Error Validation
const validate = values => {
  const errors = {}
  if (!values.adminEmail) {
    errors.adminEmail = 'Required'
  }
  else if (!validateEmail(values.adminEmail)) {
    errors.adminEmail = 'Please enter a valid email'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  else if (values.password) {
    const validPwd = validatePassword(values.password);
    if (validPwd !== 'valid') {
      errors.password = validPwd
    }
  }
  return errors
}

const LoginForm = ({ history }) => (
  <Mutation mutation={LOGIN_ADMIN}>
    {(loginAdmin, { loading, error, data }) => (
    <FlexDiv2 flexvalue={3} direction='column'>
      {loading ? <ActivityIndicator /> : ''}
      <Form
        onSubmit={async e => {
          await loginAdmin({ variables: { adminEmail: e.adminEmail, password: e.password } })
          .then(({ data }) => {
            signIn(data.loginAdmin.jwt)
            if (!data.error) {
              history.push('/platform/authenticate')
            }
          })
        }}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FlexDiv2 direction='column' justify='flex-start' align='flex-start'>
              <Field
                name="adminEmail"
                autoFocus
                fullWidth
                margin='normal'
                component={TextField}
                type="email"
                placeholder="Manager Account Email"
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

            {error ? <p className={ErrorText}>{graphqlErrors(error.message)}</p> : ''}

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
)}
</Mutation>
)

export default withRouter(LoginForm);
