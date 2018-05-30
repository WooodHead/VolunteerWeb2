import React from 'react';
import { Query } from "react-apollo";
import { HomeGrid, CardText, CardTitle,
  CardImage2, CardsContainer, Mid3Div,
  Mid3Cards, UpperHome,MidRightPic, MidLeftList, flexDiv,
  MidHomeTitle, LowerHome, MidHome, lowerHomeText,
  upperHomeTitle, upperHomeText, NavBarButton
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
          {`A Platform to Empower Non Profits
            in the Social Media times
          `}
          </p>
    </div>

    <MidHome>
      <div className={flexDiv}>
        <MidHomeTitle color="#2196F3">
          Your Mission, Amplified
        </MidHomeTitle>
        <MidLeftList>
          <h3> Raise Consiousness </h3>
          <li> Volunteer is a social platform to grow your cause, build consiousness and thrive in today's digital world.</li>
          <h3> Drive Action</h3>
          <li> Create Calls to Action with defined goals and dates, leveraging the combined helping power of the entire community to meet them.</li>
          <h3> Nurtrue Growth</h3>
          <li> Share your success, thank your volunteers and spread the reach of your projects on every opportunity.</li>
        </MidLeftList>
      </div>
      <div className={MidRightPic} />
    </MidHome>

    <MidHome backColor='#2196F3' color="white">
      <div className={MidRightPic} />
      <div className={flexDiv}>
        <MidHomeTitle color="white">
          One Action for Every Need
        </MidHomeTitle>
        <MidLeftList white>
          <h3>Funding</h3>
          <li> Finance your projects with crowdfunding calls across the community. </li>
          <h3>Volunteering</h3>
          <li> Raise Volunteers for specific activities or long term programs.</li>
          <h3>Materials</h3>
          <li> Start a Goods Donation campaign and carry on with your mission</li>
          <h3>Recruiting </h3>
          <li> Fill your talent needs by receveing CVs from your supporters.</li>
        </MidLeftList>
      </div>
    </MidHome>

    <Mid3Div>
      <MidHomeTitle color="#2196F3">
        Manage Everything, On the Browser
      </MidHomeTitle>
      <div className={CardsContainer}>
        <Mid3Cards>
          <CardImage2 />
          <h3 className={CardTitle}> Events Management</h3>
          <p className={CardText}>
            Create, Monitor and Control your Calls to Action 24/7 from the Web.
          </p>
        </Mid3Cards>
        <Mid3Cards>
          <CardImage2 />
          <h3 className={CardTitle}> Content Uploading  </h3>
          <p className={CardText}>
           Boost awareness and engagement by uploading Images and Videos
           to the feed.
          </p>
        </Mid3Cards>
        <Mid3Cards>
          <CardImage2 />
          <h3 className={CardTitle}> Reach Statistics</h3>
          <p className={CardText}>
            Get insights on the visibility of your NGO and demographics
            on your supporters.
          </p>
        </Mid3Cards>
      </div>
    </Mid3Div>

    <div className={LowerHome}>
        <p className={lowerHomeText}>
          {`Add your Nonprofit Today!`}
        </p>
        <NavBarButton>CREATE ACCOUNT</NavBarButton>
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
