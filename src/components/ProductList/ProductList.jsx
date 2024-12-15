import { useState } from 'react';
import styles from './ProductList.module.css';

function ProductList({ products, addToCart }) {
  const [filter, setFilter] = useState('');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.filterInput}
      />
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className={styles.addButton}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
