import React, { Component } from 'react';
import { HeaderDiv, NavbarRight, NavbarLeft,
  NavBarButton, NavBarItem, Container1, NavBarDropdown
} from '../styles/HeaderStyles.js'
import { FaBars } from 'react-icons/lib/fa';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 600 ? true : false,
      showDropdown: false
    };
  }

  // Helper Methods
  navBarRight = () => {
    if (this.state.isMobile){
      return <FaBars onClick={() =>this.toggleHamburger()} />
    }
    return (
      <Container1 justifyContent='flex-end' alignItems='center'>
        <NavLink to="/people" activeStyle={{fontWeight: 'bold',}}><p className={NavBarItem}>For Helpers</p></NavLink>
        <NavLink to="/ngos" activeStyle={{fontWeight: 'bold',}}><p className={NavBarItem}>For Nonprofits</p></NavLink>
        <NavLink to="/platform" activeStyle={{fontWeight: 'bold',}}><p className={NavBarItem}>Platform</p></NavLink>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ftw_and_co.happn"><NavBarButton>GET THE APP</NavBarButton></a>
      </Container1>
    )
  }

  showDropdown() {
    if (this.state.showDropdown) {
      return (
        <NavBarDropdown>
          <NavLink to="/people" activeStyle={{fontWeight: 'bold',}}><p>For Helpers</p></NavLink>
          <NavLink to="/ngos" activeStyle={{fontWeight: 'bold',}}><p>For Nonprofits</p></NavLink>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ftw_and_co.happn"><p>Get the App</p></a>
        </NavBarDropdown>
      )
    }
  }

  toggleHamburger() {
   const newState = {
      ...this.state,
      showDropdown: !this.state.showDropdown,
   };
   this.setState(newState)
  }

  // Component Rendering
  render() {
    console.log('Device is Mobile: ' + this.state.isMobile);
    return (
      <HeaderDiv>
        <Container1 flexDirection='column' >
          <Container1>
            <NavbarLeft>Volunteer.org</NavbarLeft>
            <NavbarRight>
              {this.navBarRight()}
            </NavbarRight>
          </Container1>
          {this.showDropdown()}
        </Container1>
      </HeaderDiv>
    )
  }
}

export default Header ;
