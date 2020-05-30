import React from 'react';
import YouTubeImage from '../assets/social/youtube.png';
import PinterestImage from '../assets/social/pinterest.png';
import FacebookImage from '../assets/social/facebook.png';
import TwitterImage from '../assets/social/twitter.png';
import InstaImage from '../assets/social/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className='site-links'>
        <div className="links-list">
          <h2>Company</h2>
          <div className="links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>       
          </div>
        </div>

        <div className="links-list">  
          <h2>Account</h2>
          <div className="links">
            <a href="#login">Login</a>
            <a href="#create-account">Create Account</a>        
          </div>
        </div>

        <div className="links-list">          
          <h2>Support</h2>
          <div className="links">
            <a href="#help-center">Help Center</a>
            <a href="#accessibility">Accessibility</a>        
          </div>
        </div>
      </div>

      <div className='social'>
        <a href="#youtube">
          <img src={YouTubeImage} alt="YouTube icon link" />
        </a>
        <a href="#pinterest">
          <img src={PinterestImage} alt="Pinterest icon link" />
        </a>
        <a href="#facebook">
          <img src={FacebookImage} alt="Facebook icon link" />
        </a>
        <a href="#twitter">
          <img src={TwitterImage} alt="Twitter icon link" />
        </a>
        <a href="#instagram">
          <img src={InstaImage} alt="Instagram icon link" />
        </a>
      </div>

      <div className='legal'>
      
      </div>
    </footer>
  )
}

export default Footer;