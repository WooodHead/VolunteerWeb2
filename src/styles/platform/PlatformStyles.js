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

export const Card2 = styled('div')`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 2.4rem;
  display: flex;
  flex-direction: ${props => props.direction ? 'column' : 'row'};
  border-radius: 15px;
  box-shadow:
    inset 0.03rem 0.0rem 0.75px 0px rgba(0,0,0,0.3),
    inset -0.03rem -0.1rem 0.75px 0px rgba(0,0,0,0.3);
`

export const FlexDiv2 = styled('div')`
  display: flex;
  flex: ${props => props.flexvalue};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  margin-top: ${props => props.padding};
  padding-right: ${props => props.padding2};
`

export const FlexDiv3 = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding-top: ${props => props.padding};
  margin-left: 2rem;
  box-shadow:
    inset 0.02rem 0px rgba(0,0,0,0.2);
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

export const ErrorText = css`
  font-size: 1rem;
  font-weight: bold;
  color: red;
`

export const ChipStyle = css`
  margin-left: 0.2rem;
`


export const pickerCont = css`
  display:flex;
  flex-wrap: wrap;
`

export const formHalf = css`
  width: 43%
`
