import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function ContactUs() {
  const [showTextOne, setShowTextOne] = useState(false);
  const [showTextTwo, setShowTextTwo] = useState(false);
  const [showTextThree, setShowTextThree] = useState(false);
  const iconStyle= {
    margin: '20px',
    height: '30px',
  }
  const handleMouseOverOne = () => {
    setShowTextOne(true);
  }
  const handleMouseOutOne = () => {
    setShowTextOne(false);
  }
  const handleMouseOverTwo = () => {
    setShowTextTwo(true);
  }
  const handleMouseOutTwo = () => {
    setShowTextTwo(false);
  }
  const handleMouseOverThree = () => {
    setShowTextThree(true);
  }
  const handleMouseOutThree = () => {
    setShowTextThree(false);
  }
  return (
    <section id="contact">
      <h3>Contact Us</h3>
      <p>Follow us on social media:</p>
      <div className="social-icons">
        <a href="https://www.youtube.com/channel/UCEVWtkMeJwvx0qJtF7W8i7g">
          <FontAwesomeIcon icon={faYoutube} style={iconStyle} onMouseOver={handleMouseOverOne} onMouseOut={handleMouseOutOne}/>
        </a>
        <FontAwesomeIcon icon={faTwitter} style={iconStyle} onMouseOver={handleMouseOverTwo} onMouseOut={handleMouseOutTwo}/>
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} onMouseOver={handleMouseOverThree} onMouseOut={handleMouseOutThree}/>
      </div>

      {showTextOne && <span className="tooltip">My YouTube channel</span>}
      {(showTextTwo || showTextThree) && <span className="tooltip">Just kidding, I don't have one</span>}
      <p>gleblobanov7@gmail.com</p>
      <p>400107, Volgogradskaya oblast, Russia</p>
    </section>
  );
}