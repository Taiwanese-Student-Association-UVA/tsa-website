import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';

const Merch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles['merch-container']}>
      
      {/* SNAP POINT 1 */}
      <section className={styles['merch-hero']}>
        <div className={styles['hero-content']}>
          <h1>TSA Merchandise</h1>
          <p>TSA is Cool</p>
        </div>
      </section>

      {/* SNAP POINT 2 */}
      <section className={styles['carousel-viewport']}>
        <motion.div 
          className={styles['carousel-track']}
          /* We animate the internal track instead of the viewport container */
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Card 1 */}
          <div className={styles['merch-card']}>
            <div className={styles['card-content']}>
              <span>2023-2024</span>
              <h2>NM Shirt</h2>
              <button className={styles['buy-btn']}>Buy Now</button>
            </div>
            <div className={styles['card-image-wrapper']}>
              <img src="Photos/shirt1.jpg" alt="Merch" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className={styles['merch-card']}>
            <div className={styles['card-content']}>
              <span>2023-2024</span>
              <h2>NM Hoodie</h2>
              <button className={styles['buy-btn']}>Buy Now</button>
            </div>
            <div className={styles['card-image-wrapper']}>
              <img src="Photos/hoodie1.jpg" alt="Merch" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Merch;