import styles from './Cart.module.css';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartImage} />
              <div className={styles.cartDetails}>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <div className={styles.cartActions}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className={styles.quantityButton}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className={styles.quantityButton}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <h3>Total Price:</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
