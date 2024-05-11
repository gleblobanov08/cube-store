import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../components/CartContext';
import Modal from '../components/Modal';
import styles from '../styles/ProductDetailPage.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [amount, setAmount] = useState(1);
  const [lubeChecked, setLubeChecked] = useState(false);
  const [customChecked, setCustomChecked] = useState(false);
  const [wrappingChecked, setWrappingChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);

  const product = products.find(product => product.id === parseInt(id));
  const images = product.img;

  const handleAddToCart = () => {
    const cartItem = {
      product: product,
      amount: amount,
      extras: [
        { name: 'Lube', price: 3, selected: lubeChecked },
        { name: 'Set-up', price: 3, selected: customChecked },
        { name: 'Gift Wrapping', price: 5, selected: wrappingChecked }
      ]
    };
    addToCart(cartItem);
    setIsModalOpen(true);
  };

  const handleClickPrev = () => {
    setImgIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const handleClickNext = () => {
    setImgIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const handleClickPlus = () => {
    setAmount(prevAmount => (prevAmount + 1));
  };
  const handleClickMinus = () => {
    setAmount(prevAmount => (prevAmount > 1 ? prevAmount - 1 : null));
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
    <div className="product-detail">
      {product ? (
        <>
        <div>
            <div className={styles.imgSlider}>
              <button onClick={handleClickPrev}>&#10094;</button>
              <img src={images[imgIndex]} alt={`product ${imgIndex + 1}`} className={styles.img} />
              <button onClick={handleClickNext}>&#10095;</button>
            </div>
            <div className={styles.sideItem}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <label>Amount:</label>
            <div>
              <button onClick={handleClickMinus} className={styles.amountBtn} style={{marginLeft: 10}}>-</button>
              <input type="number" value={amount} onChange={e => setAmount(parseInt(e.target.value))} min="1" className={styles.numInput} />
              <button onClick={handleClickPlus} className={styles.amountBtn}>+</button>
            </div><br/>
            <div className={styles.extrasDiv}>
              <table>
                <tr>
                  <td><input type="checkbox" checked={lubeChecked} onChange={() => setLubeChecked(!lubeChecked)} /></td>
                  <td><label>+ Lube ($3)</label></td>
                </tr>
                <tr>
                  <td><input type="checkbox" checked={customChecked} onChange={() => setCustomChecked(!customChecked)} /></td>
                  <td><label>+ Set-up ($3)</label></td>
                </tr>
                <tr>
                  <td><input type="checkbox" checked={wrappingChecked} onChange={() => setWrappingChecked(!wrappingChecked)} /></td>
                  <td><label>+ Gift Wrapping ($5)</label></td>
                </tr>
              </table>
            </div>
            <button onClick={handleAddToCart} className={styles.btnModal}>Add to Cart</button>
            </div>
            <div className={styles.sideItem} style={{marginBottom: '80px'}}>
              <Link to='/cart' className={styles.actionBtn}>Go to cart</Link> or <Link to={`/products`} className={styles.actionBtn}>Continue shopping</Link>
            </div>
        </div>
        <div>
            <p>Good {product.event} cube from {product.company}. Higly recommended for speedcubers</p>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} message="Product has been added to cart" />
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
    </>
  );
}