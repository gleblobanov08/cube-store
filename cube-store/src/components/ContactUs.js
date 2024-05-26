import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function ContactUs() {
  const [showText, setShowText] = useState(false);
  const iconStyle= {
    margin: '20px',
    height: '30px',
    color: 'var(--text-color)',
  }
  const handleClick = () => {
    setShowText(true);
  }
  return (
    <section id="contact">
      <h3>Contact Us</h3>
      <p>Follow us on social media:</p>
      <div className="social-icons">
        <a href="https://www.youtube.com/channel/UCEVWtkMeJwvx0qJtF7W8i7g">
          <FontAwesomeIcon icon={faYoutube} style={iconStyle}/>
        </a>
        <FontAwesomeIcon icon={faTwitter} style={iconStyle} onClick={handleClick}/>
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} onClick={handleClick}/>
      </div>

      {(showText) && <span className="tooltip">Just kidding, I don't have one</span>}
      <p>gleblobanov7@gmail.com</p>
      <p>400107, Volgogradskaya oblast, Russia</p>
    </section>
  );
}