import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'];

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          <div className={styles.logoIcon}>✦</div>
        </div>

        <div className={styles.center}>
          <a href="/" className={styles.logo}>LOGO</a>
        </div>

        <div className={styles.right}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Shopping bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
          <button className={`${styles.iconBtn} ${styles.desktopOnly}`} aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <div className={`${styles.lang} ${styles.desktopOnly}`}>
            <span>ENG</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className={styles.navLink}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className={styles.mobileNavLink}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}