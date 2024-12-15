import { Link } from 'react-router-dom';
import { Home, ShoppingCart, MessageCircle } from 'lucide-react';
import styles from './Sidebar.module.css';

function Sidebar({ cartCount }) {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              <Home className={styles.icon} /> Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.link}>
              <ShoppingCart className={styles.icon} />
              Cart
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.link}>
              <MessageCircle className={styles.icon} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
