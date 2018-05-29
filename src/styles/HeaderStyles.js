import styled, { css } from 'react-emotion'

// Grid Layout
export const HeaderDiv = styled('div')`
  grid-column: span 12;
  grid-row: 1;
  display: flex;
  align-items: center;
  background-color: #4285f4;
  padding-left: 10%;
  padding-right: 10%;
  box-shadow:
    inset 0px -0.125rem 0.125rem 0px rgba(0,0,0,0.5);
`

export const Container1 = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const NavBarDropdown = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`

// Header Styles
export const NavbarLeft = styled('div')`
  display: flex;
  flex: 1;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.7rem;
  align-items: center;
`
export const NavbarRight = styled('div')`
  display: flex;
  flex: 2;
  font-size: 1.32rem;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
`

export const NavBarItem = css`
  margin-left: 4.5rem;
`

export const NavBarButton = styled('button')`
  font-size: 1.22rem;
  background-color: #4285f4;
  background-origin: padding-box;
  font-weight: bold;
  color: white;
  width: 10.6rem;
  height: 2.9rem;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 2px;
  margin-left: 4.5rem;
`
