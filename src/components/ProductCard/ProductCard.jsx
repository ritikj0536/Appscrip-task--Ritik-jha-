import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{product.title}</h3>
          <p className={styles.priceText}>
            <a href="#" className={styles.link}>Sign in</a>
            {' '}or{' '}
            <a href="#" className={styles.link}>Create an account</a>
            {' '}to see pricing
          </p>
        </div>
        <button
          className={styles.wishlist}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill={isWishlisted ? '#ff0000' : 'none'}
            stroke={isWishlisted ? '#ff0000' : 'currentColor'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    </article>
  );
}