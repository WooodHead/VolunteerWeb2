import styled from 'react-emotion'

// Grid Layout
export const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-template-rows: 1fr 55fr 4fr;

  @media screen and (max-width: 600px) {
    grid-template-rows: 0.3fr 30fr 3fr;
  }
`
