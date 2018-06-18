import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { FlexDiv2, FormButt, ErrorText, FormHelpText } from '../../styles/platform/PlatformStyles.js';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import ActivityIndicator from './ActivityIndicator'

// GQL STUFF
import { Mutation } from "react-apollo";
import { validateWeb, graphqlErrors} from '../../client/helpers.js'
import { UPDATE_NGO } from '../../client/mutations.js'


// Error Validation
const validate = values => {
  let errors = {}

  if (!values.logo) {
    errors.logo = 'Required'
  }
  else if (!validateWeb(values.logo)) {
    errors.logo = 'Please provide a valid URL'
  }
  if (!values.mission) {
    errors.mission = 'Required'
  }
  else if (values.mission.length > 110) {
    errors.mission = values.mission.length + '/110 characters'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  else if (values.description.length > 230) {
    errors.description = values.description.length + '/230 characters'
  }
  return errors
}

const RegisterForm = ({ history }) => (
  <Mutation mutation={UPDATE_NGO}>
    {(updateNgo, { loading, error, data }) => (
      <FlexDiv2 flexvalue={6} direction='column' >
        {loading ? <ActivityIndicator /> : ''}
        <Form
          onSubmit={async e => {
            await updateNgo({ variables: { logo: e.logo, mission: e.mission, description: e.description } })
            .then(({ data }) => {
              if (!data.error) {
                history.push('/platform/authenticate')
              }
            })
          }}
          validate={validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FlexDiv2 flexvalue={6} direction='column' justify='space-between' padding='1.5rem'>

                  <Field
                    name="logo"
                    margin='normal'
                    component={TextField}
                    type="text"
                    placeholder="Organization Logo URL"
                    autoFocus
                    fullWidth
                  />

                  <Field
                    name="mission"
                    margin='normal'
                    component={TextField}
                    type="text"
                    placeholder="Organization Mission (110c)"
                    multiline
                    rows={3}
                    fullWidth
                  />

                  <Field
                    name="description"
                    margin='normal'
                    component={TextField}
                    type="text"
                    multiline
                    placeholder="Organization Description (230c)"
                    rows={5}
                  />

              </FlexDiv2>
              {error ? <p className={ErrorText}>{graphqlErrors(error.message)}</p> : ''}
              <FlexDiv2 flexvalue={1} direction='row' justify='space-between' align='center' padding='3.3rem'>
                <Link to="/platform/policies/privacy">
                  <p className={FormHelpText}> Privacy Policy  </p>
                </Link>
                <FormButt>
                  CREATE NGO
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
