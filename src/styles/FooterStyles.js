import styled, { css } from 'react-emotion'

export const FooterDiv = styled('div')`
  grid-column: span 12;
  grid-row: 3;
  background-color: black;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  align-items: center;
  justify-content: center;
  padding: 2% 10% 2% 10%;
`

export const FooterSection = styled('div')`
  color: white;
  height: 100%;
  display: flex;
  flex 1;
  flex-direction: column;
  align-items: flex-start;
`

export const FooterTitle = css`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.7rem;
  margin: 1.5% 0% 3% 3%;
  text-shadow: 0.125rem 0.125rem 0.125rem #000;
`

export const footerSubTitle = css`
  font-size: 1.5rem;
  font-weight: bold;
`

export const footerList = css`
  font-size: 1.1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const listItem = css`
  margin: 0 0 0.625rem 0;
`

export const footerIcons = css`
  display: flex;
  justify-content: flex-start;
  font-size: 2.1875rem;
`
