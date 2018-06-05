import styled, { css } from 'react-emotion'

// Grid Layout
export const Grid2 = styled('div')`
  height: 100vh;
  width: 100vw;
  background: rgb(254, 254, 254);
  display:flex;
  align-items: center;
  justify-content: center;
`

export const CardStyle = css`
  width: 23rem;
  height: 28rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
`

export const CardTitle = css`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  color: #2F80ED;
  margin: 0px;
`

export const CardSubtitle = css`
  font-size: 1.5rem;
  color: rgb(33, 33, 33);
`

export const CardActionDescriptor = css`
  font-size: 1.2rem;
  color: rgb(33, 33, 33);
  font-weight: normal;
  margin 0;
`

export const formHeader = css`
  display: flex;
  flex: 2;
  flex-direction: column;
`

export const formGroup = css`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;

`

export const formFields = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const formButtons = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;
`

export const FormButt = styled('button')`
  font-size: 0.8rem;
  background-color: #2F80ED;
  background-origin: padding-box;
  font-weight: bolder;
  color: white;
  width: 7.8rem;
  height: 2.5rem;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 2px;
`

export const FormHelpText = css`
  font-size: 1rem;
  font-weight: bold;
  color: #2F80ED;
`
