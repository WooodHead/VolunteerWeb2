import gql from "graphql-tag";

export const SIGNUP_ADMIN = gql`
  mutation signupAdmin($orgName: String!, $orgEmail: String!, $name: String!, $lastName: String!, $password: String! ) {
    signupAdmin(orgName: $orgName, orgEmail: $orgEmail, name: $name, lastName: $lastName, password: $password ) {
      name
    }
  }
`;
