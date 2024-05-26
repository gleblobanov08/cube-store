import React, { useState } from 'react';
import { useCart } from '../components/CartContext';

export default function CheckoutPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const { clearCart } = useCart();

  const labelStyle = {
    width: '100%',
    fontSize: 24,
  };
  const inputStyle = {
    margin: '20px 0',
    padding: '10px 20px',
    borderColor: 'black',
    fontSize: 20
  }
  const buttonStyle = {
    background: 'transparent',
    fontSize: 24,
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (validateEmail(emailValue)) {
      setEmailValid(true);
      setEmailErrorMessage('');
    } else {
      setEmailValid(false);
      setEmailErrorMessage('Invalid email format.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Checkout was "successful"! Now wait until we mail you.');
    } else {
      setEmailValid(false);
      setEmailErrorMessage('Please enter a valid email address.');
    }
    setEmail('');
    setUsername('');
    clearCart;
  };

  const emailStyle = () => {
    return {
      ...inputStyle,
      borderColor: emailValid ? 'initial' : 'red' 
    };
  };

  return (
    <div>
      <h1>Checkout Page</h1>
        <div>
          <label for="name" style={labelStyle}>Full name: </label><br/>
          <input type="text" id="name" value={username} onChange={handleUserNameChange} style={inputStyle} required /><br/>
          
          <label for="email" style={labelStyle}>Email: </label><br/>
          <input type="email" id="email" value={email} onChange={handleEmailChange} style={emailStyle()} required />
          {!emailValid && <p style={{ color: 'red' }}>{emailErrorMessage}</p>}
          
          { username && emailValid && email &&
          <div>
            <button type="reset" onClick={handleSubmit} style={buttonStyle}>Checkout</button>
          </div>
          }
          </div>
    </div>
  );
}
