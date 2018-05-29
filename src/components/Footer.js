import React from 'react';
import { FooterDiv, footerIcons, listItem, FooterSection, FooterTitle, footerList, footerSubTitle } from '../styles/FooterStyles.js'
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedinSquare} from 'react-icons/lib/fa';


const Footer = () => {
  return (
    <FooterDiv>
        <FooterSection>
          <h1 className={FooterTitle}> Volunteer.org </h1>
          <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" height="70" width="190" alt='' />
        </FooterSection>

        <FooterSection>
          <h2 className={footerSubTitle}>App </h2>
          <ul className={footerList}>
            <li className={listItem}>Help</li>
            <li className={listItem}>Feedback</li>
            <li className={listItem}>Data Privacy</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h2 className={footerSubTitle}>Non Profits </h2>
          <ul className={footerList}>
            <li className={listItem}>Support</li>
            <li className={listItem}>Advertise</li>
            <li className={listItem}>Contact Us</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h2 className={footerSubTitle}>About Us</h2>
          <ul className={footerList}>
            <li className={listItem}>Jobs</li>
            <li className={listItem}>Sponsors</li>
            <li className={listItem}>Help us Help</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h2 className={footerSubTitle}>Help us Grow !</h2>
          <div className={footerIcons}>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagram />
            <FaLinkedinSquare />
          </div>

        </FooterSection>
    </FooterDiv>
  )
}

export default Footer ;
