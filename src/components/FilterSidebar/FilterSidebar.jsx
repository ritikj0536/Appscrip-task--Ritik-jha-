import { useState } from 'react';
import styles from './FilterSidebar.module.css';

const FILTER_DATA = [
  { name: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
  { name: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
  { name: 'WORK', options: ['Office', 'Outdoor', 'Remote'] },
  { name: 'FABRIC', options: ['Cotton', 'Silk', 'Polyester', 'Linen'] },
  { name: 'SEGMENT', options: ['Premium', 'Luxury', 'Budget'] },
  { name: 'SUITABLE FOR', options: ['Summer', 'Winter', 'All Season'] },
  { name: 'RAW MATERIALS', options: ['Organic', 'Recycled', 'Natural'] },
  { name: 'PATTERN', options: ['Solid', 'Printed', 'Striped', 'Checked'] },
];

export default function FilterSidebar({ isVisible }) {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <aside className={`${styles.sidebar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {FILTER_DATA.map((filter) => (
        <div key={filter.name} className={styles.group}>
          <button
            className={styles.groupHeader}
            onClick={() => toggleFilter(filter.name)}
            aria-expanded={openFilters[filter.name] || false}
          >
            <div>
              <span className={styles.groupName}>{filter.name}</span>
              <span className={styles.groupValue}>All</span>
            </div>
            <svg
              className={`${styles.chevron} ${openFilters[filter.name] ? styles.chevronOpen : ''}`}
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {openFilters[filter.name] && (
            <div className={styles.options}>
              <button className={styles.unselect}>Unselect all</button>
              {filter.options.map((option) => (
                <label key={option} className={styles.optionLabel}>
                  <input type="checkbox" className={styles.optionCheckbox} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}