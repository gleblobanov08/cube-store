import React from 'react';
import { useCart } from '../components/CartContext';
import styles from '../styles/CartPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const calculateTotalPrice = (item) => {
    const extrasTotal = item.extras.reduce((acc, extra) => {
      return extra.selected ? acc + extra.price : acc;
    }, 0);
    return (item.product.price + extrasTotal) * item.amount;
  };
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateTotalPrice(item);
    }, 0);
  };
  const faqStyle = {
    margin: '0 auto',
    width: '60%',
  }
  return (
    <section id="cart">
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
        {cartItems.map((item, index) => (
          <div className={styles.cartItem} key={index}>
            <div>
            <img src={item.product.img[0]} alt='cartimg' />
            </div>
            <div>
            <h4>{item.product.name} <br/><br/> ${calculateTotalPrice(item)}</h4>
            <ul>
              {item.extras.map((extra, idx) => (
                extra.selected &&
                <li key={idx} style={{listStyleType: 'none'}}>+ {extra.name} (${extra.price})</li>
              ))}
            </ul>
            </div>
            <div>
            <button onClick={() => removeFromCart(index)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </div>
        ))}
      <h3 style={{margin: '40px auto'}}>
        Total: ${calculateCartTotal()}<br/><br/>
        <Link to={'/checkout'}>Checkout</Link>
      </h3>
      <button className={styles.resetBtn} onClick={clearCart}>Clear Cart</button>
      </>
  ) : (<div>Your cart is empty</div>)}
    </div>
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list" style={faqStyle}>
        <div className="faq-item">
          <h3>What is speedcubing?</h3>
          <p>Speedcubing is the sport of solving a Rubik's Cube or other twisty puzzles as quickly as possible.</p>
        </div>
        <div className="faq-item">
          <h3>What products do you offer?</h3>
          <p>We offer a wide range of speedcubes, lubricants, timers, and accessories for speedcubers of all levels.</p>
        </div>
        <div className="faq-item">
          <h3>What are your shipping and return policies?</h3>
          <p>Our shipping and return policies can be found on our <a href="/shipping-and-returns">Shipping & Returns</a> page.</p>
        </div>
        <div className="faq-item">
          <h3>How can I track my order?</h3>
          <p>Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order on the courier's website.</p>
        </div>
        <div className="faq-item">
          <h3>Do you ship internationally?</h3>
          <p>Yes, we ship our products worldwide. However, please note that shipping times and fees may vary depending on your location.</p>
        </div>
        {/* Add more FAQs here */}
      </div>
    </div>
    </section>
  );
}