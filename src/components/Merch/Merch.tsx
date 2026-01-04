import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Merch.module.css';

const Merch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className={styles['merch-container']}> {/* ---- START OF MERCH PAGE ---- */}
       
      {/* HERO SECTION -------------------------------------------------------*/}

      <section className={styles['merch-hero']}> {/* ---- START OF HERO SECTION ---- */}
        <div className={styles['hero-content']}>
          <h1>TSA Merchandise</h1>
          <p>TSA is Cool</p>
        </div>
      </section> {/* ---- END OF HERO SECTION ---- */}



      {/* CAROUSEL SECTION -------------------------------------------------------*/}

      <section className={styles['carousel-viewport']}> {/* ---- START OF CAROUSEL SECTION ---- */}
        <motion.div 
          className={styles['carousel-track']}
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* NIGHT MARKET SHIRT */}
          <div className={styles['merch-card']} style={{ backgroundColor: '#FFF5D4' }}>
            <img 
                src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" 
                className={`${styles['nm-background']}`} 
            />
                
            <div className={styles['card-content']}>

                <img 
                src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_FRONT.PNG" 
                className={styles.logo} 
                />

                <h2>Night Market</h2>
                <button className={styles['buy-btn']}>Buy Now</button>
            </div>


            <div className={styles['card-image-wrapper']}>
                <img src="/MerchPhotos/NightMarket/2023-2024/NM_23-24_BACK.PNG" />
            </div>
          </div>
          
          {/* GENERAL BODY SHIRT */}
          <div className={styles['merch-card']}>
            <div className={styles['card-content']}>
              <span>2023-2024</span>
              <h2>NM Hoodie</h2>
              <button className={styles['buy-btn']}>Buy Now</button>
            </div>
            <div className={styles['card-image-wrapper']}>
              <img src="Mer.jpg" alt="Merch" />
            </div>
          </div>

          {/* YINGHUA SHIRT */}
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
      </section>  {/* ---- END OF CAROUSEL SECTION ---- */}



    </div> /* ---- END OF MERCH PAGE ---- */
  );
};

export default Merch;