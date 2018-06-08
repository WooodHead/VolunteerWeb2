export function validateEmail(email) {
  if (email.length === 0) {
    return 'Please enter an email';
  }
  //Regex for valid email
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return false;
  }
  return true;
}

export function validateName(name) {
  const letter = /^(?=.*?[a-z])/;
  const hasNumber = /\d/;
  if (!letter.test(String(name)) ||  hasNumber.test(String(name))) {
    return false;
  }
  return true;
}

export function validatePassword(password) {
  //At least 1 letter
  const letter = /^(?=.*?[a-z])/;
  //At least 1 special char
  const specialChar = /^(?=.*[!@#$%^&*])/;
  //At Least 8 CHaracters
  const fiveCharacters = /^.{5,}$/;
  //Validation
  if (!letter.test(String(password)) || !fiveCharacters.test(String(password))) {
    return 'Must have a letter and be at least 5 characters long';
  }
  if (!specialChar.test(String(password))) {
    return 'Must have at least one of : !@#$%^&*';
  }
  return 'valid';
}

//Graphql Error String Removal.
export function graphqlErrors(error) {
  return error.toString().replace('GraphQL error:', ' ').trim();
}
