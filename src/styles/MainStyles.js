import styled, { css } from 'react-emotion'

//Grid Fill
export const MainDiv = styled('div')`
  grid-column: span 12;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-template-rows: 1fr;
`

// Declare Body Inner Grid
export const HomeGrid = styled('div')`
  grid-row: 1;
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-template-rows: 18% 23% 23% 22% 14%;
`

// Sections
export const UpperHome = css`
  grid-column: span 12;
  grid-row: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:
  linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
  ),
  url("https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8b5f5998cb98c2b00433c988006f22d&auto=format&fit=crop&w=1972&q=80");
  filter: grayscale(0.9) blur(0.1px);
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
`

export const MidHome = styled('div')`
  padding-left: 10%;
  padding-right: 10%;
  grid-column: span 12;
  background-color: ${props => props.backColor};
  color: ${props => props.color};
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  display: grid;
  align-items: space-evenly;
  box-shadow:
    inset 0px 0.19rem 0.75px 0px rgba(0,0,0,0.2),
    inset 0px -0.19rem 0.75px 0px rgba(0,0,0,0.2);
`

// Home 4
export const LowerHome = css`
  padding-left: 10%;
  padding-right: 10%;
  grid-column: span 12;
  display: flex;
  background-color: #4285f4;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-shadow:
    inset 0px 0.19rem 0.75px 0px rgba(0,0,0,0.2),
    inset 0px -0.19rem 0.75px 0px rgba(0,0,0,0.2);
`

// Title
export const upperHomeTitle = css`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 6rem;
  text-shadow: 0.01rem 0.08rem 0.006rem #000;
  margin: 0;
`

export const MidHomeTitle = styled('h2')`
  font-size: 3rem;
  color: ${props => props.color};
  margin: 0;
  margin-bottom: 1.56rem;
  text-align: center;
`

export const CardTitle = css`
  color: #4285f4;
  font-size: 1.875rem;
  margin: 3rem 0 2rem 0;
`

// Text
export const lowerHomeText = css`
  font-size: 3rem;
  font-weight: bold;
`

export const upperHomeText = css`
  font-size: 2rem;
  margin: 0;
  padding: 7%;
`

export const CardText = css`
  color: #000;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1.3rem;
  margin-top: 0px;
`

// UL
export const MidLeftList = styled('ul')`
  font-size: 1.3rem;
  color: ${props => props.white ? 'white' : 'black'};};
  list-style-type: none;
  margin: 0;
  padding: 0;
`

// Divs
export const flexDiv = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Mid3Div = styled('div')`
  grid-column: span 12;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow:
    inset 0px 0.19rem 0.75rem 0px rgba(0,0,0,0.2),
    inset 0px -0.19rem 0.7rem 0px rgba(0,0,0,0.2);
`

export const CardsContainer = css`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
`

export const Mid3Cards = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

// Image Divs
export const CardImage = styled('div')`
  background-image: url("https://static1.squarespace.com/static/52bc56c5e4b09b49d45ff520/t/54846f83e4b0b09de1fe36e6/1417965457801/happn.jpg");
  filter: grayscale(0.1) blur(0.0125rem);
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 10%;
  width: 16rem;
  height: 16rem;
`

export const CardImage2 = styled('div')`
  background-image: url("https://i.pinimg.com/originals/01/83/fa/0183fab4f2a30eecbae709ee963ea742.jpg");
  filter: grayscale(0.1) blur(0.0125rem);
  background-repeat: no-repeat;
  background-size: cover;
  width: 18rem;
  height: 16rem;
`

export const MidRightPic = css`
  background-image: url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73302ddf5fabf9285df2da9c462efbb&auto=format&fit=crop&w=1350&q=80");
  filter: grayscale(0.1) blur(0.0125rem);
  background-repeat: no-repeat;
  background-size: cover;
  width: 18rem;
  height: 18rem;
  margin-left: 7%;
  margin-right: 7%;
  border-radius: 22px;
  -webkit-box-shadow: 0.1875rem 0.1875rem 0.3125rem black;
  -moz-box-shadow: 0.1875rem 0.1875rem 0.3125rem black;
  box-shadow: 0.1875rem 0.1875rem 0.3125rem black;
`

export const NavBarButton = styled('button')`
  font-size: 1.32rem;
  background-color: #4285f4;
  background-origin: padding-box;
  font-weight: bold;
  color: white;
  width: 15.5rem;
  height: 3.15em;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 2px;
`
