import { useState } from 'react';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  const [showFilters, setShowFilters] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('RECOMMENDED');

  const sortOptions = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH'];

  const getSortedProducts = () => {
    const sorted = [...products];
    switch (sortBy) {
      case 'PRICE : HIGH TO LOW':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'PRICE : LOW TO HIGH':
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sorted;
  };

  return (
    <section className={styles.section}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <span className={styles.count}>{products.length} ITEMS</span>
          <button
            className={styles.filterToggle}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? '< HIDE FILTER' : '> SHOW FILTER'}
          </button>
        </div>

        <div className={styles.sortWrapper}>
          <button
            className={styles.sortBtn}
            onClick={() => setSortOpen(!sortOpen)}
          >
            {sortBy}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {sortOpen && (
            <div className={styles.sortDropdown}>
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`${styles.sortOption} ${option === sortBy ? styles.sortOptionActive : ''}`}
                  onClick={() => { setSortBy(option); setSortOpen(false); }}
                >
                  {option === sortBy && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        {showFilters && <FilterSidebar isVisible={showFilters} />}
        <div className={`${styles.grid} ${showFilters ? '' : styles.gridFull}`}>
          {getSortedProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}