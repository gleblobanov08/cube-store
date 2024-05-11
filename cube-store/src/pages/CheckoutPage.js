import React, { useState } from "react";

function CheckoutPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const labelStyle = {
    width: '100%',
    fontSize: 24,
  };
  const inputStyle = {
    margin: '20px 0',
    padding: '10px 20px',
    fontSize: 20,
  }
  const buttonStyle = {
    background: 'transparent',
    fontSize: 24,
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handleUserEmail(e) {
    setUserEmail(e.target.value);
  }
  function handleSubmitClick() {
    alert(`Order has been sent to ${userName}. You can see details on ${userEmail}`);
    setUserEmail("")
    setUserName("");
  }
  return (
    <>
      <div>
        <h2>Confirm your order</h2>
        <form>
          <label for="name" style={labelStyle}>Full name: </label><br/>
          <input id="name" type="text" onChange={handleUserName} value={userName} style={inputStyle} required /><br/>
          <label for="email" style={labelStyle}>Email: </label><br/>
          <input id="email" type="email" onChange={handleUserEmail} value={userEmail} style={inputStyle} required />
          { userName && userEmail &&
          <div>
            <button type="reset" onClick={handleSubmitClick} style={buttonStyle}>Checkout</button>
          </div>
          }
        </form>
      </div>
    </>
  );
}

export default CheckoutPage;