import React from 'react';

export default function Modal({ isOpen, onClose, message }) {
  const overlayStyle = {
    padding: 20,
    width: '100vw',
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'rgba(236, 236, 236, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const contentStyle = {
    width: '40%',
    margin: '0 auto',
    padding: 20,
    border: '1px dotted black',
    borderRadius: 20,
    background: 'white',
    fontSize: '24px',
    verticalAlign: 'middle',
    position: 'relative'
  }
  const buttonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 20,
    background: 'transparent',
    border: 'none',
    color: 'black'
  }
  return (
    isOpen && (
      <div className="modal-overlay" style={overlayStyle} onClick={onClose}>
        <div className="modal" style={contentStyle}>
          <div className="modal-content">
            <button onClick={onClose} style={buttonStyle}>X</button>
            <p>{message}</p>
          </div>
        </div>
      </div>
    )
  );
}