import React from 'react';
import { Query } from "react-apollo";
import { HomeGrid, CardText, CardTitle,
  CardImage, CardsContainer, Mid3Div,
  Mid3Cards, UpperHome,MidRightPic, MidLeftList, flexDiv,
  MidHomeTitle, LowerHome, MidHome, lowerHomeText,
  upperHomeTitle, upperHomeText
} from '../styles/MainStyles';
// import {GET_DATA} from "../client/queries.js"

const Home = () => (
  <HomeGrid>
    <div className={UpperHome}>
        <h1 className={upperHomeTitle}>
          Volunteer
        </h1>
        <br />
        <p className={upperHomeText}>
          An app to <strong>help</strong> drive change,
          on what <strong>matters</strong> to you most
          </p>
    </div>

    <MidHome>
      <div className={flexDiv}>
        <MidHomeTitle color="#2196F3">
          What's on Volunteer ?
        </MidHomeTitle>
        <MidLeftList>
          <h3> 34 Causes</h3>
          <li> Discover and keep track of global problems. </li>
          <h3>Nonprofits</h3>
          <li> Find and support the organizations fighting to tackle them. </li>
          <h3>Calls to Action</h3>
          <li> Leave your footrpint by helping them succeed in your own way. </li>
        </MidLeftList>
      </div>
      <div className={MidRightPic} />
    </MidHome>

    <MidHome backColor='#4285f4' color="white">
      <div className={MidRightPic} />
      <div className={flexDiv}>
        <MidHomeTitle color="white">
          What Can You Do ?
        </MidHomeTitle>
        <MidLeftList white>
          <h3>Find</h3>
          <li >Nonprofits worldwide by cause, location and mission. </li>
          <h3>Contribute </h3>
          <li> With goods, materials and anything they may need. </li>
          <h3>Volunteer</h3>
          <li> Your time to activities that have an impact on society. </li>
          <h3>Fund</h3>
          <li> Organizations and projects you care about. </li>
        </MidLeftList>
      </div>
    </MidHome>

    <Mid3Div>
      <MidHomeTitle color="#4285f4">
        Go Leave Your Footprint
      </MidHomeTitle>
      <div className={CardsContainer}>
        <Mid3Cards>
          <CardImage />
        <h3 className={CardTitle}> Giving Wall</h3>
        <p className={CardText}>
          Keep track of all contributions you made, displayed in a memorable way.
        </p>
        </Mid3Cards>
        <Mid3Cards>
          <CardImage />
          <h3 className={CardTitle}> Achievements</h3>
          <p className={CardText}>
            The more you help, the more you get back. Acquire unique
            in-app rewards for helping NGOs !.
          </p>
        </Mid3Cards>
        <Mid3Cards>
          <CardImage />
          <h3 className={CardTitle}> Quantify Impact</h3>
          <p className={CardText}>
            Measure the impact you had on the communities that
            were taken care of by your projects
          </p>
        </Mid3Cards>
      </div>
    </Mid3Div>

    <div className={LowerHome}>
        <p className={lowerHomeText}>
          {`Start Helping Worldwide Today !`}
          </p>
        <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" height="100" width="270" alt='' />
    </div>
  </HomeGrid>
)


export default Home;


// <Query query={GET_DATA}>
//   {({ loading, error, data }) => {
//     if (loading) return "Loading...";
//     if (error) return `Error! ${error.message}`;
//     console.log(data)
//
//     return (
//       <div>
//         This will be the body
//       </div>
//     );
//   }}
// </Query>
