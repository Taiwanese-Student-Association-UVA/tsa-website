import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';

const Merch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles['merch-container']}>
      
      <section className={styles['merch-hero']}>
        <div className={styles['hero-content']}>
          <h1>TSA Merchandise</h1>
          <p>TSA is Cool</p>
        </div>
      </section>

      <motion.section 
        className={styles['carousel-viewport']}
        initial={{ y: "100vh" }}
        whileInView={{ y: 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.45, 0, 0.55, 1],
        }}
        viewport={{ once: false, amount: 0, margin: "0px 0px -100px 0px" }}
      >
        <div className={styles['carousel-track']}>
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
        </div>
      </motion.section>
    </div>
  );
};

export default Merch;