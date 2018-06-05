import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  CardStyle, CardTitle, CardSubtitle, CardActionDescriptor, formHeader
} from '../../styles/platform/PlatformStyles.js';

import LoginForm from './LoginForm'

class Card2 extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  // Render Methods
  render() {
    return (
      <Card className={CardStyle}>
          <div className={formHeader}>
            <h2 className={CardTitle}>
              Volunteer
            </h2>
            <h3 className={CardSubtitle}>
              Sign in
            </h3>
            <h4 className={CardActionDescriptor}>
              to continue to Volunteer
            </h4>
          </div>
          <LoginForm />

      </Card>
    )
  }
}

export default Card2;
