import gql from "graphql-tag";

export const LOGIN_ADMIN = gql`
  mutation loginAdmin($adminEmail: String!, $password: String! ) {
    loginAdmin(adminEmail: $adminEmail, password: $password ) {
      name
      jwt
    }
  }
`;


export const SIGNUP_ADMIN = gql`
  mutation signupAdmin($adminEmail: String!, $name: String!, $lastName: String!, $password: String! ) {
    signupAdmin(adminEmail: $adminEmail, name: $name, lastName: $lastName, password: $password ) {
      name
      jwt
    }
  }
`;


export const REGISTER_NGO1 = gql`
  mutation createNgo1($orgName: String!, $orgEmail: String!, $website: String!, $orgSize: String!, $causes: [String!], $countries: [String!] ) {
    createNgo1(orgName: $orgName, orgEmail: $orgEmail, website: $website, orgSize: $orgSize, causes: $causes, countries: $countries ) {
      orgName
    }
  }
`;

export const UPDATE_NGO = gql`
  mutation updateNgo(
    $orgName: String,
    $orgEmail: String,
    $website: String,
    $orgSize: String,
    $causes: [String],
    $countries: [String]
    $logo: String
    $bannerImg: [String]
    $mission: String
    $description: String
    $status: String
    $ctas: [String]
  ) {
    updateNgo(
      orgName: $orgName,
      orgEmail: $orgEmail,
      website: $website,
      orgSize: $orgSize,
      causes: $causes,
      countries: $countries,
      logo:$logo,
      bannerImg:$bannerImg,
      mission:$mission,
      description:$description,
      status:$status,
      ctas:$ctas,
    )
    {
      orgName
    }
  }
`;
