import React from 'react';

export default function Modal({ isOpen, onClose, message }) {
  const overlayStyle = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'rgba(236, 236, 236, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const contentStyle = {
    width: '80%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid black',
    borderRadius: '20px',
    background: 'white',
    color: 'black',
    fontSize: '1rem',
    position: 'relative',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    background: 'transparent',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
  };

  return (
    isOpen && (
      <div className="modal-overlay" style={overlayStyle} onClick={onClose}>
        <div className="modal" style={contentStyle} onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <button onClick={onClose} style={buttonStyle}>X</button>
            <p style={{color: 'black'}}>{message}</p>
          </div>
        </div>
      </div>
    )
  );
}