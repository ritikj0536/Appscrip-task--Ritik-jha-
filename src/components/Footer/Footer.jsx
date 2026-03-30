import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterLeft}>
            <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.newsletterInput}
                aria-label="Email for newsletter"
              />
              <button className={styles.newsletterBtn}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.newsletterRight}>
            <div className={styles.contactBlock}>
              <h3 className={styles.contactTitle}>CALL US</h3>
              <p className={styles.contactText}>+44 221 133 5360 · customercare@mettamuse.com</p>
            </div>
            <div className={styles.contactBlock}>
              <h3 className={styles.contactTitle}>CURRENCY</h3>
              <div className={styles.currencyRow}>
                <img src="https://flagcdn.com/w40/us.png" alt="US Flag" width="24" height="16" style={{ borderRadius: '2px' }} />
                <span> · USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <hr className={styles.separator} />

        <div className={styles.links}>
          <div className={styles.linksColumn}>
            <div className={styles.linksHeader} onClick={() => toggleSection('muse')}>
              <h3 className={styles.linksTitle}>mettā muse</h3>
              <svg
                className={`${styles.chevron} ${openSections['muse'] ? styles.chevronOpen : ''}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div className={`${styles.linksBody} ${openSections['muse'] ? styles.linksBodyOpen : ''}`}>
              <a href="#" className={styles.linksItem}>About Us</a>
              <a href="#" className={styles.linksItem}>Stories</a>
              <a href="#" className={styles.linksItem}>Artisans</a>
              <a href="#" className={styles.linksItem}>Boutiques</a>
              <a href="#" className={styles.linksItem}>Contact Us</a>
              <a href="#" className={styles.linksItem}>EU Compliances Docs</a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.linksHeader} onClick={() => toggleSection('quick')}>
              <h3 className={styles.linksTitle}>QUICK LINKS</h3>
              <svg
                className={`${styles.chevron} ${openSections['quick'] ? styles.chevronOpen : ''}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div className={`${styles.linksBody} ${openSections['quick'] ? styles.linksBodyOpen : ''}`}>
              <a href="#" className={styles.linksItem}>Orders & Shipping</a>
              <a href="#" className={styles.linksItem}>Join/Login as a Seller</a>
              <a href="#" className={styles.linksItem}>Payment & Pricing</a>
              <a href="#" className={styles.linksItem}>Return & Refunds</a>
              <a href="#" className={styles.linksItem}>FAQs</a>
              <a href="#" className={styles.linksItem}>Privacy Policy</a>
              <a href="#" className={styles.linksItem}>Terms & Conditions</a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.linksHeader} onClick={() => toggleSection('follow')}>
              <h3 className={styles.linksTitle}>FOLLOW US</h3>
              <svg
                className={`${styles.chevron} ${openSections['follow'] ? styles.chevronOpen : ''}`}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div className={`${styles.linksBody} ${openSections['follow'] ? styles.linksBodyOpen : ''}`}>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

             <hr className={styles.separator} />
            <h3 className={styles.acceptsTitle}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="Google Pay" className={styles.paymentIcon} />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className={styles.paymentIcon} />
              <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="PayPal" className={styles.paymentIcon} />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="American Express" className={styles.paymentIcon} />
              <img src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png" alt="Apple Pay" className={styles.paymentIcon} />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968279.png" alt="OPay" className={styles.paymentIcon} />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}