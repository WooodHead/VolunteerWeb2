import React, { Component } from 'react';
import { HeaderDiv, NavbarRight, NavbarLeft,
  NavBarButton, NavBarItem, Container1, NavBarDropdown
} from '../styles/HeaderStyles.js'
import { FaBars } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';


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
        <Link to="/"><p className={NavBarItem}>For Helpers</p></Link>
        <Link to="/ngos"><p className={NavBarItem}>For Nonprofits</p></Link>
        <Link to="/about"><p className={NavBarItem}>About Us</p></Link>
        <Link to="/platform"><p className={NavBarItem}>Platform</p></Link>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ftw_and_co.happn"><NavBarButton>GET THE APP</NavBarButton></a>
      </Container1>
    )
  }

  showDropdown() {
    if (this.state.showDropdown) {
      return (
        <NavBarDropdown>
          <Link to="/ngos"><p>For Helpers</p></Link>
          <Link to="/ngos"><p>For Nonprofits</p></Link>
          <Link to="/about"><p>About Us</p></Link>
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
            <NavbarLeft><Link to="/"> Volunteer.org</Link></NavbarLeft>
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
