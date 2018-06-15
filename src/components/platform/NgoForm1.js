import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { FlexDiv2, FormButt, ErrorText, FormHelpText, formHalf } from '../../styles/platform/PlatformStyles.js';
import { Form, Field } from 'react-final-form'
import TextField from './TextField'
import ActivityIndicator from './ActivityIndicator'
import Picker from './Picker'
import { causes, orgSizes, countries } from '../../client/formsFieldsData.js'

// GQL STUFF
import { Mutation } from "react-apollo";
import { validateEmail, validateName, graphqlErrors} from '../../client/helpers.js'
import { REGISTER_NGO1 } from '../../client/mutations.js'

let chosenCauses;
let chosenSize;
let chosenCountries;


// Error Validation
const validate = values => {
  let errors = {}

  // NGO Name Checks
  if (!values.orgName) {
    errors.orgName = 'Required'
  }

  // NGO Email check
  if (!values.orgEmail) {
    errors.orgEmail = 'Required'
  }
  else if (!validateEmail(values.orgEmail)) {
    errors.orgEmail = 'Please enter a valid email'
  }
  // Website check
  if (!values.website) {
    errors.website = 'Required'
  }
  return errors
}


const updateCauses = selectedCauses => {
  chosenCauses = selectedCauses;
  validate('a')
}

const updateSizes = selectedSizes => {
  chosenSize = selectedSizes.toString();
  validate('a')
}

const updateCountries = selectedCountries => {
  chosenCountries = selectedCountries;
  validate('a')
}

const RegisterForm = ({ history }) => (
  <Mutation mutation={REGISTER_NGO1}>
    {(createNgo1, { loading, error }) => (
      <FlexDiv2 flexvalue={6} direction='column' >
        {loading ? <ActivityIndicator /> : ''}
        <Form
          onSubmit={async e => {
            await createNgo1({ variables: { orgName: e.orgName, orgEmail: e.orgEmail, website: e.website, orgSize: chosenSize , causes: chosenCauses, countries: chosenCountries } })
            history.push('/platform/createNgo2');
          }}
          validate={validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FlexDiv2 flexvalue={6} direction='column' justify='space-between' padding='1.5rem'>

                <FlexDiv2 direction='row' justify='space-between' padding='1.5rem'>
                  <div className={formHalf}>
                    <Field
                      name="orgName"
                      margin='dense'
                      component={TextField}
                      type="text"
                      placeholder="Organization Name"
                      autoFocus
                      fullWidth
                    />

                  </div>
                  <div className={formHalf}>
                  <Field
                    name="orgEmail"
                    margin='dense'
                    component={TextField}
                    type="email"
                    placeholder="Organization Email"
                    fullWidth
                  />
                  </div>
                </FlexDiv2>

                  <Field
                    name="website"
                    margin='dense'
                    component={TextField}
                    type="text"
                    placeholder="Organization Website"
                  />
                  <Field
                    name="causes"
                    component={Picker}
                    type="select"
                    label="Causes (Max of 3)"
                    data={causes}
                    updateSelected={updateCauses}
                  />
                  <Field
                    name="countries"
                    component={Picker}
                    type="select"
                    label="Country of Action"
                    data={countries}
                    updateSelected={updateCountries}
                  />
                  <Field
                    name="orgSize"
                    margin='normal'
                    component={Picker}
                    type="select"
                    label="Organization Size"
                    data={orgSizes}
                    updateSelected={updateSizes}
                  />
              </FlexDiv2>
              {error ? <p className={ErrorText}>{graphqlErrors(error.message)}</p> : ''}
              <FlexDiv2 flexvalue={1} direction='row' justify='space-between' align='center' padding='3.3rem'>
                <Link to="/platform/policies/privacy">
                  <p className={FormHelpText}> Privacy Policy  </p>
                </Link>
                <FormButt>
                  STEP 2
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
