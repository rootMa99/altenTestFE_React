import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import ContactForm from './components/ContactForm/ContactForm';
import styles from './App.module.css';

  
const initialProducts = [
  { id: 1, name: 'Laptop Pro', description: 'High-performance laptop', price: 1299.99, image: '/api/placeholder/200/200', stock: 10 },
  { id: 2, name: 'Wireless Headphones', description: 'Noise-cancelling headphones', price: 199.99, image: '/api/placeholder/200/200', stock: 15 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => setCart(cart.filter((item) => item.id !== productId));

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)));
    }
  };

  return (
    <Router>
      <div className={styles.container}>
        <Sidebar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
