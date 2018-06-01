import styled, { css } from 'react-emotion'

// Grid Layout
export const HeaderDiv = styled('div')`
  grid-column: span 12;
  grid-row: 1;
  display: flex;
  align-items: center;
  background-color: #2F80ED;
  padding-left: 10%;
  padding-right: 10%;
  box-shadow:
    inset 0px -0.125rem 0.125rem 0px rgba(0,0,0,0.5);
    inset 0px 0.125rem 0.125rem 0px rgba(0,0,0,0.5);
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
  font-size: 1.15rem;
`

// Header Styles
export const NavbarLeft = styled('div')`
  display: flex;
  flex: 1;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  text-decoration: none;

  hover {
    text-decoration: none;
  }
`
export const NavbarRight = styled('div')`
  display: flex;
  flex: 2;
  font-size: 1.15rem;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
`

export const NavBarItem = css`
  margin-left: 4.5rem;
`

export const NavBarButton = styled('button')`
  font-size: 1.16rem;
  background-color: #2F80ED;
  background-origin: padding-box;
  font-weight: bold;
  color: white;
  width: 10.3rem;
  height: 2.7rem;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 2px;
  margin-left: 4.5rem;
`
