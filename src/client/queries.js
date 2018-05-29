import gql from "graphql-tag";

export const GET_DATA = gql`
  {
    ngosByCountry(countries:"Argentina"){
      name
      mission
      causes {
        _id
        name
      }
      continents
      countries
    }
  }
`
